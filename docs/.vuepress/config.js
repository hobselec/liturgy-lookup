module.exports = {

  title: 'Lutheran Organ Liturgy',
  description: 'Commonly used liturgy settings at St. Matthew Lutheran Urbana',
  //base
  head: [
    ['link', { 
        rel: 'icon', href: '/favicon.png', type: 'image/png' 
      }
    ]
  ],
  themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/current-service' },
        ],
          sidebar: [
            '/',
            '/search',
            '/liturgy-search',  
            '/current-service',
            '/sources',
            '/settings',
            '/hymn-playing'
        ],
        displayAllHeaders : true

    
    },
    
}
