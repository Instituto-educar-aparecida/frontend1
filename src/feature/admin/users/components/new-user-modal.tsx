import { useState } from "react";
import { MdClose } from "react-icons/md";
import api from "@/lib/axios";
import { useQueryClient } from "@tanstack/react-query";

interface Props {
  onClose: () => void;
}

export function NewUserModal({ onClose }: Props) {
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "STUDENT",
  });

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.password) {
      setError("Preencha todos os campos.");
      return;
    }
    try {
      setLoading(true);
      setError("");
      await api.post("/auth/register", form);
      queryClient.invalidateQueries({ queryKey: ["admin-users"] });
      onClose();
    } catch (err: any) {
      setError(err.response?.data?.message || "Erro ao criar usuário.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.6)" }}
      onClick={onClose}
    >
      <div
        className="bg-secondary border border-white/10 rounded-2xl p-6 w-full max-w-md mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-100">Novo Usuário</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-200 transition-all">
            <MdClose size={20} />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-xs text-gray-400 mb-1 block">Nome completo</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Ex: João Silva"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-200 outline-none focus:border-violet-600 transition-all"
            />
          </div>
          <div>
            <label className="text-xs text-gray-400 mb-1 block">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="joao@exemplo.com"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-200 outline-none focus:border-violet-600 transition-all"
            />
          </div>
          <div>
            <label className="text-xs text-gray-400 mb-1 block">Senha</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="Mínimo 8 caracteres"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-200 outline-none focus:border-violet-600 transition-all"
            />
          </div>
          <div>
            <label className="text-xs text-gray-400 mb-1 block">Função</label>
            <select
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-200 outline-none focus:border-violet-600 transition-all"
            >
              <option value="STUDENT">Aluno</option>
              <option value="INSTRUCTOR">Professor</option>
              <option value="SECRETARIA">Secretaria</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>

          {error && (
            <p className="text-xs text-red bg-red/10 px-3 py-2 rounded-lg">{error}</p>
          )}

          <div className="flex gap-3 pt-2">
            <button
              onClick={onClose}
              className="flex-1 py-2 rounded-lg border border-white/10 text-sm text-gray-400 hover:bg-white/5 transition-all"
            >
              Cancelar
            </button>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="flex-1 py-2 rounded-lg bg-violet-600 text-white text-sm font-medium hover:bg-violet-700 transition-all disabled:opacity-50"
            >
              {loading ? "Criando..." : "Criar usuário"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
