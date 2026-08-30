import { createFileRoute } from "@tanstack/react-router";
import gaiaLogo from "@/assets/gaia-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GAIA — Automatización con IA para empresas" },
      {
        name: "description",
        content:
          "GAIA conecta tus herramientas y automatiza procesos con IA. Chatbots, análisis de datos e integraciones que corren solas 24/7.",
      },
      { property: "og:title", content: "GAIA — Automatización con IA para empresas" },
      {
        property: "og:description",
        content:
          "Conecta tus herramientas y deja que los procesos fluyan solos. Menos clics, cero fricción.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

type Project = {
  index: string;
  title: string;
  description: string;
  url: string;
  tags: string[];
  icon: React.ReactNode;
};

const PROJECTS: Project[] = [
  {
    index: "01",
    title: "Ventas y Stock ABM",
    description:
      "Sistema de gestión integral para control de inventario, registro de ventas y administración de productos con panel interactivo en tiempo real.",
    url: "https://preeminent-pegasus-899cf1.netlify.app/",
    tags: ["Gestión Comercial", "Stock", "Automatización"],
    icon: <span className="h-4 w-4 rounded-sm bg-ink" />,
  },
  {
    index: "02",
    title: "Catálogo Interactivo + Pedidos por WhatsApp",
    description:
      "Catálogo digital de productos con carrito de compras integrado y generación automática de pedidos listos para enviar directo a WhatsApp.",
    url: "https://magavi9.github.io/CATALOGO-CON-PEDIDO-WHATSAPP/",
    tags: ["E-commerce", "WhatsApp API", "Ventas"],
    icon: <span className="h-4 w-4 rounded-md bg-ink" style={{ clipPath: "polygon(0 0, 100% 0, 80% 100%, 0 100%)" }} />,
  },
  {
    index: "03",
    title: "Sistema de Agenda de Turnos y Recordatorios",
    description:
      "Plataforma web de reservas online para gestión de citas, disponibilidad horaria y confirmación automática de turnos para profesionales y negocios.",
    url: "https://moonlit-hotteok-01dff4.netlify.app",
    tags: ["Reservas", "Turnos Online", "Gestión"],
    icon: <span className="h-4 w-4 rounded-[3px] bg-ink" style={{ clipPath: "polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%)" }} />,
  },
  {
    index: "04",
    title: "Sitio Web & Tienda Online Profesional",
    description:
      "Diseño web corporativo y de comercio electrónico optimizado para dispositivos móviles, catálogo destacado y presencia de marca sólida.",
    url: "https://gentle-capybara-e8efd1.netlify.app/",
    tags: ["Diseño Web", "Tienda Online", "UI/UX"],
    icon: <span className="h-4 w-4 rounded-full bg-ink" />,
  },
  {
    index: "05",
    title: "Tarjeta Digital de Presentación Profesional",
    description:
      "Solución minimalista y moderna de contacto rápido en un solo enlace para compartir perfiles, redes, ubicación y servicios profesionales.",
    url: "https://tarjeta-de-presentaci-n-digital-1.ai.studio",
    tags: ["Branding", "Tarjeta Digital", "Contacto"],
    icon: <span className="h-4 w-4 rounded-full bg-ink" style={{ clipPath: "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)" }} />,
  },
  {
    index: "06",
    title: "Organizador Personal & Dashboard de Tareas y Finanzas",
    description:
      "Panel de productividad personal para seguimiento diario de tareas, control de pagos, compromisos y recordatorios clave.",
    url: "https://cerulean-starlight-fb004c.netlify.app/",
    tags: ["Productividad", "Organización", "Dashboard"],
    icon: <span className="h-4 w-4 rounded-sm bg-ink" style={{ clipPath: "polygon(0 20%,100% 20%,100% 80%,0 80%)" }} />,
  },
  {
    index: "07",
    title: "Estudiabot — Tutor Pedagógico y Active Recall",
    description:
      "Asistente educativo potenciado con IA para generación de esquemas conceptuales, tutoría guiada, método Pomodoro y exportación de fichas de estudio.",
    url: "https://estudiabot-tutor-pedag-gico-y-active-recall.ai.studio",
    tags: ["Inteligencia Artificial", "Educación", "EdTech"],
    icon: <span className="h-4 w-4 rounded-md bg-ink" style={{ clipPath: "polygon(50% 0, 100% 38%, 82% 100%, 18% 100%, 0 38%)" }} />,
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-ink font-body text-zinc-300">
      {/* NAV */}
      <header className="text-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <a href="#" className="flex items-center gap-2 text-white">
            <img
              src={gaiaLogo.url}
              alt="GAIA — IA a tu medida"
              className="h-8 w-auto"
              width={650}
              height={176}
            />
          </a>
          <nav className="hidden items-center gap-8 font-medium md:flex">
            <a href="#servicios" className="transition-colors hover:text-white">
              Servicios
            </a>
            <a href="#proceso" className="transition-colors hover:text-white">
              Proceso
            </a>
            <a href="#resultados" className="transition-colors hover:text-white">
              Resultados
            </a>
          </nav>
          <a
            href="#cta"
            className="chrome-surface rounded-full px-4 py-2 text-sm font-medium transition-transform hover:-translate-y-0.5"
          >
            Agendar demo
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-ink">
        <div className="mx-auto max-w-6xl px-6 pb-24 pt-16 md:pb-32 md:pt-24">
          <div className="grid items-center gap-12 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-lime/5 px-3 py-1 text-xs font-medium text-lime ring-1 ring-lime/30">
                <span className="size-1.5 rounded-full bg-lime"></span> Automatización con IA para
                empresas
              </span>
              <h1 className="mt-6 font-display text-5xl font-semibold leading-none tracking-[-0.03em] text-white md:text-7xl">
                Automatiza el trabajo repetitivo con IA
              </h1>
              <p className="mt-6 max-w-[46ch] text-pretty font-body text-base leading-relaxed text-zinc-400 md:text-lg">
                GAIA conecta tus herramientas y deja que los procesos fluyan solos. Menos clics,
                cero fricción y tu equipo enfocado en lo que importa.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#cta"
                  className="chrome-surface group inline-flex items-center rounded-full py-3 pl-5 pr-4 text-sm font-semibold ring-1 ring-black/10 transition-transform hover:-translate-y-0.5"
                >
                  <span className="grid size-7 place-items-center rounded-full bg-ink/10">
                    <span
                      className="ml-0.5 h-0 w-0"
                      style={{
                        borderTop: "5px solid transparent",
                        borderBottom: "5px solid transparent",
                        borderLeft: "8px solid #0a1226",
                      }}
                    ></span>
                  </span>
                  Agendar demo
                </a>
                <a
                  href="#servicios"
                  className="inline-flex items-center rounded-full py-3 px-5 text-sm font-medium text-zinc-200 ring-1 ring-white/15 transition-colors hover:text-white hover:ring-white/40"
                >
                  Ver cómo funciona
                </a>
              </div>
              <p className="mt-10 text-xs font-medium uppercase tracking-wide text-zinc-500">
                Impulsan sus operaciones
              </p>
              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 font-display font-medium text-zinc-500">
                <span>Grupo Andino</span>
                <span>Vectoria</span>
                <span>Cordillera</span>
                <span>Manantial</span>
                <span>Ruta Sur</span>
              </div>
            </div>

            {/* FLOW PANEL */}
            <div className="md:col-span-5">
              <div className="relative rounded-[20px] bg-ink2 p-6 ring-1 ring-white/10">
                <div className="mb-5 flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-lime"></span>
                  <span className="size-2.5 rounded-full bg-sky"></span>
                  <span className="size-2.5 rounded-full bg-white/30"></span>
                  <span className="ml-auto text-[11px] font-medium uppercase tracking-wide text-zinc-500">
                    flujo activo
                  </span>
                </div>

                <div className="mb-4 rounded-[14px] bg-white/[0.03] p-5 ring-1 ring-white/10">
                  <p className="text-[11px] font-medium uppercase tracking-wide text-zinc-500">
                    Entrada
                  </p>
                  <p className="mt-1 font-display text-base font-medium text-white">
                    Nuevo pedido · CRM
                  </p>
                </div>

                <div className="flex items-center justify-center">
                  <span className="h-4 w-px bg-gradient-to-b from-lime to-transparent"></span>
                </div>
                <div className="flex items-center gap-2 py-1">
                  <span className="size-2 rounded-full bg-lime floaty"></span>
                  <span
                    className="size-2 rounded-full bg-sky"
                    style={{ animationDelay: ".3s" }}
                  ></span>
                  <span
                    className="size-2 rounded-full bg-white/40"
                    style={{ animationDelay: ".6s" }}
                  ></span>
                </div>

                <div className="mb-4 rounded-[14px] bg-lime/5 p-5 ring-1 ring-lime/30">
                  <p className="text-[11px] font-medium uppercase tracking-wide text-lime">
                    Procesado por IA
                  </p>
                  <p className="mt-1 font-display text-base font-medium text-white">
                    Valida datos y asigna agente
                  </p>
                </div>

                <div className="flex items-center justify-center">
                  <span className="h-4 w-px bg-gradient-to-b from-sky to-transparent"></span>
                </div>
                <div className="flex items-center gap-2 py-1">
                  <span
                    className="size-2 rounded-full bg-sky floaty"
                    style={{ animationDelay: ".2s" }}
                  ></span>
                  <span
                    className="size-2 rounded-full bg-lime"
                    style={{ animationDelay: ".5s" }}
                  ></span>
                  <span
                    className="size-2 rounded-full bg-white/40"
                    style={{ animationDelay: ".8s" }}
                  ></span>
                </div>

                <div className="rounded-[14px] bg-white/[0.03] p-5 ring-1 ring-white/10">
                  <p className="text-[11px] font-medium uppercase tracking-wide text-zinc-500">
                    Salida
                  </p>
                  <p className="mt-1 font-display text-base font-medium text-white">
                    Orden lista · 12s
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="servicios" className="bg-celeste-soft">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-[44ch]">
            <p className="font-display text-sm font-medium uppercase tracking-wide text-lime [filter:saturate(1.2)]">
              Proyectos
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.02em] text-ink text-balance md:text-4xl">
              Soluciones digitales listas para tu negocio
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-zinc-500">
              Cada proyecto está en vivo. Toca “Ver Demo en Vivo” para probarlo en una pestaña nueva.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p) => (
              <article
                key={p.title}
                className="group flex flex-col rounded-[16px] bg-white p-6 ring-1 ring-black/5 transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="chrome-surface-tilt grid size-11 place-items-center rounded-[10px]">
                    {p.icon}
                  </span>
                  <span className="font-display text-xs font-semibold uppercase tracking-wide text-zinc-400">
                    {p.index}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-pretty font-body text-sm leading-relaxed text-zinc-500">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-ink/5 px-2.5 py-1 text-[11px] font-medium text-ink/70 ring-1 ring-ink/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chrome-surface mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold ring-1 ring-black/10 transition-transform hover:-translate-y-0.5"
                >
                  Ver Demo en Vivo
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-4"
                  >
                    <path d="M7 17 17 7" />
                    <path d="M8 7h9v9" />
                  </svg>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="bg-ink">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-[40ch]">
            <p className="font-display text-sm font-medium uppercase tracking-wide text-lime">
              Cómo funciona
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.02em] text-white text-balance md:text-4xl">
              Del caos al flujo en cuatro pasos
            </h2>
          </div>
          <div className="mt-14 grid gap-x-6 gap-y-10 md:grid-cols-4">
            <div>
              <span className="chrome-gradient-text font-display text-5xl font-semibold leading-none tracking-[-0.03em] md:text-6xl">
                01
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">Auditamos</h3>
              <p className="mt-2 text-pretty font-body text-sm leading-relaxed text-zinc-400">
                Mapeamos tus procesos y detectamos dónde se pierde tiempo y dinero.
              </p>
            </div>
            <div>
              <span className="chrome-gradient-text font-display text-5xl font-semibold leading-none tracking-[-0.03em] md:text-6xl">
                02
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">Diseñamos</h3>
              <p className="mt-2 text-pretty font-body text-sm leading-relaxed text-zinc-400">
                Definimos el flujo ideal y las reglas que tu IA seguirá sin dudar.
              </p>
            </div>
            <div>
              <span className="chrome-gradient-text font-display text-5xl font-semibold leading-none tracking-[-0.03em] md:text-6xl">
                03
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">Integramos</h3>
              <p className="mt-2 text-pretty font-body text-sm leading-relaxed text-zinc-400">
                Conectamos tus herramientas y probamos cada paso en producción.
              </p>
            </div>
            <div>
              <span className="chrome-gradient-text font-display text-5xl font-semibold leading-none tracking-[-0.03em] md:text-6xl">
                04
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">Medimos</h3>
              <p className="mt-2 text-pretty font-body text-sm leading-relaxed text-zinc-400">
                Monitoreamos métricas y optimizamos el flujo cada semana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section id="resultados" className="bg-celeste-soft">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="font-display text-sm font-medium uppercase tracking-wide text-lime [filter:saturate(1.2)]">
                Resultados
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.02em] text-ink text-balance md:text-4xl">
                Números que reflejan el ahorro real
              </h2>
              <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-12">
                <div>
                  <p className="font-display text-5xl font-semibold leading-none tracking-[-0.03em] text-ink md:text-6xl">
                    85%
                  </p>
                  <p className="mt-3 font-body text-sm text-zinc-500">
                    menos trabajo manual en operaciones clave
                  </p>
                </div>
                <div>
                  <p className="font-display text-5xl font-semibold leading-none tracking-[-0.03em] text-ink md:text-6xl">
                    4.2×
                  </p>
                  <p className="mt-3 font-body text-sm text-zinc-500">
                    más rápido el ciclo de cada proceso
                  </p>
                </div>
                <div>
                  <p className="font-display text-5xl font-semibold leading-none tracking-[-0.03em] text-ink md:text-6xl">
                    30k
                  </p>
                  <p className="mt-3 font-body text-sm text-zinc-500">
                    tareas automatizadas cada mes
                  </p>
                </div>
                <div>
                  <p className="font-display text-5xl font-semibold leading-none tracking-[-0.03em] text-ink md:text-6xl">
                    99.9%
                  </p>
                  <p className="mt-3 font-body text-sm text-zinc-500">
                    de disponibilidad en producción
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <figure className="rounded-[16px] bg-ink p-8 ring-1 ring-black/5">
                <blockquote className="font-display text-pretty text-lg font-medium leading-snug text-white">
                  “En tres meses GAIA eliminó el 80% de la carga administrativa de nuestro equipo de
                  ventas.”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="chrome-surface-tilt grid size-10 place-items-center rounded-full font-display text-sm font-semibold">
                    MV
                  </span>
                  <span>
                    <span className="block font-display text-sm font-semibold text-white">
                      Marina Villarroel
                    </span>
                    <span className="block font-body text-sm text-zinc-500">
                      Directora de Operaciones · Vectoria
                    </span>
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="cta" className="bg-ink">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div
            className="rounded-[24px] p-10 text-center ring-1 ring-white/10 md:p-14"
            style={{ background: "linear-gradient(135deg,#152144,#0a1226)" }}
          >
            <p className="font-display text-sm font-medium uppercase tracking-wide text-lime">
              Contacto
            </p>
            <h2 className="mx-auto mt-3 max-w-[18ch] font-display text-3xl font-semibold leading-tight tracking-[-0.02em] text-white text-balance md:text-5xl">
              Solicitá tu presupuesto o una demostración
            </h2>
            <p className="mx-auto mt-5 max-w-[46ch] text-pretty font-body text-base leading-relaxed text-zinc-400 md:text-lg">
              Cuéntanos tu reto y te mostramos un flujo automatizado funcionando en 48 horas. Respondemos en menos de un día hábil.
            </p>
            <form
              className="mx-auto mt-9 flex max-w-md flex-col justify-center gap-3 sm:flex-row"
              action="https://wa.me/5490000000000"
              method="get"
              target="_blank"
              rel="noopener noreferrer"
            >
              <input
                type="email"
                name="text"
                placeholder="tu@empresa.com"
                className="flex-1 rounded-full bg-white/5 px-5 py-3 text-sm text-white ring-1 ring-white/15 placeholder:text-zinc-500 focus:outline-none focus:ring-lime/60"
              />
              <button
                type="submit"
                className="chrome-surface rounded-full px-6 py-3 text-sm font-semibold ring-1 ring-black/10 transition-transform hover:-translate-y-0.5"
              >
                Solicitar demo
              </button>
            </form>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-body text-sm text-zinc-400">
              <a
                href="https://wa.me/5490000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-4 text-lime">
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.737-.98zm6.454-9.885c-.079-.133-.29-.213-.606-.373-.316-.158-1.868-.922-2.158-1.028-.29-.105-.502-.158-.713.158-.211.316-.817 1.028-1.002 1.238-.185.211-.369.237-.685.079-.316-.158-1.334-.492-2.54-1.568-.939-.838-1.572-1.873-1.756-2.189-.185-.316-.02-.487.139-.645.143-.142.316-.37.474-.556.158-.185.211-.316.316-.527.105-.211.053-.396-.026-.554-.079-.158-.713-1.718-.976-2.353-.258-.619-.52-.535-.713-.545l-.606-.011c-.211 0-.554.079-.844.395-.29.316-1.108 1.082-1.108 2.638 0 1.556 1.134 3.06 1.292 3.271.158.211 2.231 3.409 5.407 4.783.755.326 1.344.521 1.803.667.757.241 1.446.207 1.991.125.608-.091 1.868-.764 2.132-1.502.264-.738.264-1.37.185-1.502z" />
                </svg>
                WhatsApp directo
              </a>
              <a
                href="mailto:hola@gaiaservicios.com"
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4 text-sky">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 7 10 6 10-6" />
                </svg>
                hola@gaiaservicios.com
              </a>
            </div>
            <p className="mt-6 font-body text-xs text-zinc-500">
              Sin tarjeta. Respuesta en menos de un día hábil.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-ink">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <img
              src={gaiaLogo.url}
              alt="GAIA — IA a tu medida"
              className="h-9 w-auto"
              width={650}
              height={176}
            />
            
            <p className="mt-4 max-w-[30ch] text-pretty font-body text-sm leading-relaxed text-zinc-500">
              Automatización con IA para que tu equipo trabaje en lo que sí importa.
            </p>
          </div>
          <div className="md:col-span-2 md:col-start-6">
            <p className="font-display text-xs font-semibold uppercase tracking-wide text-zinc-400">
              Producto
            </p>
            <ul className="mt-4 space-y-3 font-body text-sm text-zinc-500">
              <li>
                <a href="#servicios" className="transition-colors hover:text-white">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#proceso" className="transition-colors hover:text-white">
                  Proceso
                </a>
              </li>
              <li>
                <a href="#resultados" className="transition-colors hover:text-white">
                  Resultados
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="font-display text-xs font-semibold uppercase tracking-wide text-zinc-400">
              Compañía
            </p>
            <ul className="mt-4 space-y-3 font-body text-sm text-zinc-500">
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-6 pb-10">
          <p className="font-body text-xs text-zinc-600">
            © 2026 GAIA. Hecho para equipos de LATAM.
          </p>
        </div>
      </footer>
    </div>
  );
}
