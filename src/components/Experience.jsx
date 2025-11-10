export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Experience</h2>
        <div className="mt-8 grid gap-6">
          <div className="rounded-2xl border border-slate-200 p-6">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h3 className="font-semibold text-slate-900">Java Development Training + Internship – SDAC INFOTECH, Mumbai</h3>
              <span className="text-sm text-slate-600">July 2024 - October 2024</span>
            </div>
            <ul className="mt-4 list-disc pl-5 text-slate-700 space-y-1">
              <li>Contributed to an e-commerce ERP portal using MVC2 and Design by Contract principles.</li>
              <li>Backend focus with Java Servlets + JDBC and JSP, using MySQL for data storage.</li>
              <li>Exposure to real-world practices: Git/GitHub, Eclipse, XML configuration, and Tomcat deployment.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
