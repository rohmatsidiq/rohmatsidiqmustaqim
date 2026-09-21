// app/projects/[slug]/page.jsx
import { projectsData } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  FiArrowLeft,
  FiExternalLink,
  FiGithub,
  FiCheckCircle,
  FiAlertCircle,
  FiTrendingUp,
} from "react-icons/fi";
import Footer from "@/app/components/Footer";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} - Case Study & Portfolio`,
    description: project.desc,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-900 text-white py-10 px-5">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Navigasi Kembali */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-yellow-500 hover:text-yellow-400 font-medium transition-colors"
        >
          <FiArrowLeft /> Back
        </Link>

        {/* Header Project */}
        <div className="space-y-4">
          <div className="flex gap-2 flex-wrap">
            {project.work.map((w, i) => (
              <span
                key={i}
                className="bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 px-3 py-1 rounded-full text-xs font-semibold"
              >
                {w}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            {project.title}
          </h1>
          <p className="text-xl text-gray-300">{project.desc}</p>
        </div>

        {/* Hero Image */}
        <div className="w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-yellow-500/20"
            >
              Visit Live Project <FiExternalLink />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold px-6 py-3 rounded-xl border border-white/10 transition-all"
            >
              Repository GitHub <FiGithub />
            </a>
          )}
        </div>

        {/* Konten Studi Kasus (Problem, Solution, Impact) */}
        <div className="grid md:grid-cols-3 gap-10 pt-6 border-t border-white/10">
          <div className="md:col-span-2 space-y-10">
            {/* Overview */}
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-white">Description</h2>
              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </section>

            {/* Problem Statement */}
            {project.problem && (
              <section className="space-y-4 bg-red-950/20 border border-red-500/20 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-red-400 flex items-center gap-2">
                  <FiAlertCircle /> Problem & Challenges
                </h3>
                <ul className="space-y-3 text-gray-300">
                  {project.problem.map((item, idx) => (
                    <li key={idx} className="text-sm leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Solution & Key Features */}
            {project.features && (
              <section className="space-y-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <FiCheckCircle className="text-yellow-500" /> Key Features &
                  Solutions
                </h3>
                <div className="grid gap-3">
                  {project.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-800/40 border border-white/5 p-4 rounded-xl text-gray-300 text-sm leading-relaxed"
                    >
                      {feat}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Impact & Results */}
            {project.impacts && (
              <section className="space-y-4 bg-teal-950/20 border border-teal-500/20 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-teal-400 flex items-center gap-2">
                  <FiTrendingUp /> Key Impact & Results
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  {project.impacts.map((imp, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-teal-400 font-bold">✓</span> {imp}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Sidebar Tech Stack */}
          <div className="space-y-6 bg-slate-800/50 p-6 rounded-2xl border border-white/5 h-fit">
            <h3 className="text-lg font-bold text-white">Tech Stack</h3>
            <div className="flex flex-col gap-3">
              {project.tech.map((t, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-black/30 p-3 rounded-xl border border-white/5"
                >
                  <img
                    src={`/${t.img}`}
                    className="w-6 h-6 object-contain"
                    alt={t.name}
                  />
                  <span className="text-sm font-medium text-white">
                    {t.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
