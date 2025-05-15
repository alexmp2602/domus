# 💅 Domus Estética Profesional · Sitio Web 2025

Sitio institucional para **Domus Estética Profesional**, desarrollado con enfoque moderno, accesible y visualmente limpio. Desarrollado con [Astro](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/), implementando animaciones suaves, estructura semántica, y separación lógica entre componentes e íconos.

---

## 🚀 Tecnologías

- ✅ [Astro](https://astro.build/) (v4+)
- ✅ [Tailwind CSS](https://tailwindcss.com/)
- ✅ Íconos SVG personalizados (Tabler Icons)
- ✅ Animaciones simples con clases `fade-*` controladas por JS
- ✅ Mobile-first & responsive
- ✅ SEO optimizado (meta tags, Open Graph, favicon)

---

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Navbar.astro
│   ├── Hero.astro
│   ├── Services.astro
│   ├── Us.astro
│   ├── Testimonials.astro
│   ├── Footer.astro
│   └── icons/
│       ├── IconHandFinger.astro
│       ├── IconScissors.astro
│       ├── IconFaceId.astro
│       ├── IconMassage.astro
│       └── IconRazor.astro
├── layouts/
│   └── Layout.astro
├── pages/
│   └── index.astro
└── styles/
    └── global.css
```

---

## 🧠 Detalles Técnicos

- ⚙️ Animaciones se aplican con clases utilitarias (`fade-simple`, `fade-left`, `fade-right`, `fade-up`) y se activan en el layout con un script al montar.
- ✏️ Colores personalizados:  
  - Primario: `#e94784`  
  - Fondo claro: `#fafafa`  
  - Texto principal: `#2b2b2b`

---

## 📱 WhatsApp CTA

Se utiliza botón fijo en esquina inferior derecha + link directo:

```jsx
<a href="https://wa.me/5492616609363" ...>Escribinos por WhatsApp</a>
```

---

## 🔄 Por hacer (si querés expandir)

- [ ] Agregar carrusel o galería de fotos de tratamientos
- [ ] Agregar formulario de reserva simple
- [ ] Integrar reseñas reales desde Google Reviews con API
- [ ] Agregar sección “Equipo” o “Testimonios extendidos”
- [ ] Panel admin básico en futuro si se necesita autogestión

---

## 👤 Autor

Desarrollado por [Alex Pereyra](https://www.alexpereyra.dev)  
Contacto directo: [alexmp.2602@gmail.com](mailto:alexmp.2602@gmail.com)

---

## 📄 Licencia

Este proyecto es privado y no debe ser reutilizado sin autorización expresa de Domus Estética Profesional.