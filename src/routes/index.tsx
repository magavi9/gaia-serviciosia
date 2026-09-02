import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Eye, Mail, MessageCircle, X } from "lucide-react";
import gaiaLogo from "@/assets/gaia-logo.png.asset.json";
import ventasStockCover from "@/assets/projects/ventas-stock.png";
import catalogoWhatsappCover from "@/assets/projects/catalogo-whatsapp.png";
import agendaTurnosCover from "@/assets/projects/agenda-turnos.png";
import tiendaWebCover from "@/assets/projects/tienda-web.png";
import tarjetaDigitalCover from "@/assets/projects/tarjeta-digital.png";
import organizadorPersonalCover from "@/assets/projects/organizador-personal.png";
import estudiabotCover from "@/assets/projects/estudiabot.png";
import cotizadorCover from "@/assets/projects/cotizador.png.asset.json";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

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

type GuideMode = {
  label: string;
  title: string;
  steps: string[];
};

type Project = {
  index: string;
  title: string;
  description: string;
  url: string;
  technologies: string[];
  category: Category;
  cover: string;
  guide: {
    title: string;
    steps: string[];
    modes?: GuideMode[];
  };
};

type Category = "Gestión & Negocios" | "E-commerce" | "Productividad";
type Filter = "Todos" | Category;

const FILTERS: Filter[] = ["Todos", "Gestión & Negocios", "E-commerce", "Productividad"];

