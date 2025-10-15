import ProjectCard from './ProjectCard';

const projectsData = [
  "Engenharia-de-Software-main",
  "Smart-Home-Solutions-UI",
  "Smart-Home-Solutions-API",
  "bdproj",
  "CM-Android",
  "ihc-proj-2",
  "WS-TP1",
  "RMI-A2-22-23",
  "RMI-22-23",
  "VI-22-23",
  "CM-22-23",
  "AA2",
  "AA3",
  "Biometria_Projeto",
  "atcll-mobile-backend",
  "atcll-bus-app-main",
  "tpg-tetris-ia_equipa_6-main",
  "project-1---vulnerabilities-equipa_16-main",
  "project-2---authentication-equipa_16-main",
  "altice-labs-ui",
  "altice-labs",
  "TAI-G7-Lab2",
  "TAI-G7-Lab1",
  "Spotify-Discord-BOT"
]

const projectData = {
  "Engenharia-de-Software-main": { demo: null, visit: null },
  "Smart-Home-Solutions-UI": { demo: "https://www.youtube.com/watch?v=cpTlBkZe4VE", visit: null },
  "Smart-Home-Solutions-API": { demo: "https://www.youtube.com/watch?v=cpTlBkZe4VE", visit: null },
  "bdproj": { demo: "https://youtu.be/3CTDktONccw", visit: null },
  "CM-Android": { demo: null, visit: "https://github.com/NMPC27/CM-Android/releases" },
  "ihc-proj-2": { demo: null, visit: "https://ihc-psi.vercel.app/" },
  "WS-TP1": { demo: null, visit: null },
  "RMI-A2-22-23": { demo: null, visit: null },
  "RMI-22-23": { demo: null, visit: null },
  "VI-22-23": { demo: null, visit: "https://nmpc27.github.io/VI-22-23/" },
  "CM-22-23": { demo: null, visit: null },
  "AA2": { demo: null, visit: null },
  "AA3": { demo: null, visit: null },
  "Biometria_Projeto": { demo: null, visit: null },
  "atcll-mobile-backend": { demo: "https://www.youtube.com/watch?v=5ISG9VQtByE", visit: null },
  "atcll-bus-app-main": { demo: "https://www.youtube.com/watch?v=5ISG9VQtByE", visit: null },
  "tpg-tetris-ia_equipa_6-main": { demo: "https://www.youtube.com/watch?v=2Kd3KGwfX5Y", visit: null },
  "project-1---vulnerabilities-equipa_16-main": { demo: null, visit: null },
  "project-2---authentication-equipa_16-main": { demo: null, visit: null },
  "altice-labs-ui": { demo: null, visit: null },
  "altice-labs": { demo: null, visit: null },
  "TAI-G7-Lab2": { demo: null, visit: null },
  "TAI-G7-Lab1": { demo: null, visit: null },
  "Spotify-Discord-BOT": { demo: null, visit: "https://github.com/NMPC27/Spotify-Discord-BOT/releases" }
};

export default function Projects() {

  return (
    <div id='projects' className="relative z-50  my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="w-full mx-auto max-w-2xl"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)]">
                <ProjectCard project={project} projectData={projectData} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
