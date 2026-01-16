import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Apuntes de TypeScript",
  description: "Anotaciones personales sobre TypeScript y arquitectura",
  base: '/apuntes-typescript/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'TypeScript',
        items: [
          { text: 'Tipos básicos', link: '/typescript/tipos-basicos' },
          { text: 'Genéricos', link: '/typescript/generics' },
        ]
      },
      {
        text: 'CLI',
        items: [
          { text: 'Introducción', link: '/cli/introduccion' }
        ]
      },
      {
        text: 'Arquitectura',
        items: [
          { text: 'Clean Architecture', link: '/arquitectura/clean-architecture' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})


