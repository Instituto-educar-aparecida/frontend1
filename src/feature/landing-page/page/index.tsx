import { About } from "../components/about";
import { Courses } from "../components/couses";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { ImpactNumbers } from "../components/impact-numbers";

export function Home() {
  return (
    <div className=" bg-primary  font-body selection:bg-primary/30">
      <Header />
      <Hero />
      <About />
      <Courses />
      <ImpactNumbers />
      <Footer />
    </div>
  );
}
