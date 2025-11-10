import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-commerce Portal",
    description:
      "ERP-style e-commerce with seller and consumer modules, MVC2 architecture, MySQL, and thorough API testing.",
    tags: ["Java", "Servlets", "JSP", "JDBC", "MySQL", "Tomcat"],
    links: {
      github: "https://github.com/STRO09",
    },
  },
  {
    title: "Roulette Blockchain Game",
    description:
      "Decentralized multiplayer roulette betting with fairness via off-chain randomness. Tested with Hardhat/Ganache.",
    tags: ["Next.js", "Ethers.js", "Hardhat", "Metamask"],
    links: {
      demo: "#",
      github: "https://github.com/STRO09",
    },
  },
  {
    title: "Issues & Deployment Tracker (ongoing)",
    description:
      "Full-stack issue tracking and deployment workflow tool with role-based auth and JWT-secured APIs.",
    tags: ["Java", "Hibernate", "MySQL", "Next.js", "JWT", "CI/CD"],
    links: {
      demo: "#",
      github: "https://github.com/STRO09",
    },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Projects</h2>
        <p className="mt-2 text-slate-600">Selected work showcasing backend strength and UI polish.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition">
              <h3 className="font-bold text-lg text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full">{t}</span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                {p.links.demo && (
                  <a href={p.links.demo} className="inline-flex items-center gap-1 text-blue-700 hover:underline">
                    Live <ExternalLink size={16} />
                  </a>
                )}
                {p.links.github && (
                  <a href={p.links.github} className="inline-flex items-center gap-1 text-slate-800 hover:underline">
                    Code <Github size={16} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
