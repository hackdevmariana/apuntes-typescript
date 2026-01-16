import { defineConfig } from 'vitepress'

interface HomeBlock {
  title: string
  link: string
  icon: string
  description?: string
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Apuntes de TypeScript",
  description: "Anotaciones personales sobre TypeScript y arquitectura",
  // base: '/apuntes-typescript/',
  themeConfig: {
    // Menú superior
    nav: [
      {
        text: 'Programación JS',
        items: [
          { text: 'Arquitectura y diseño', link: '/arquitectura/clean-architecture' },
          { text: 'Ingeniería del software', link: '/arquitectura/ingenieria-software' },
          { text: 'JavaScript moderno', link: '/typescript/tipos-basicos' },
          { text: 'Bibliotecas JS', link: '/bibliotecas-js/' },
          { text: 'Git', link: '/git/' },
          {
            text: 'Frameworks',
            items: [
              {
                text: 'Backend',
                items: [
                  { text: 'NodeJS', link: '/nodejs/' },
                  { text: 'NestJS', link: '/nestjs/' }
                ]
              },
              {
                text: 'Web',
                items: [
                  { text: 'Vue / Nuxt', link: '/vue-nuxt/' },
                  { text: 'HTML / CSS', link: '/web/html-css' }
                ]
              }
            ]
          },
          {
            text: 'APP',
            items: [
              { text: 'React Native', link: '/react-native/' }
            ]
          }
        ]
      },
      {
        text: 'Bases de datos',
        items: [
          { text: 'SQL / PostgreSQL', link: '/sql-postgresql/' },
          { text: 'ORMs', link: '/orms/' }
        ]
      }
    ],

    // Sidebar por sección
    sidebar: {
      '/typescript/': [
        { text: 'Tipos básicos', link: '/typescript/tipos-basicos' },
        { text: 'Generics', link: '/typescript/generics' },
        { text: 'Strict mode', link: '/typescript/strict-mode' }
      ],
      '/cli/': [
        { text: 'Introducción', link: '/cli/introduccion' },
        { text: 'Commander', link: '/cli/commander' }
      ],
      '/arquitectura/': [
        { text: 'Clean Architecture', link: '/arquitectura/clean-architecture' },
        { text: 'DDD básico', link: '/arquitectura/ddd-basico' }
      ],
      '/errores/': [
        { text: 'Trampas comunes', link: '/errores/trampas-comunes' }
      ]
    },

    // Footer (opcional)
    footer: {
      message: 'Apuntes personales, no un curso ni tutorial.',
      copyright: '© 2026 hackdevmariana'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },


    

})