const PROJECTS: Project[] = [
  {
    index: "01",
    title: "Ventas y Stock ABM",
    description:
      "Sistema de gestión integral para control de inventario, registro de ventas y administración de productos con panel interactivo en tiempo real.",
    url: "https://preeminent-pegasus-899cf1.netlify.app/",
    technologies: ["Gestión Comercial", "Stock", "Automatización"],
    category: "Gestión & Negocios",
    cover: ventasStockCover,
    guide: {
      title: "💡 Probá el sistema de stock y caja",
      steps: [
        "Andá a la Sección Registrar Venta: seleccioná un producto en la lista desplegable.",
        "Elegí Cantidad (2 o 3) y Agregalo al Carrito, observa que pasa de 0 a lo que seleccionaste.",
        "Finalizá la venta y verás el monto a cobrar.",
        "En inventario, a la derecha comprobá el descuento automático de unidades en el stock.",
      ],
    },
  },
  {
    index: "02",
    title: "Catálogo Interactivo + Pedidos por WhatsApp",
    description:
      "Catálogo digital de productos con carrito de compras integrado y generación automática de pedidos listos para enviar directo a WhatsApp.",
    url: "https://magavi9.github.io/CATALOGO-CON-PEDIDO-WHATSAPP/",
    technologies: ["E-commerce", "WhatsApp API", "Ventas"],
    category: "E-commerce",
    cover: catalogoWhatsappCover,
    guide: {
      title: "💡 Hacé una simulación de compra",
      steps: [
        "Sumá productos con '+ Agregar al Pedido'.",
        "Mirá el carrito con el cálculo de precios.",
        "Tocá 'Enviar Pedido' para ver el mensaje formateado de WhatsApp.",
      ],
    },
  },
  {
    index: "03",
    title: "Sistema de Agenda de Turnos y Recordatorios",
    description:
      "Plataforma web de reservas online para gestión de citas, disponibilidad horaria y confirmación automática de turnos para profesionales y negocios.",
    url: "https://moonlit-hotteok-01dff4.netlify.app",
    technologies: ["Reservas", "Turnos Online", "Gestión"],
    category: "Gestión & Negocios",
    cover: agendaTurnosCover,
    guide: {
      title: "💡 Probá reservar un turno",
      steps: [
        "Seleccioná un profesional o servicio.",
        "Elegí fecha y horario disponible.",
        "Completá tus datos.",
        "Confirmá tu reserva para ver la confirmación inmediata.",
      ],
      modes: [
        {
          label: "Modo Paciente",
          title: "💡 Probá reservar un turno",
          steps: [
            "Seleccioná un profesional o servicio.",
            "Elegí fecha y horario disponible.",
            "Completá tus datos.",
            "Confirmá tu reserva para ver la confirmación inmediata.",
          ],
        },
        {
          label: "Modo Profesional",
          title: "💡 ¿Cómo gestionar turnos?",
          steps: [
            "Visualizá la grilla diaria con pacientes agendados. Verás quién confirmó, quiénes están pendientes y los que fueron cancelados.",
            "Bloqueá horarios o días no disponibles con un clic.",
            "Configurá la duración de tus servicios y descansos sin complicaciones técnicas.",
          ],
        },
      ],
    },
  },
  {
    index: "04",
    title: "Sitio Web & Tienda Online Profesional",
    description:
      "Diseño web corporativo y de comercio electrónico optimizado para dispositivos móviles, catálogo destacado y presencia de marca sólida.",
    url: "https://gentle-capybara-e8efd1.netlify.app/",
    technologies: ["Diseño Web", "Tienda Online", "UI/UX"],
    category: "E-commerce",
    cover: tiendaWebCover,
    guide: {
      title: "💡 Recorré la tienda online",
      steps: [
        "Explorá el catálogo destacado en la página principal.",
        "Abrí un producto para ver su ficha y detalle completo.",
        "Navegá por las categorías y revisá el carrito de compras.",
      ],
    },
  },
  {
    index: "05",
    title: "Tarjeta Digital de Presentación Profesional",
    description:
      "Solución minimalista y moderna de contacto rápido en un solo enlace para compartir perfiles, redes, ubicación y servicios profesionales.",
    url: "https://tarjeta-de-presentaci-n-digital-1.ai.studio",
    technologies: ["Branding", "Tarjeta Digital", "Contacto"],
    category: "Gestión & Negocios",
    cover: tarjetaDigitalCover,
    guide: {
      title: "💡 Probá la tarjeta digital",
      steps: [
        "Tocá los botones de contacto: WhatsApp, mail y redes sociales.",
        "Explorá las secciones de servicios y ubicación en el mapa.",
        "Probá el botón de compartir para enviar tu tarjeta en un enlace.",
      ],
    },
  },
  {
    index: "06",
    title: "Organizador Personal & Dashboard",
    description:
      "Panel de productividad personal para seguimiento diario de tareas, control de pagos, compromisos y recordatorios clave.",
    url: "https://cerulean-starlight-fb004c.netlify.app/",
    technologies: ["Productividad", "Organización", "Dashboard"],
    category: "Productividad",
    cover: organizadorPersonalCover,
    guide: {
      title: "💡 ¿Cómo probar la demo?",
      steps: [
        "Creá una tarea con '+ Nueva Actividad', ponele nombre, elegí la Categoría y demás datos.",
        "Tocá las tarjetas métricas para filtrar automáticamente.",
        "Marcá una tarea como completada para ver la actualización en vivo.",
        "Con el botón Editar podés corregir o cambiar la tarea.",
        "Con Eliminar verás cómo desaparece.",
        "Si tocas el círculo a la izquierda del título de la tarea, la marca como hecha.",
      ],
    },
  },
  {
    index: "07",
    title: "Estudiabot — Tutor Pedagógico y Active Recall",
    description:
      "Asistente educativo potenciado con IA para generación de esquemas conceptuales, tutoría guiada, método Pomodoro y exportación de fichas de estudio.",
    url: "https://estudiabot-tutor-pedag-gico-y-active-recall.ai.studio",
    technologies: ["Inteligencia Artificial", "Educación", "EdTech"],
    category: "Productividad",
    cover: estudiabotCover,
    guide: {
      title: "💡 ¿Cómo probar la demo?",
      steps: [
        "Pegá un texto o apunte de estudio en el recuadro y tocá en Generar Material de Repaso.",
        "Respondé lo que te pregunta el tutor.",
        "Recibí tu evaluación pedagógica con Active Recall y la siguiente tarjeta de repaso.",
      ],
    },
  },
  {
    index: "08",
    title: "Cotizador & Reserva Inteligente",
    description:
      "Herramienta interactiva para cotizar servicios en tiempo real, seleccionar paquetes, fecha y hora de turno, y enviar la solicitud estructurada directamente por WhatsApp.",
    url: "https://lovable.dev/projects/572bcd94-8096-4bd6-bf02-9d5a1ef1bebc",
    technologies: ["Cotización en vivo", "Reservas", "WhatsApp"],
    category: "Gestión & Negocios",
    cover: cotizadorCover.url,
    guide: {
      title: "💡 Guía rápida para probar esta Demo",
      steps: [
        "Elegí un rubro: cambiá entre Taller, Estética o Servicios Digitales para ver cómo se transforman los servicios y opciones.",
        "Configurá tu presupuesto: seleccioná un servicio base, sumá adicionales y ajustá la cantidad con el contador.",
        "Elegí modalidad y turno: seleccioná el tipo de atención/plazo, una fecha en el calendario y una franja horaria.",
        "Revisá el resumen en vivo: observá cómo el total se calcula automáticamente.",
        "Probá el botón de WhatsApp: ingresá tu nombre y hacé clic en el botón verde final para ver cómo se autogenera el mensaje estructurado listo para enviar.",
      ],
    },
  },
];

