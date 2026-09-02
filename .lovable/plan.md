# GAIA — Rediseño dark tech + Cotizador & Reserva Inteligente

Se conserva el 100% del contenido actual: los 7 sistemas, sus imágenes, descripciones, enlaces de demo, guías paso a paso, métricas, contacto y footer. Solo cambia la piel visual y se suma un octavo sistema.

## 1. Rediseño visual (Dark Mode SaaS Tech)

Nueva paleta aplicada en todo el sitio:

- Fondo principal: negro noche `#070b14`
- Tarjetas y contenedores: `#0f172a` con borde fino `#1e293b` y esquinas redondeadas suaves
- Acento y botones primarios: cian `#38bdf8` con texto oscuro
- Botones secundarios: transparentes, borde sutil, texto claro
- Títulos en blanco puro `#ffffff` con palabras clave resaltadas en cian
- Subtítulos y descripciones en gris claro `#94a3b8`

Se retira la estética Y2K chrome: se eliminan el acento lime, los degradados chrome y los fondos celestes claros de las secciones "Proyectos" y "Resultados", que pasan a ser bandas oscuras diferenciadas por un tono ligeramente distinto en lugar de blanco/celeste.

En el Hero se agrega una insignia flotante superior: **"Soluciones Digitales Inteligentes"**, en pill oscuro con borde cian.

Todos los elementos existentes (filtros de categoría, chips de tecnologías, modales, formulario de contacto, footer) se re-tematizan con esta paleta manteniendo su estructura y textos.

## 2. Nuevo sistema: Cotizador & Reserva Inteligente

Se agrega como octava tarjeta de la galería, con el mismo formato que las demás:

- Título: Cotizador & Reserva Inteligente
- Descripción: "Herramienta interactiva para cotizar servicios en tiempo real, seleccionar paquetes, fecha y hora de turno, y enviar la solicitud estructurada directamente por WhatsApp."
- Categoría: Gestión & Negocios
- Chips: Cotización en vivo, Reservas, WhatsApp
- Portada: la imagen `preview-cotizador.png` que adjuntaste
- Botones: "Ver Demo en Vivo" (abre en pestaña nueva) y "Ver Detalles"

**Falta un dato:** el enlace que pasaste (`lovable.dev/projects/...`) es el editor privado del proyecto, no funciona para visitantes. Necesito la URL pública del cotizador (algo tipo `https://nombre.lovable.app`). Mientras tanto dejo el botón apuntando a esa URL provisional y la reemplazo apenas me la pases.

### Guía rápida en el modal

Dentro de "Ver Detalles" del Cotizador se incluye el bloque **"💡 Guía rápida para probar esta Demo"**, con el mismo diseño de guías del resto de los sistemas (borde cian suave, pasos numerados) y colapsable/cerrable con una "X":

1. Elegí un rubro: cambiá entre Taller, Estética o Servicios Digitales para ver cómo se transforman los servicios y opciones.
2. Configurá tu presupuesto: seleccioná un servicio base, sumá adicionales y ajustá la cantidad con el contador.
3. Elegí modalidad y turno: seleccioná el tipo de atención/plazo, una fecha en el calendario y una franja horaria.
4. Revisá el resumen en vivo: observá cómo el total se calcula automáticamente.
5. Probá el botón de WhatsApp: ingresá tu nombre y hacé clic en el botón verde final para ver el mensaje estructurado listo para enviar.

## 3. Botón de WhatsApp bloqueado del Cotizador

Ese botón vive dentro de la app del Cotizador, que es otro proyecto de Lovable, no está en el código de este sitio. Desde acá no puedo configurar el número receptor `5493434705750` ni la habilitación del botón al completar nombre, fecha y horario. Hay que hacerlo en ese proyecto — puedo ayudarte ahí si lo abrís.

## Detalles técnicos

- `src/styles.css`: reemplazo de tokens `--background`, `--card`, `--primary`, `--border`, `--muted-foreground`; baja de `--lime`/`--chrome`/`--celeste-soft` y alta de un token de acento cian; eliminación de las utilidades `chrome-surface*` y `chrome-gradient-text` (o su reescritura a superficies slate).
- `src/routes/index.tsx`: nueva entrada en el array `PROJECTS` (índice 08) con la portada del cotizador; re-tematizado de clases utilitarias; badge en el Hero; componente `GuideSection` extendido con estado colapsable y botón de cierre.
- La imagen adjunta se sube como asset CDN (`src/assets/projects/cotizador.png.asset.json`).
