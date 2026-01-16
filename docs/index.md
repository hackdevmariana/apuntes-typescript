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
// Importa el componente Icon de Iconify
import { Icon } from '@iconify/vue'

// Importa los iconos de Simple Icons
import arquitecturaIcon from '@iconify-icons/simple-icons/architecture'
import sqlIcon from '@iconify-icons/simple-icons/postgresql'
import nodeIcon from '@iconify-icons/simple-icons/node-dot-js'
import nestjsIcon from '@iconify-icons/simple-icons/nestjs'
import vueIcon from '@iconify-icons/simple-icons/vue-dot-js'
import nuxtIcon from '@iconify-icons/simple-icons/nuxtdotjs'
import reactNativeIcon from '@iconify-icons/simple-icons/react'
import jsIcon from '@iconify-icons/simple-icons/javascript'
import gitIcon from '@iconify-icons/simple-icons/git'
</script>

# Apuntes de TypeScript

Estos son apuntes personales, no un curso ni tutorial.  
Se actualizan mientras practico y estudio TypeScript, arquitectura de software y tecnologías modernas.

---

<!-- Grid de 8 bloques responsive -->
<section class="home-grid">
  <div class="home-block">
    <Icon icon={arquitecturaIcon} width="64" height="64" />
    ## [Arquitectura e ingeniería del software](/arquitectura/clean-architecture)
  </div>

  <div class="home-block">
    <Icon icon={sqlIcon} width="64" height="64" />
    ## [SQL y PostgreSQL](/sql-postgresql/)
  </div>

  <div class="home-block">
    <Icon icon={nodeIcon} width="64" height="64" />
    ## [NodeJS](/nodejs/)
  </div>

  <div class="home-block">
    <Icon icon={nestjsIcon} width="64" height="64" />
    ## [NestJS](/nestjs/)
  </div>

  <div class="home-block">
    <Icon icon={vueIcon} width="64" height="64" />
    ## [Vue / Nuxt](/vue-nuxt/)
  </div>

  <div class="home-block">
    <Icon icon={reactNativeIcon} width="64" height="64" />
    ## [React Native](/react-native/)
  </div>

  <div class="home-block">
    <Icon icon={jsIcon} width="64" height="64" />
    ## [Bibliotecas JS](/bibliotecas-js/)
  </div>

  <div class="home-block">
    <Icon icon={gitIcon} width="64" height="64" />
    ## [Git](/git/)
  </div>
</section>

<style>
.home-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin-top: 2rem;
}
.home-block {
  text-align: center;
  padding: 1rem;
  border-radius: 8px;
  transition: transform 0.2s;
}
.home-block:hover {
  transform: translateY(-3px);
}
.home-block h2 {
  margin-top: 0.5rem;
  font-size: 1.1rem;
}
</style>

