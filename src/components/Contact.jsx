import { Mail, Phone, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-t from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Get in touch</h2>
        <p className="mt-2 text-slate-600">Open to full-time roles, internships, and freelance opportunities.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold text-slate-900">Contact Details</h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li className="flex items-center gap-3"><Mail size={18}/> sagarjanjoted123@gmail.com</li>
              <li className="flex items-center gap-3"><Phone size={18}/> +91 9699-432854</li>
              <li className="flex items-center gap-3"><Github size={18}/><a href="https://github.com/STRO09" className="hover:underline">github.com/STRO09</a></li>
              <li className="flex items-center gap-3"><Linkedin size={18}/><a href="https://linkedin.com/sagar-janjoted" className="hover:underline">linkedin.com/sagar-janjoted</a></li>
            </ul>
          </div>

          <form className="rounded-2xl border border-slate-200 bg-white p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-600">Name</label>
                <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-slate-600">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-slate-600">Message</label>
                <textarea rows="4" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Say hello..." />
              </div>
            </div>
            <button type="button" className="mt-4 inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
