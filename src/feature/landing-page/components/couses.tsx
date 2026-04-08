// src/features/Courses/Courses.tsx
import { MdArrowForward } from "react-icons/md";
import { CourseCard } from "./course-card";

export function Courses() {
  const courses = [
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB_hbhiU1HlAG-KljBlIxD7HXsOhQ0i360eKN1bZIapYVze-pLwm6Vp6myG_bar4iCl7tTh4Ny5NhAed3uEJ2FQtM1IbcED8_mTH5w7xyZfPHcc6nch3NSK6ft5wbgyCSvFzo-ed4Evw5mIPr-qd1w2lxl9NUmn7q3uz8_Ddi6t47vhhSGL-e55sYCa837fmogb3K_a7iiq8AGF-Q63UoIOOjcTtANaL3DiA_Ls-m8rqXcxj4qHvhEaMP6ZrvZanbwQ24GlF9qCd8ri",
      tag: "Design",
      title: "Design de Interfaces",
      description:
        "Aprenda a criar experiências digitais memoráveis com foco em UX e UI avançado.",
      duration: "40h",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA_emd7aPsIUiUHy9seshKTRwYHoe43vcVvnXM8yXUOFL8LssBHpnuqIvXOkZCAhBhP_g3z0mV3lGz2EO-72uZajGLUelmMk46qz2KXO479kias2Vwp5AzCikU2fqoP7oUAY2o7Hkr3Gx0kiH28XJpQ3d1dtUpsej6-YUhyx5QJbL8LPEMFciKxw2JhxkGfZAUXZo_PVVSdt_hQ3A3RAnjInLPAL77OFfvxMHfzaf7Nlr0BpsyRBVB---0jf_7gmvtpqf2iA9WDH5zi",
      tag: "Tech",
      title: "Desenvolvimento Web",
      description:
        "Do HTML ao React. Domine o desenvolvimento front-end moderno com as melhores práticas.",
      duration: "80h",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAx3-NyeJNAozXsP4arZMeEHce_gbVfrwnvWfDLXLCHWqGWWSG_PqSUv8Yz1LgxLrHTnyMO8BoxIUWIPgNmQhFa91BeaB2zetKB99b7cJ2JdDksN91LMtej4qh6jbqEu9Iz1TNErkAvnFzyJ5qspE3r3CvnOKPhunB8TaV7nSa3sDU9X36LFvtIzaZpb17eu38rvXqjfgh2mz8_sE3K2an9s57SUk5LVeL9PDGvbC7vCDDRENjYKDTiS4PqoklNCc02CLsUMrSASLVP",
      tag: "Marketing",
      title: "Marketing Digital",
      description:
        "Estratégias de crescimento, SEO, anúncios pagos e criação de conteúdo orientado a dados.",
      duration: "32h",
    },
  ];

  return (
    <section className="py-24 px-20 min-[375px]:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold font-headline mb-4 text-white">
              Cursos em Destaque
            </h2>
            <p className="text-violet-10 max-w-lg">
              Explore as trilhas de conhecimento mais procuradas e comece sua
              especialização hoje mesmo.
            </p>
          </div>
          <button className="text-violet-50 font-bold flex items-center gap-2 group">
            Ver todos os cursos
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
              <MdArrowForward />
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <CourseCard key={i} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
}
