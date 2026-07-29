import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { MdQuiz, MdCheckCircle, MdCancel } from "react-icons/md";
import { activityService } from "../services/course-structure-service";
import type { StructureActivity } from "../types/course-structure";

interface QuizCardProps {
  courseId: string;
  activity: NonNullable<StructureActivity>;
}

const QuizCard = ({ courseId, activity }: QuizCardProps) => {
  const queryClient = useQueryClient();
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [retrying, setRetrying] = useState(false);

  const isLocked = activity.status === "LOCKED";
  const alreadyGraded = activity.status === "GRADED";

  const { data: questions, isLoading } = useQuery({
    queryKey: ["activity-questions", activity.id],
    queryFn: () => activityService.getQuestions(activity.id),
    enabled: !isLocked && (!alreadyGraded || retrying),
  });

  const submitMutation = useMutation({
    mutationFn: () =>
      activityService.submit(
        activity.id,
        Object.entries(answers).map(([question_id, selected_option]) => ({
          question_id,
          selected_option,
        })),
      ),
    onSuccess: () => {
      setRetrying(false);
      queryClient.invalidateQueries({
        queryKey: ["course-structure", courseId],
      });
    },
  });

  if (isLocked) {
    return (
      <div className="glass-card rounded-2xl p-6 border-l-4 border-white/10 opacity-60">
        <div className="flex items-center gap-3 mb-2">
          <MdQuiz size={22} className="text-gray-500" />
          <h3 className="font-bold text-gray-400">{activity.title}</h3>
        </div>
        <p className="text-xs text-gray-500">
          Conclua todas as aulas do módulo para liberar esta avaliação.
        </p>
      </div>
    );
  }

  if (alreadyGraded && !retrying) {
    const passed = activity.passed;
    return (
      <div
        className={`glass-card rounded-2xl p-6 border-l-4 ${
          passed ? "border-green-500" : "border-red-500"
        }`}
      >
        <div className="flex items-center gap-3 mb-2">
          {passed ? (
            <MdCheckCircle size={22} className="text-green-500" />
          ) : (
            <MdCancel size={22} className="text-red-500" />
          )}
          <h3 className="font-bold text-white">{activity.title}</h3>
        </div>
        <p className="text-sm text-gray-300">
          Nota: {activity.grade} / 10 (mínima: {activity.minimum_grade})
        </p>
        {!passed && (
          <>
            <p className="text-xs text-red-400 mt-1 mb-4">
              Nota insuficiente para liberar o próximo módulo.
            </p>
            <button
              onClick={() => {
                setAnswers({});
                submitMutation.reset();
                setRetrying(true);
              }}
              className="w-full py-2.5 rounded-xl bg-violet-600 text-white text-xs font-bold hover:bg-violet-700 transition-all"
            >
              Tentar novamente
            </button>
          </>
        )}
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="glass-card rounded-2xl p-6">
        <p className="text-sm text-gray-400">Carregando avaliação...</p>
      </div>
    );
  }

  if (submitMutation.isSuccess) {
    const result = submitMutation.data.automatic_correction;
    return (
      <div
        className={`glass-card rounded-2xl p-6 border-l-4 ${
          result.passed ? "border-green-500" : "border-red-500"
        }`}
      >
        <div className="flex items-center gap-3 mb-2">
          {result.passed ? (
            <MdCheckCircle size={22} className="text-green-500" />
          ) : (
            <MdCancel size={22} className="text-red-500" />
          )}
          <h3 className="font-bold text-white">Resultado</h3>
        </div>
        <p className="text-sm text-gray-300">
          Você acertou {result.correct_answers} de{" "}
          {result.total_objective_questions} — nota {result.grade}
        </p>
        {!result.passed && (
          <>
            <p className="text-xs text-red-400 mt-2 mb-4">
              Nota abaixo da mínima ({result.minimum_grade}).
            </p>
            <button
              onClick={() => {
                setAnswers({});
                submitMutation.reset();
                setRetrying(true);
              }}
              className="w-full py-2.5 rounded-xl bg-violet-600 text-white text-xs font-bold hover:bg-violet-700 transition-all"
            >
              Tentar novamente
            </button>
          </>
        )}
      </div>
    );
  }

  const objectiveQuestions = questions?.objective_questions ?? [];
  const allAnswered = objectiveQuestions.every(
    (q) => answers[String(q.id)] !== undefined,
  );

  return (
    <div className="glass-card rounded-2xl p-6 border-l-4 border-violet-600 space-y-6">
      <div className="flex items-center gap-3">
        <MdQuiz size={22} className="text-violet-500" />
        <h3 className="font-bold text-white">{activity.title}</h3>
      </div>

      {objectiveQuestions.map((question, index) => {
        const options = [
          question.option_1,
          question.option_2,
          question.option_3,
          question.option_4,
          question.option_5,
        ].filter((opt): opt is string => Boolean(opt));

        return (
          <div key={question.id} className="space-y-2">
            <p className="text-sm font-medium text-gray-200">
              {index + 1}. {question.description}
            </p>
            <div className="space-y-1">
              {options.map((option, optionIndex) => {
                const value = optionIndex + 1;
                const selected = answers[String(question.id)] === value;
                return (
                  <label
                    key={optionIndex}
                    className={`flex items-center gap-3 p-2.5 rounded-lg cursor-pointer border transition-colors ${
                      selected
                        ? "border-violet-600 bg-violet-600/10"
                        : "border-white/10 hover:bg-white/5"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      checked={selected}
                      onChange={() =>
                        setAnswers((prev) => ({
                          ...prev,
                          [String(question.id)]: value,
                        }))
                      }
                      className="accent-violet-600"
                    />
                    <span className="text-sm text-gray-300">{option}</span>
                  </label>
                );
              })}
            </div>
          </div>
        );
      })}

      <button
        onClick={() => submitMutation.mutate()}
        disabled={!allAnswered || submitMutation.isPending}
        className="w-full py-3 rounded-xl bg-violet-600 text-white text-sm font-medium hover:bg-violet-700 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {submitMutation.isPending ? "Enviando..." : "Enviar respostas"}
      </button>
    </div>
  );
};

export default QuizCard;
