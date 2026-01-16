<template>
  <section class="dashboard-page">
    <h1 class="page-title">Dashboard Premium</h1>
    <p class="page-intro">
      Apuntes personales con estilo de mini dashboard.
    </p>

    <div class="dashboard-grid">
      <div
        v-for="(card, index) in cards"
        :key="card.link"
        class="dashboard-card"
        :style="{ background: card.gradient, animationDelay: `${index * 80}ms` }"
      >
        <div class="card-icons">
          <Icon
            v-for="icon in card.icons"
            :key="icon.name"
            :icon="icon"
            width="40"
            height="40"
            class="card-icon"
          />
        </div>

        <h2>
          <a :href="card.link">{{ card.title }}</a>
        </h2>

        <p>{{ card.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import architectureIcon from '@iconify/icons-simple-icons/gnometerminal'
import postgresqlIcon from '@iconify/icons-simple-icons/postgresql'
import nodejsIcon from '@iconify/icons-simple-icons/nodedotjs'
import nestjsIcon from '@iconify/icons-simple-icons/nestjs'
import vueIcon from '@iconify/icons-simple-icons/vuedotjs'
import nuxtIcon from '@iconify/icons-simple-icons/nuxtdotjs'
import reactIcon from '@iconify/icons-simple-icons/react'
import jsIcon from '@iconify/icons-simple-icons/javascript'
import gitIcon from '@iconify/icons-simple-icons/git'

interface Card {
  title: string
  link: string
  icons: any[]
  description: string
  gradient: string
}

const cards: Card[] = [
  { title: 'Arquitectura e ingeniería del software', link: '/arquitectura/clean-architecture', icons: [architectureIcon], description: 'Clean Architecture, DDD, patrones y diseño', gradient: 'linear-gradient(135deg, #1f2933, #111827)' },
  { title: 'SQL y PostgreSQL', link: '/sql-postgresql/', icons: [postgresqlIcon], description: 'Modelado, consultas, índices y rendimiento', gradient: 'linear-gradient(135deg, #0f766e, #064e3b)' },
  { title: 'NodeJS', link: '/nodejs/', icons: [nodejsIcon], description: 'Backend, scripts, CLIs y tooling', gradient: 'linear-gradient(135deg, #365314, #1a2e05)' },
  { title: 'NestJS', link: '/nestjs/', icons: [nestjsIcon], description: 'Arquitectura backend con TypeScript', gradient: 'linear-gradient(135deg, #7f1d1d, #450a0a)' },
  { title: 'Vue / Nuxt', link: '/vue-nuxt/', icons: [vueIcon, nuxtIcon], description: 'Frontend moderno, SSR y DX', gradient: 'linear-gradient(135deg, #064e3b, #022c22)' },
  { title: 'React Native', link: '/react-native/', icons: [reactIcon], description: 'Apps móviles multiplataforma', gradient: 'linear-gradient(135deg, #0f172a, #020617)' },
  { title: 'Bibliotecas JavaScript', link: '/bibliotecas-js/', icons: [jsIcon], description: 'Librerías, utilidades y ecosistema JS', gradient: 'linear-gradient(135deg, #713f12, #422006)' },
  { title: 'Git', link: '/git/', icons: [gitIcon], description: 'Control de versiones y flujos reales', gradient: 'linear-gradient(135deg, #1f2937, #020617)' }
]
</script>

<style>
.dashboard-page {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.page-title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 0.5rem;
}

.page-intro {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--vp-c-text-2);
}

/* GRID */
.dashboard-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
}

/* Tablet */
@media (min-width: 640px) {
  .dashboard-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .dashboard-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* CARD */
.dashboard-card {
  padding: 1.6rem 1.2rem;
  border-radius: 16px;
  color: #f9fafb;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0,0,0,.25);
  animation: fadeUp .6s ease both;
  transition: transform .25s ease, box-shadow .25s ease;
}

.dashboard-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 36px rgba(0,0,0,.35);
}

/* ICONOS */
.card-icons {
  display: flex;
  justify-content: center;
  gap: .6rem;
  margin-bottom: .6rem;
}

.card-icon {
  transition: transform .35s ease;
}

.dashboard-card:hover .card-icon {
  transform: rotate(-6deg) scale(1.08);
}

/* TEXTO */
.dashboard-card h2 {
  font-size: 1.05rem;
  margin: .4rem 0;
}

.dashboard-card a {
  color: #f9fafb;
  text-decoration: none;
}

.dashboard-card a:hover {
  text-decoration: underline;
}

.dashboard-card p {
  font-size: .9rem;
  opacity: .85;
}

/* ANIMACIÓN */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

