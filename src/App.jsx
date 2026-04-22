export default function Portfolio() {
  const projects = [
    {
      title: "Meeting Room Booking App",
      subtitle: "Flutter + Firebase",
      description:
        "A modern meeting room booking app with login, booking flow, profile dashboard, booking history, and responsive UI.",
      tags: ["Flutter", "Firebase", "Booking App", "Responsive UI"],
      link: "https://github.com/nethranekar88-tech/meeting-room-booking-app",
    },
    {
      title: "TrekAura Travel Website",
      subtitle: "Travel & Trek Booking Website",
      description:
        "A premium travel and trek booking website with featured trips, testimonials, FAQ, popup details, and booking-focused layout.",
      tags: ["HTML", "CSS", "JavaScript", "Travel Website"],
      link: "https://github.com/nethranekar88-tech/trekaura-travel-website",
    },
    {
      title: "HR Recruitment Portal",
      subtitle: "Web App",
      description:
        "A recruitment management web application for candidate workflows, job postings, and structured data handling.",
      tags: ["Web App", "HR Tech", "Dashboard"],
      link: "https://github.com/nethranekar88-tech/hr-recruitment-portal",
    },
    {
      title: "Flutter Travel Booking App",
      subtitle: "Mobile UI Project",
      description:
        "A Flutter-based travel booking interface for destination discovery, trip browsing, and clean mobile UI presentation.",
      tags: ["Flutter", "Travel App", "Mobile UI"],
      link: "https://github.com/nethranekar88-tech/flutter-travel-booking-app",
    },
    {
      title: "TripMate Travel App",
      subtitle: "FlutterFlow + Flutter",
      description:
        "A travel planning and booking style app concept showcasing modern layout, cards, and startup-friendly app design.",
      tags: ["FlutterFlow", "Flutter", "Travel Product"],
      link: "https://github.com/nethranekar88-tech/tripmate-travel-app",
    },
  ];

  const skills = [
    "Flutter",
    "FlutterFlow",
    "Firebase",
    "Dart",
    "REST APIs",
    "Git & GitHub",
    "HTML/CSS",
    "JavaScript",
    "Responsive Design",
    "UI Design",
  ];

  return (
    <div className="min-h-screen bg-[#0b1020] text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#0b1020] via-[#10182f] to-[#18284c]">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_#60a5fa,_transparent_25%),radial-gradient(circle_at_bottom_left,_#a78bfa,_transparent_20%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="mb-4 inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1 text-sm text-blue-200">
              Flutter & FlutterFlow Developer
            </p>
            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
              Hi, I'm <span className="text-blue-400">Nethra Nekar</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              I build clean, modern mobile apps and websites for startups, businesses,
              travel brands, and booking-based products using Flutter, FlutterFlow,
              Firebase, and web technologies.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://github.com/nethranekar88-tech"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
              >
                View GitHub
              </a>
              <a
                href="https://www.upwork.com/freelancers/~0129f5261d60e91e5b"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Upwork
              </a>
              <a
                href="https://www.fiverr.com/nethranekar22/buying?source=avatar_menu_profile"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Fiverr
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm">
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="rounded-[28px] bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-3">
                <img
                  src="/profile.jpg"
                  alt="Nethra Nekar"
                  className="h-[420px] w-full rounded-[24px] object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
            <h2 className="text-2xl font-bold text-white">About Me</h2>
            <p className="mt-4 leading-8 text-slate-300">
              I'm a software developer focused on Flutter, FlutterFlow, Firebase, and responsive UI development.
              I enjoy building practical business apps, booking systems, travel products, and polished frontend experiences.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
            <h2 className="text-2xl font-bold text-white">Core Skills</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <p className="mt-2 text-slate-400">Selected projects from my GitHub portfolio.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:border-blue-400/30"
            >
              <p className="text-sm font-medium uppercase tracking-wide text-blue-300">
                {project.subtitle}
              </p>
              <h3 className="mt-3 text-2xl font-bold text-white">{project.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-2xl bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 shadow-2xl shadow-black/20 md:p-12">
          <h2 className="text-3xl font-bold">Let's Build Something Great</h2>
          <p className="mt-4 max-w-2xl leading-8 text-slate-200">
            I'm open to freelance projects, Flutter app development, booking systems,
            travel websites, admin apps, and modern business websites.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:nethranekar68@gmail.com"
              className="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/nethra-nekar-ab2494259/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
