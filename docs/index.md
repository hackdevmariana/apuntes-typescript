---
layout: home
hero:
  name: "Apuntes de TypeScript"
  text: "Anotaciones personales sobre TypeScript, JS moderno y arquitectura"
  tagline: Mi cuaderno de apuntes personal
  actions:
    - theme: brand
      text: "Markdown Examples"
      link: /markdown-examples
    - theme: alt
      text: "API Examples"
      link: /api-examples
---

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import arquitecturaIcon from '@iconify-json/simple-icons/architecture.json'
import sqlIcon from '@iconify-json/simple-icons/postgresql.json'
import nodeIcon from '@iconify-json/simple-icons/node-dot-js.json'
import nestjsIcon from '@iconify-json/simple-icons/nestjs.json'
import vueIcon from '@iconify-json/simple-icons/vue-dot-js.json'
import nuxtIcon from '@iconify-json/simple-icons/nuxtdotjs.json'
import reactNativeIcon from '@iconify-json/simple-icons/react.json'
import jsIcon from '@iconify-json/simple-icons/javascript.json'
import gitIcon from '@iconify-json/simple-icons/git.json'

// Definimos las cards
interface Card {
  title: string
  link: string
  icons: any[]   // ahora puede tener 1 o 2 iconos
  description?: string
}

const cards: Card[] = [
  { title: 'Arquitectura e ingeniería del software', link: '/arquitectura/clean-architecture', icons: [arquitecturaIcon] },
  { title: 'SQL y PostgreSQL', link: '/sql-postgresql/', icons: [sqlIcon] },
  { title: 'NodeJS', link: '/nodejs/', icons: [nodeIcon] },
  { title: 'NestJS', link: '/nestjs/', icons: [nestjsIcon] },
  { title: 'Vue / Nuxt', link: '/vue-nuxt/', icons: [vueIcon, nuxtIcon] },
  { title: 'React Native', link: '/react-native/', icons: [reactNativeIcon] },
  { title: 'Bibliotecas JS', link: '/bibliotecas-js/', icons: [jsIcon] },
  { title: 'Git', link: '/git/', icons: [gitIcon] }
]
</script>

# Apuntes de TypeScript

Estos son apuntes personales, no un curso ni tutorial.  
Se actualizan mientras practico y estudio TypeScript, arquitectura de software y tecnologías modernas.

---

<!-- Grid de cards -->
<div class="home-grid">
  <div v-for="card in cards" :key="card.link" class="home-card">
    <div class="card-icons">
      <Icon v-for="icon in card.icons" :key="icon.name" :icon="icon" width="48" height="48" />
    </div>
    <h2>
      <a :href="card.link">{{ card.title }}</a>
    </h2>
    <p v-if="card.description">{{ card.description }}</p>
  </div>
</div>

<style>
.home-grid {
  display: grid;
  gap: 1.5rem;
  margin-top: 2rem;
  grid-template-columns: repeat(1, 1fr);
}

/* Tablet */
@media(min-width: 640px) {
  .home-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Escritorio grande */
@media(min-width: 1024px) {
  .home-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.home-card {
  text-align: center;
  padding: 1.5rem 1rem;
  border-radius: 12px;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 1px 6px rgba(0,0,0,0.1);
  background: var(--vp-c-bg);
}

.home-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.15);
}

.home-card h2 {
  margin-top: 0.75rem;
  font-size: 1.1rem;
}

.home-card a {
  text-decoration: none;
  color: var(--vp-c-text);
}

.home-card a:hover {
  text-decoration: underline;
}

/* Iconos múltiples en línea horizontal */
.card-icons {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}
</style>

