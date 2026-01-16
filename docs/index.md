---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Apuntes de TypeScript"
  text: "Anotaciones personales sobre TypeScript y arquitectura"
  tagline: My great project tagline
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import arquitecturaIcon from '@iconify-icons/simple-icons/architecture'
import sqlIcon from '@iconify-icons/simple-icons/postgresql'
import nodeIcon from '@iconify-icons/simple-icons/node-dot-js'
import nestjsIcon from '@iconify-icons/simple-icons/nestjs'
import vueIcon from '@iconify-icons/simple-icons/vue-dot-js'
import nuxtIcon from '@iconify-icons/simple-icons/nuxtdotjs'
import reactNativeIcon from '@iconify-icons/simple-icons/react'
import jsIcon from '@iconify-icons/simple-icons/javascript'
import gitIcon from '@iconify-icons/simple-icons/git'

// Definir las cards
interface Card {
  title: string
  link: string
  icon: any
  description?: string
}

const cards: Card[] = [
  { title: 'Arquitectura e ingeniería del software', link: '/arquitectura/clean-architecture', icon: arquitecturaIcon },
  { title: 'SQL y PostgreSQL', link: '/sql-postgresql/', icon: sqlIcon },
  { title: 'NodeJS', link: '/nodejs/', icon: nodeIcon },
  { title: 'NestJS', link: '/nestjs/', icon: nestjsIcon },
  { title: 'Vue / Nuxt', link: '/vue-nuxt/', icon: vueIcon },
  { title: 'React Native', link: '/react-native/', icon: reactNativeIcon },
  { title: 'Bibliotecas JS', link: '/bibliotecas-js/', icon: jsIcon },
  { title: 'Git', link: '/git/', icon: gitIcon }
]
</script>

# Apuntes de TypeScript

Estos son apuntes personales, no un curso ni tutorial.  
Se actualizan mientras practico y estudio TypeScript, arquitectura de software y tecnologías modernas.

---

<!-- Grid de cards -->
<div class="home-grid">
  <div v-for="card in cards" :key="card.link" class="home-card">
    <Icon :icon="card.icon" width="64" height="64" />
    <h2>
      <a :href="card.link">{{ card.title }}</a>
    </h2>
  </div>
</div>

<style>
.home-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin-top: 2rem;
}

.home-card {
  text-align: center;
  padding: 1rem;
  border-radius: 8px;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
  background: var(--vp-c-bg);
}

.home-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.home-card h2 {
  margin-top: 0.5rem;
  font-size: 1.05rem;
}
.home-card a {
  text-decoration: none;
  color: var(--vp-c-text);
}
.home-card a:hover {
  text-decoration: underline;
}
</style>