function GuideSteps({ title, steps }: { title: string; steps: string[] }) {
  return (
    <div className="rounded-xl bg-white/[0.04] p-5 ring-1 ring-slate-800">
      <p className="font-display text-sm font-semibold text-brand">{title}</p>
      <ol className="mt-4 space-y-3">
        {steps.map((step, i) => (
          <li key={i} className="flex gap-3">
            <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand/15 text-xs font-bold text-brand ring-1 ring-brand/40">
              {i + 1}
            </span>
            <span className="text-sm leading-relaxed text-slate-200">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function GuideSection({ guide }: { guide: Project["guide"] }) {
  const [activeMode, setActiveMode] = useState(0);
  const [open, setOpen] = useState(true);
  const hasModes = Boolean(guide.modes && guide.modes.length > 0);
  const current = hasModes ? guide.modes![activeMode]! : { title: guide.title, steps: guide.steps };

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-6 w-full rounded-xl border border-brand/30 bg-brand/5 px-4 py-3 text-left text-sm font-semibold text-brand transition-colors hover:bg-brand/10"
      >
        💡 Guía rápida para probar esta Demo
      </button>
    );
  }

  return (
    <div className="mt-6 rounded-xl border border-brand/30 bg-brand/[0.04] p-4">
      <div className="flex items-start justify-between gap-3">
        <p className="font-display text-[11px] font-semibold uppercase tracking-wide text-brand">
          Guía rápida para probar esta Demo
        </p>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Cerrar guía"
          className="rounded-full p-1 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="size-4" />
        </button>
      </div>
      {hasModes && (
        <div className="mt-3 flex flex-wrap gap-2">
          {guide.modes!.map((mode, i) => (
            <button
              key={mode.label}
              type="button"
              onClick={() => setActiveMode(i)}
              className={cn(
                "rounded-full px-3 py-1 text-xs font-semibold ring-1 transition-colors",
                activeMode === i
                  ? "bg-brand text-[#041018] ring-brand"
                  : "bg-white/5 text-slate-300 ring-slate-700 hover:bg-white/10",
              )}
            >
              {mode.label}
            </button>
          ))}
        </div>
      )}
      <div className="mt-3">
        <GuideSteps title={current.title} steps={current.steps} />
      </div>
    </div>
  );
}

function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState<Filter>("Todos");
  const visibleProjects =
    activeFilter === "Todos" ? PROJECTS : PROJECTS.filter((project) => project.category === activeFilter);

  return (
    <>
      <div className="mt-8 flex flex-wrap gap-2" aria-label="Filtrar proyectos por categoría">
        {FILTERS.map((filter) => (
          <Button
            key={filter}
            type="button"
            variant="outline"
            aria-pressed={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "h-9 rounded-full border-slate-800 bg-white/[0.03] px-4 text-slate-300 shadow-none hover:bg-white/[0.07] hover:text-white",
              activeFilter === filter &&
                "border-brand bg-brand text-[#041018] hover:bg-brand hover:text-[#041018]",
            )}
          >
            {filter}
          </Button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <article
            key={project.title}
            className="group flex min-w-0 flex-col overflow-hidden rounded-2xl bg-ink2 ring-1 ring-slate-800 transition duration-300 hover:-translate-y-1 hover:ring-brand/40"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-ink2">
              <img
                src={project.cover}
                alt={`Vista previa de ${project.title}`}
                width={1400}
                height={900}
                loading="lazy"
                className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
              />
              <span className="absolute left-3 top-3 rounded-full bg-ink/85 px-3 py-1 text-[10px] font-semibold uppercase text-brand ring-1 ring-brand/30">
                {project.category}
              </span>
              <span className="absolute right-3 top-3 font-display text-xs font-semibold text-white drop-shadow-md">
                {project.index}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-display text-lg font-semibold text-white">{project.title}</h3>
              <p className="mt-2 flex-1 text-pretty font-body text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-brand/10 px-2.5 py-1 text-[11px] font-semibold text-brand ring-1 ring-brand/20"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-2 gap-2">
                <Button asChild className="h-10 rounded-lg bg-brand text-[#041018] shadow-none hover:bg-brand/90">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    Probar Demo <ArrowUpRight />
                  </a>
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      type="button"
                      variant="outline"
                      className="h-10 rounded-lg border-slate-700 bg-transparent text-slate-200 shadow-none hover:bg-white/5 hover:text-white"
                    >
                      Ver Detalles <Eye />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto border-slate-800 bg-ink p-0 text-white sm:rounded-2xl">
                    <img
                      src={project.cover}
                      alt={`Vista detallada de ${project.title}`}
                      width={1400}
                      height={900}
                      className="aspect-[16/9] w-full object-cover object-top"
                    />
                    <div className="p-6 pt-2">
                      <DialogHeader>
                        <p className="font-display text-xs font-semibold uppercase text-brand">{project.category}</p>
                        <DialogTitle className="font-display text-2xl text-white">{project.title}</DialogTitle>
                        <DialogDescription className="pt-2 text-base leading-relaxed text-slate-400">
                          {project.description}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <span key={technology} className="rounded-full bg-white/5 px-3 py-1 text-xs text-brand2 ring-1 ring-slate-800">
                            {technology}
                          </span>
                        ))}
                      </div>
                      <GuideSection guide={project.guide} />
                      <Button asChild className="mt-6 h-11 w-full rounded-lg bg-brand text-[#041018] shadow-none hover:bg-brand/90">
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          🚀 Abrir Demo en Vivo <ArrowUpRight />
                        </a>
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-ink font-body text-slate-300">
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
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand ring-1 ring-brand/40">
                <span className="size-1.5 rounded-full bg-brand"></span> Soluciones Digitales Inteligentes
              </span>
              <h1 className="mt-6 font-display text-5xl font-semibold leading-none tracking-[-0.03em] text-white md:text-7xl">
                Automatiza el trabajo repetitivo con IA
              </h1>
              <p className="mt-6 max-w-[46ch] text-pretty font-body text-base leading-relaxed text-slate-400 md:text-lg">
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
                        borderLeft: "8px solid #041018",
                      }}
                    ></span>
                  </span>
                  Agendar demo
                </a>
                <a
                  href="#servicios"
                  className="inline-flex items-center rounded-full py-3 px-5 text-sm font-medium text-slate-200 ring-1 ring-white/15 transition-colors hover:text-white hover:ring-white/40"
                >
                  Ver cómo funciona
                </a>
              </div>
                   
            </div>

            {/* FLOW PANEL */}
            <div className="md:col-span-5">
              <div className="relative rounded-2xl bg-ink2 p-6 ring-1 ring-slate-800">
                <div className="mb-5 flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-brand"></span>
                  <span className="size-2.5 rounded-full bg-brand2"></span>
                  <span className="size-2.5 rounded-full bg-white/30"></span>
                  <span className="ml-auto text-[11px] font-medium uppercase tracking-wide text-slate-500">
                    flujo activo
                  </span>
                </div>

                <div className="mb-4 rounded-[14px] bg-white/[0.03] p-5 ring-1 ring-white/10">
                  <p className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
                    Entrada
                  </p>
                  <p className="mt-1 font-display text-base font-medium text-white">
                    Nuevo pedido · CRM
                  </p>
                </div>

                <div className="flex items-center justify-center">
                  <span className="h-4 w-px bg-gradient-to-b from-brand to-transparent"></span>
                </div>
                <div className="flex items-center gap-2 py-1">
                  <span className="size-2 rounded-full bg-brand floaty"></span>
                  <span
                    className="size-2 rounded-full bg-brand2"
                    style={{ animationDelay: ".3s" }}
                  ></span>
                  <span
                    className="size-2 rounded-full bg-white/40"
                    style={{ animationDelay: ".6s" }}
                  ></span>
                </div>

                <div className="mb-4 rounded-[14px] bg-brand/5 p-5 ring-1 ring-brand/30">
                  <p className="text-[11px] font-medium uppercase tracking-wide text-brand">
                    Procesado por IA
                  </p>
                  <p className="mt-1 font-display text-base font-medium text-white">
                    Valida datos y asigna agente
                  </p>
                </div>

                <div className="flex items-center justify-center">
                  <span className="h-4 w-px bg-gradient-to-b from-brand2 to-transparent"></span>
                </div>
                <div className="flex items-center gap-2 py-1">
                  <span
                    className="size-2 rounded-full bg-brand2 floaty"
                    style={{ animationDelay: ".2s" }}
                  ></span>
                  <span
                    className="size-2 rounded-full bg-brand"
                    style={{ animationDelay: ".5s" }}
                  ></span>
                  <span
                    className="size-2 rounded-full bg-white/40"
                    style={{ animationDelay: ".8s" }}
                  ></span>
                </div>

                <div className="rounded-[14px] bg-white/[0.03] p-5 ring-1 ring-white/10">
                  <p className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
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
      <section id="servicios" className="bg-[#0b1220]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-[44ch]">
            <p className="font-display text-sm font-medium uppercase tracking-wide text-brand">
              Proyectos
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.02em] text-white text-balance md:text-4xl">
              Soluciones digitales listas para tu negocio
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-slate-400">
              Explorá una selección de soluciones creadas para simplificar operaciones, vender más y organizar mejor el trabajo.
            </p>
          </div>
          <ProjectsGrid />
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="bg-ink">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-[40ch]">
            <p className="font-display text-sm font-medium uppercase tracking-wide text-brand">
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
              <p className="mt-2 text-pretty font-body text-sm leading-relaxed text-slate-400">
                Mapeamos tus procesos y detectamos dónde se pierde tiempo y dinero.
              </p>
            </div>
            <div>
              <span className="chrome-gradient-text font-display text-5xl font-semibold leading-none tracking-[-0.03em] md:text-6xl">
                02
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">Diseñamos</h3>
              <p className="mt-2 text-pretty font-body text-sm leading-relaxed text-slate-400">
                Definimos el flujo ideal y las reglas que tu IA seguirá sin dudar.
              </p>
            </div>
            <div>
              <span className="chrome-gradient-text font-display text-5xl font-semibold leading-none tracking-[-0.03em] md:text-6xl">
                03
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">Integramos</h3>
              <p className="mt-2 text-pretty font-body text-sm leading-relaxed text-slate-400">
                Conectamos tus herramientas y probamos cada paso en producción.
              </p>
            </div>
            <div>
              <span className="chrome-gradient-text font-display text-5xl font-semibold leading-none tracking-[-0.03em] md:text-6xl">
                04
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">Medimos</h3>
              <p className="mt-2 text-pretty font-body text-sm leading-relaxed text-slate-400">
                Monitoreamos métricas y optimizamos el flujo cada semana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section id="resultados" className="bg-[#0b1220]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div>
            <p className="font-display text-sm font-medium uppercase tracking-wide text-brand">
              Resultados
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.02em] text-white text-balance md:text-4xl">
              Números que reflejan el ahorro real
            </h2>
            <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
              <div>
                <p className="font-display text-5xl font-semibold leading-none tracking-[-0.03em] text-white md:text-6xl">
                  85%
                </p>
                <p className="mt-3 font-body text-sm text-slate-400">
                  menos trabajo manual en operaciones clave
                </p>
              </div>
              <div>
                <p className="font-display text-5xl font-semibold leading-none tracking-[-0.03em] text-white md:text-6xl">
                  4.2×
                </p>
                <p className="mt-3 font-body text-sm text-slate-400">
                  más rápido el ciclo de cada proceso
                </p>
              </div>
              <div>
                <p className="font-display text-5xl font-semibold leading-none tracking-[-0.03em] text-white md:text-6xl">
                  30k
                </p>
                <p className="mt-3 font-body text-sm text-slate-400">
                  tareas automatizadas cada mes
                </p>
              </div>
              <div>
                <p className="font-display text-5xl font-semibold leading-none tracking-[-0.03em] text-white md:text-6xl">
                  99.9%
                </p>
                <p className="mt-3 font-body text-sm text-slate-400">
                  de disponibilidad en producción
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="cta" className="bg-ink">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div
            className="rounded-[24px] p-10 text-center ring-1 ring-white/10 md:p-14"
            style={{ background: "linear-gradient(135deg,#0f172a,#070b14)" }}
          >
            <p className="font-display text-sm font-medium uppercase tracking-wide text-brand">
              Contacto
            </p>
            <h2 className="mx-auto mt-3 max-w-[18ch] font-display text-3xl font-semibold leading-tight tracking-[-0.02em] text-white text-balance md:text-5xl">
              Solicitá tu presupuesto o una demostración
            </h2>
            <p className="mx-auto mt-5 max-w-[46ch] text-pretty font-body text-base leading-relaxed text-slate-400 md:text-lg">
              Cuéntanos tu reto y te mostramos un flujo automatizado funcionando en 48 horas. Respondemos en menos de un día hábil.
            </p>
            <form
              className="mx-auto mt-9 flex max-w-md flex-col justify-center gap-3 sm:flex-row"
               action="https://wa.me/5493434705750"
              method="get"
              target="_blank"
              rel="noopener noreferrer"
            >
              <input
                type="email"
                name="text"
                placeholder="tu@empresa.com"
                className="flex-1 rounded-full bg-white/5 px-5 py-3 text-sm text-white ring-1 ring-white/15 placeholder:text-slate-500 focus:outline-none focus:ring-brand/60"
              />
              <button
                type="submit"
                className="chrome-surface rounded-full px-6 py-3 text-sm font-semibold ring-1 ring-black/10 transition-transform hover:-translate-y-0.5"
              >
                Solicitar demo
              </button>
            </form>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-body text-sm text-slate-400">
              <a
                 href="https://wa.me/5493434705750"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                 <MessageCircle className="size-4 text-brand" />
                 +54 9 343 470-5750
              </a>
              <a
                 href="mailto:gama.70.maga@gmail.com"
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                 <Mail className="size-4 text-brand2" />
                 gama.70.maga@gmail.com
              </a>
            </div>
            <p className="mt-6 font-body text-xs text-slate-500">
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
            
            <p className="mt-4 max-w-[30ch] text-pretty font-body text-sm leading-relaxed text-slate-500">
              Automatización con IA para que tu equipo trabaje en lo que sí importa.
            </p>
          </div>
          <div className="md:col-span-2 md:col-start-6">
            <p className="font-display text-xs font-semibold uppercase tracking-wide text-slate-400">
              Producto
            </p>
            <ul className="mt-4 space-y-3 font-body text-sm text-slate-500">
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
            <p className="font-display text-xs font-semibold uppercase tracking-wide text-slate-400">
              Compañía
            </p>
            <ul className="mt-4 space-y-3 font-body text-sm text-slate-500">
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
          <p className="font-body text-xs text-slate-500">
            © 2026 GAIA. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
