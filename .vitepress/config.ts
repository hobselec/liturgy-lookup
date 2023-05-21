import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Service Playing Guide",
  description: "An organist guide to playing the current service",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/current-service' }
    ],

    sidebar: [
      {
        //text: 'Examples',
        items: [
        //  { text: 'Markdown Examples', link: '/markdown-examples' },
        //  { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Home', link :'/'},
          { text: 'Hymn Search', link :'/search'},
          { text: 'Liturgy Search', link : '/liturgy-search'},
          { text: 'Current Service', link :'/current-service'},
          { text: 'Sources', link :'/sources'},
          { text: 'Settings', link :'/settings'},
          { text: 'Hymn Playing', link :'/hymn-playing'},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hobselec/liturgy-lookup' }
    ],

    footer : {
      message : "Last updated May 21, 2023"
    }
  }
})
