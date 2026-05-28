import LessonNav from "../components/lesson-navbar";

import LessonHeader from "../components/lesson-header";
import LessonTabs from "../components/lesson-tab";
import LessonDescription from "../components/lesson-description";
import ModuleContent from "../components/module-content";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import VideoPlayer from "../components/video-lesson/video-controls";
import { videoProgressService } from "../services/video-services-lesson";

const VideoLesson = () => {
  return (
    <div className="max-h-screen bg-primary overflow-scroll">
      <LessonNav />

      <main className="max-w-7xl mx-auto p-4 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          <VideoPlayer lessonId={1} />
          <LessonHeader />
          <LessonTabs />
          <LessonDescription />
        </div>

        <ModuleContent />
      </main>

      <Footer />

      <ThemeToggle />
    </div>
  );
};

const Footer = () => (
  <footer className="mt-12 py-10 border-t border-white/5 bg-primary/20">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <p className="text-gray-400 text-sm">
        © 2026 Instituto Educar Aparecida. Todos os direitos reservados.
      </p>
      <div className="flex items-center justify-center gap-2 mt-2">
        <span className="w-1 h-1 bg-violet-600 rounded-full"></span>
        <p className="text-gray-700 text-label uppercase tracking-[0.2em]">
          Transformando vidas através da educação
        </p>
        <span className="w-1 h-1 bg-violet-600 rounded-full"></span>
      </div>
    </div>
  </footer>
);

const ThemeToggle = () => (
  <button className="fixed bottom-6 right-6 w-12 h-12 glass-card rounded-full shadow-2xl flex items-center justify-center text-violet-600 z-100 hover:scale-110 hover:rotate-12 transition-all active:scale-95">
    <span className="material-symbols-outlined dark:hidden">
      <MdDarkMode />
    </span>
    <span className="material-symbols-outlined hidden dark:block">
      <MdLightMode />
    </span>
  </button>
);

export default VideoLesson;
