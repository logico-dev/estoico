module.exports = {
  siteMetadata: {
    title: `Estoico`,
    name: `Estoico`,
    siteUrl: `https://estoico.com.ar`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `Un viaje de estoicismo, minimalismo y programación.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/narative`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/company/narative/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Estoico`,
        short_name: `Estoico`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
