// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  siteDescription: 'Intro to grapql gridsome',
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: 'p8lq1gi3vexl', // required
        accessToken: 'lMw5VEnbK7tdEl9zIE5E0IEiSL0bXa_xXiweD8cWO4Q', // required
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: './content/posts/**/*.md',
        route: '/blog/:slug',
        refs: {
          tags: {
            typeName: 'Tag',
            route: '/tags/:id',
            create: true
          }
        }
      }
    },

  ],
}
