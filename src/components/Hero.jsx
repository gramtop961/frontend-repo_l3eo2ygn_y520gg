import { ArrowRight, Code2, Rocket } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent" />
      <div className="max-w-6xl mx-auto px-4 py-24 md:py-28 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold mb-4">
              <Rocket size={14} /> Open to Full-Stack Roles
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              Sagar Janjoted
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-600 leading-relaxed">
              Full-Stack Web Developer with hands-on experience in Hibernate/JPA, REST APIs, and React/Next.js. Built projects with JWT auth and CI/CD, plus internship experience on a Java MVC2 web app.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition">
                View Projects <ArrowRight size={16} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 border border-slate-300 text-slate-800 px-4 py-2 rounded-lg hover:bg-slate-50 transition">
                Contact Me
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-sm text-slate-600">
              <span className="inline-flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-full"><Code2 size={14}/> Java</span>
              <span className="inline-flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-full">Spring Boot</span>
              <span className="inline-flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-full">Hibernate/JPA</span>
              <span className="inline-flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-full">React/Next.js</span>
              <span className="inline-flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-full">MySQL • MongoDB</span>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-fuchsia-600 p-[2px] shadow-lg">
              <div className="w-full h-full rounded-2xl bg-white grid place-items-center">
                <div className="text-center p-8">
                  <div className="mx-auto h-24 w-24 rounded-full bg-blue-600/10 grid place-items-center text-blue-700 font-bold text-3xl">SJ</div>
                  <p className="mt-4 text-slate-600">Building reliable backends and polished frontends.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
