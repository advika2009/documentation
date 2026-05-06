export default function ArtTechPortfolio() {
  const projects = [
    {
      id: "romantic-movie",
      title: "30 Second Romantic Movie",
      subtitle: "Short film",
      year: "2026",
      status: "Project 1",
      description:
        "This short film frames romantic love as a quiet act of attention rather than a dramatic gesture. A person is shown getting ready to leave, slightly rushed and distracted, with a small detail out of place. Their partner notices without calling it out and gently fixes it. The emotional turning point comes in the pause that follows, when the care behind the gesture is recognized and quietly returned.",
      concept:
        "Without dialogue, the film shows love as mutual noticing: an everyday, almost invisible exchange that transforms a normal moment into something intimate and meaningful.",
      tools: ["Film", "Editing", "Visual Storytelling"],
      highlights: [
        "Silent narrative structure",
        "Focus on intimate everyday gestures",
        "Reciprocity through mirrored action",
        "Love shown as attention rather than spectacle",
      ],
      accent: "from-rose-400 via-pink-500 to-red-400",
      videoEmbed: "https://www.youtube.com/embed/dsTK2IE_dDM",
      videoFile: "",
    },
    {
      id: "notification-ecology",
      title: "Notification Ecology",
      subtitle: "40 second audio composition",
      year: "2026",
      status: "Project 2",
      description:
        "This piece treats everyday phone behavior as an environment rather than music. Built from field recordings made in Rhodes Hall, the composition layers multiple takes to create an evolving texture that moves from sparse activity to density and overload.",
      concept:
        "At the 30 second mark, the sound world collapses through a hard mute transition, followed by a quieter residue where small traces return. The work focuses on how electronic micro-sounds such as hums, clicks, taps, and interruptions shape attention and atmosphere, turning ordinary infrastructure into a legible sonic space.",
      tools: ["Field Recording", "Audio Editing", "Sound Design"],
      highlights: [
        "Progression from sparsity to overload",
        "Hard mute collapse at 30 seconds",
        "Electronic noise as environmental texture",
      ],
      accent: "from-cyan-400 via-sky-500 to-blue-500",
      videoEmbed: "https://www.youtube.com/embed/OJK583w1AX0",
      videoFile: "",
    },
    {
      id: "present-tense",
      title: "Present Tense",
      subtitle: "Programmatic p5.js project",
      year: "2026",
      status: "Project 3",
      description:
        "Present Tense is a real-time generative visual work built in p5.js. The piece produces abstract forms that continuously evolve based on three computational inputs: system time, randomized algorithmic variation, and live cursor movement. As the viewer moves their mouse, the density, speed, and direction of the forms shift.",
      concept:
        "Because the system uses a time-based seed and live interaction, the exact configuration can never repeat. The work argues that authenticity in a computational age may persist not in a fixed object, but in a fleeting event shaped by both algorithmic process and embodied human presence.",
      tools: ["p5.js", "Generative Art", "Creative Coding"],
      highlights: [
        "Generated frame by frame through code",
        "Driven by time, probability, and cursor input",
        "No fixed visual state can repeat",
        "Engages Benjamin's idea of aura through live interaction",
      ],
      accent: "from-violet-500 via-fuchsia-500 to-pink-500",
      videoEmbed: "https://www.youtube.com/embed/Su0kPflFjGU",
      videoFile: "",
    },
    {
      id: "hand-as-data",
      title: "Hand as Data",
      subtitle: "Computer vision project",
      year: "2026",
      status: "Project 4",
      description:
        "Hand as Data explores how computer vision systems interpret the human body through machine-readable information rather than human meaning. Using live hand tracking, the project transforms gestures into coordinates, landmarks, and vectors, revealing the hidden infrastructure behind AI vision systems.",
      concept:
        "While people understand the hand through expression and familiarity, the system reduces it into abstract data points. The project exposes the gap between embodied human experience and computational representation.",
      tools: ["Computer Vision", "Hand Tracking", "Interactive Systems"],
      highlights: [
        "Live gesture tracking",
        "Body translated into machine-readable data",
        "Visualizes hidden AI infrastructure",
        "Contrasts human meaning with computational reduction",
      ],
      accent: "from-emerald-400 via-lime-400 to-yellow-300",
      videoEmbed: "https://www.youtube.com/embed/27iEp6ixXDU",
      videoFile: "",
    },
    {
      id: "made-from-you",
      title: "Made From You",
      subtitle: "Hack of Spotify DJ X",
      year: "2026",
      status: "Project 5",
      description:
        "This project is a speculative hack of Spotify DJ X, the platform’s AI-powered music recommendation feature. It begins as a familiar personalized listening experience, imitating Spotify’s interface, tone, and recommendation logic. Over time, the system gradually shifts from recommending music to analyzing and shaping the listener’s emotional behavior.",
      concept:
        "By the end of the piece, Spotify’s phrase Made for You becomes Made from You, revealing the listener as the source material being mined and optimized by the platform. The project critiques emotional profiling, behavioral prediction, and algorithmic mood management hidden inside systems that present themselves as helpful and neutral.",
      tools: ["Speculative Design", "Platform Critique", "Video / Interface Design"],
      highlights: [
        "Hack of a recognizable platform interface",
        "Progresses across several staged days of use",
        "Personalization becomes emotional manipulation",
        "Questions whether systems understand or shape us",
      ],
      accent: "from-green-400 via-emerald-500 to-teal-400",
      videoEmbed: "https://www.youtube.com/embed/jkA_D8RUp3c",
      videoFile: "",
    },
    {
  id: "final-project",
  title: "Affect Mix",
  subtitle: "Final exhibition project",
  year: "2026",
  status: "Project 6",
  description:
    "Affect Mix emerged from a series of earlier experiments where I explored AI, interaction, and user input, but often stopped at the level of technical demonstration rather than fully developed artistic experience. Going into the final project, I wanted to shift that balance. Instead of starting from the technology, I focused first on the experience: what the viewer would feel, understand, and question when interacting with the system.",
  concept:
    "The result is an interface that asks users to report their emotional state and then generates a deliberately mismatched Daily Mix of music. The system does not reflect the user’s emotion. Instead, it translates it into something it considers more useful. Calm becomes intensity, sadness becomes energy, and overwhelm becomes stimulation. By mimicking familiar recommendation systems while revealing an underlying logic of reinterpretation and optimization, the project critiques how algorithmic systems reshape human behavior according to internal priorities rather than accurately understanding it.",
  tools: ["HTML", "CSS", "JavaScript", "Interface Design", "Critical Design"],
  highlights: [
    "Built from feedback on earlier AI and interaction experiments",
    "Uses emotional input but deliberately distorts the output",
    "Mimics recommendation systems while exposing their hidden logic",
    "Focuses on experience, critique, and interpretive discomfort",
  ],
  accent: "from-orange-400 via-amber-400 to-yellow-300",
  videoEmbed: "",
  videoFile: "",
  projectLink: "https://musical-belekoy-257557.netlify.app/",
}
  ];

  const stats = [
    {
      label: "Theme",
      title: "Emotion, systems, and interaction",
      text:
        "These projects explore how digital interfaces guide feeling, assign meaning, and shape the way people experience systems.",
    },
    {
      label: "Approach",
      title: "Critical + experimental",
      text:
        "Some pieces are playful. Some are uncomfortable. Together, they test how interaction design can move beyond usability and become reflective.",
    },
    
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.12),transparent_26%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm tracking-wide text-zinc-300">
              Advika Prasad • INFO 4940
            </span>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Projects from my class, collected in one place.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-300 md:text-lg">
              A portfolio website documenting interactive experiments, conceptual media work,
              and browser-based projects developed across the semester. The through-line is
              interface, emotion, critique, and playful interaction.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition hover:scale-[1.01]"
              >
                View projects
              </a>
              <a
                href="#about"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                About the work
              </a>
            </div>

            <div className="mt-10 rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/20">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Quick navigation</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <a
                    key={project.id}
                    href={`#${project.id}`}
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/10"
                  >
                    {project.status}: {project.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-14 md:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">{item.label}</p>
              <h2 className="mt-3 text-xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-300">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 pb-20 md:px-10">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">Projects</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">Selected work</h2>
          </div>
          
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <article
              id={project.id}
              key={project.title}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/20"
            >
              <div className={`h-2 w-full bg-gradient-to-r ${project.accent}`} />
              <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
                <div className="p-7 md:p-9">
                  <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-400">
                    <span>{project.subtitle}</span>
                    <span className="h-1 w-1 rounded-full bg-zinc-600" />
                    <span>{project.year}</span>
                    <span className="h-1 w-1 rounded-full bg-zinc-600" />
                    <span>{project.status}</span>
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300 md:text-base">
                    {project.description}
                  </p>

                  {project.videoEmbed ? (
  <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
    <iframe
      src={project.videoEmbed}
      title={`${project.title} video`}
      className="aspect-video w-full"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
) : project.videoFile ? (
  <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-2">
    <video controls className="aspect-video w-full rounded-xl">
      <source src={project.videoFile} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
) : project.projectLink ? (
  <a
    href={project.projectLink}
    target="_blank"
    rel="noreferrer"
    className="mt-6 block rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-zinc-300 transition hover:bg-white/10"
  >
    <p className="font-medium text-zinc-100">Open live project</p>
    <p className="mt-2 text-zinc-400">{project.projectLink}</p>
  </a>
) : (
  <div className="mt-6 rounded-2xl border border-dashed border-white/15 bg-white/[0.03] p-5">
    <p className="text-sm font-medium text-zinc-200">Add video here</p>
    <p className="mt-2 text-sm leading-6 text-zinc-400">
      Add either a YouTube/Vimeo embed link in videoEmbed or a local mp4 path in videoFile.
    </p>
  </div>
)}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/10 bg-black/20 p-7 lg:border-l lg:border-t-0 md:p-9">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Highlights</p>
                  <div className="mt-4 space-y-3">
                    {project.highlights.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-zinc-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

              
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      
    </div>
  );
}