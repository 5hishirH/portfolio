import trendTroveImg from "@/assets/projectImg/TrendTrove.png";
import jobAltasImg from "@/assets/projectImg/JobAltas.png";
import ProjectCards from "./ProjectCards";

const Projects = () => {
  const projects = [
    {
      name: "TrendTrove",
      info: "A fashion and apparel selling website",
      githubLink: "https://github.com/5hishirH/BrandShop-client.git",
      liveLink: "https://fashion-and-apparel-31c61.firebaseapp.com/",
      tech: [
        "react",
        "tailwindcss",
        "daisyUI",
        "mongodb",
        "express",
        "firebase auth",
      ],
      img: trendTroveImg,
    },
    {
      name: "JobAltas",
      info: "A listing website",
      githubLink: "https://github.com/5hishirH/JobAltas-client",
      liveLink: "https://job-listing-website.web.app/",
      tech: [
        "react",
        "tailwindcss",
        "daisyUI",
        "mongodb",
        "express",
        "firebase auth",
      ],
      img: jobAltasImg,
    },
  ];
  return (
    <div className="bg-secondary lg:bg-accent text-white py-10 lg:py-40">
      <div className="w-4/5 lg:w-3/5 mx-auto">
        <h2 className="text-3xl">My Complete Projects</h2>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects?.map((e, i) => (
            <ProjectCards key={i} data={e} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
