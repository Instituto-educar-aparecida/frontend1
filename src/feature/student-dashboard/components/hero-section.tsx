import { useAuthStore } from "@/store/use-auth-store";
import { XpCard } from "./xp-card";

export function HeroSection() {
  const { user } = useAuthStore();
  return (
    <div className="flex items-end xs:flex-col xs:items-center justify-between xs:text-center mb-10 mt-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">
          Olá, {user?.name}! 👋
        </h1>
        <p className="text-gray-400 xs:mb-3">
          Continue seu aprendizado de onde você parou.
        </p>
      </div>
      <XpCard />
    </div>
  );
}
