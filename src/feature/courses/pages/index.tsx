import CourseCard from "../components/course-card";

const courses = [
  {
    id: 1,
    title: "UI/UX Design Avançado",
    instructor: "Prof. Marcus Vinícius",
    category: "Tecnologia",
    progress: 20,
    hours: 42,
    completed: true,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuALBaKWn7SrBig3xDGgDO7SG76KEftOt8BIlRk6Pj17gHmafPbB49tasadgCcaruNWZzhSCQVUfaShesoZFXG5FVc-9YA1A8xwIymEIwxECJcb5Xt-RZWjydyJ0_SiC3Nta17zjfnLVAvRie_if81ucuZa9VDc6gGxnOIJdRX0-987pmdfsqIZFG7nl2FbDZ2njsVxt4Sp3rhUsnJbXNp_1O2YykgatUrZsfZN2PNHafb744u93OtMYa56AezmL3bQBMrRsGzcePRVa",
  },
  {
    id: 1,
    title: "UI/UX Design Avançado",
    instructor: "Prof. Marcus Vinícius",
    category: "Tecnologia",
    progress: 75,
    hours: 42,
    completed: false,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuALBaKWn7SrBig3xDGgDO7SG76KEftOt8BIlRk6Pj17gHmafPbB49tasadgCcaruNWZzhSCQVUfaShesoZFXG5FVc-9YA1A8xwIymEIwxECJcb5Xt-RZWjydyJ0_SiC3Nta17zjfnLVAvRie_if81ucuZa9VDc6gGxnOIJdRX0-987pmdfsqIZFG7nl2FbDZ2njsVxt4Sp3rhUsnJbXNp_1O2YykgatUrZsfZN2PNHafb744u93OtMYa56AezmL3bQBMrRsGzcePRVa",
  },
  {
    id: 2,
    title: "UI/UX Design Avançado",
    instructor: "Prof. Marcus Vinícius",
    category: "Tecnologia",
    progress: 10,
    hours: 42,
    completed: false,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuALBaKWn7SrBig3xDGgDO7SG76KEftOt8BIlRk6Pj17gHmafPbB49tasadgCcaruNWZzhSCQVUfaShesoZFXG5FVc-9YA1A8xwIymEIwxECJcb5Xt-RZWjydyJ0_SiC3Nta17zjfnLVAvRie_if81ucuZa9VDc6gGxnOIJdRX0-987pmdfsqIZFG7nl2FbDZ2njsVxt4Sp3rhUsnJbXNp_1O2YykgatUrZsfZN2PNHafb744u93OtMYa56AezmL3bQBMrRsGzcePRVa",
  },
  {
    id: 3,
    title: "UI/UX Design Avançado",
    instructor: "Prof. Marcus Vinícius",
    category: "Tecnologia",
    progress: 75,
    hours: 42,
    completed: false,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuALBaKWn7SrBig3xDGgDO7SG76KEftOt8BIlRk6Pj17gHmafPbB49tasadgCcaruNWZzhSCQVUfaShesoZFXG5FVc-9YA1A8xwIymEIwxECJcb5Xt-RZWjydyJ0_SiC3Nta17zjfnLVAvRie_if81ucuZa9VDc6gGxnOIJdRX0-987pmdfsqIZFG7nl2FbDZ2njsVxt4Sp3rhUsnJbXNp_1O2YykgatUrZsfZN2PNHafb744u93OtMYa56AezmL3bQBMrRsGzcePRVa",
  },
  {
    id: 4,
    title: "UI/UX Design Avançado",
    instructor: "Prof. Marcus Vinícius",
    category: "Tecnologia",
    progress: 25,
    hours: 42,
    completed: false,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuALBaKWn7SrBig3xDGgDO7SG76KEftOt8BIlRk6Pj17gHmafPbB49tasadgCcaruNWZzhSCQVUfaShesoZFXG5FVc-9YA1A8xwIymEIwxECJcb5Xt-RZWjydyJ0_SiC3Nta17zjfnLVAvRie_if81ucuZa9VDc6gGxnOIJdRX0-987pmdfsqIZFG7nl2FbDZ2njsVxt4Sp3rhUsnJbXNp_1O2YykgatUrZsfZN2PNHafb744u93OtMYa56AezmL3bQBMrRsGzcePRVa",
  },
];

export default function CoursesPage() {
  return (
    <div className="overflow-scroll h-screen pt-2 px-2 md:px-8 pb-10">
      <div className="bg-primary text-white min-h-screen  bg-grid-pattern  ">
        <section className="max-w-7xl mx-auto px-6 pt-12 pb-24">
          <div className="mb-8">
            <h2 className="heading-display text-white mb-2">
              Cursos Instituto Educar{" "}
            </h2>
            <p className="body text-gray-400">
              Explore uma variedade de cursos de qualidade e desenvolva suas
              habilidades.
            </p>
          </div>

          <div className="flex flex-row items-center gap-2 p-1.5 bg-gray-900/50 w-fit rounded-2xl text-label md:text-base mb-5">
            <button className="md:px-6 py-2.5 px-3  rounded-xl body font-semibold hover:bg-linear-to-r from-violet-600 to-violet-800 hover:shadow-lg shadow-violet-500/20">
              Todos
            </button>
            <button className="md:px-6 px-3 py-2.5 rounded-xl body font-medium text-gray-500 hover:bg-linear-to-r from-violet-600 to-violet-800 hover:shadow-lg shadow-violet-500/20 hover:bg-white/5 transition-colors">
              Em andamento
            </button>
            <button className="md:px-6 px-3 py-2.5 rounded-xl body font-medium text-gray-500 hover:bg-linear-to-r from-violet-600 to-violet-800 hover:shadow-lg shadow-violet-500/20 hover:bg-white/5 transition-colors">
              Concluídos
            </button>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
      </div>

      {/* FAB para inserir quando tiver um chat
      
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-linear-to-r from-violet-600 to-violet-800 text-white rounded-full shadow-2xl shadow-violet-500/40 hover:scale-110 active:scale-95 transition-all z-50">
        <span className="material-symbols-outlined">chat</span>
      </button> */}
    </div>
  );
}
