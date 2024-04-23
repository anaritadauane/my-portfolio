import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProjectsList from "./components/ProjectList";
import SkillList from "./components/SkillList";
import Header from "./components/Header";
import { Project } from "./types/Project";

const projects: Project[] = [
  {
    id: 1,
    name: "Hlela",
    description: `Hlela is a platform for reviewing and discovering companies, facilitating community-based feedback using NestJS for the backend and NextJS for the frontend.`,
    website: "www.hlela.com",
  },
  {
    id: 2,
    name: "Gitty",
    description:
      "Gitty is a platform that which helps beginners find suitable issues to start contributing to in open-source projects hosted on GitHub.",
    website: "https://gitty-nine.vercel.app/",
  },
  {
    id: 3,
    name: "everything delicious",
    description: "everything delicious",
    website: "www.everythingdelicious.com",
  },
];

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <ProjectsList projects={projects} />
      <SkillList />
      <Footer />
    </div>
  );
}
