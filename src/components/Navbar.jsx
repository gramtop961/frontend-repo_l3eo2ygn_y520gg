import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-extrabold tracking-tight text-slate-900 text-xl">
          Sagar <span className="text-blue-600">Janjoted</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/STRO09"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/sagar-janjoted"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:sagarjanjoted123@gmail.com"
            className="p-2 rounded-full hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-slate-100"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-slate-700 hover:text-blue-600"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://github.com/STRO09" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-slate-100">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/sagar-janjoted" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-slate-100">
                <Linkedin size={20} />
              </a>
              <a href="mailto:sagarjanjoted123@gmail.com" className="p-2 rounded-full hover:bg-slate-100">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
