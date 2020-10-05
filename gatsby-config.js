const siteMetadata = {
  title: 'Blog Tech Platform',
  author: 'Tech Platform',
  description: 'Patrick César, estudante de desenvolvimento de web',
  siteUrl: 'https://techplatform.digital',
  contacts: [
    { link: 'https://techplatform.digital', label: 'sobre mim' },
    { link: 'https://github.com/ptrickcesar', label: 'github' },
    { link: 'https://linkedin.com/in/ptrickcsilva', label: 'linkedin' },
    { link: 'mailto:patrick@techplatform.digital', label: 'e-mail' },
  ],
};

module.exports = {
  siteMetadata: {
    language: 'en',
    repository: 'https://github.com/ptrickcesar/blog.diegocosta.me',
    ...siteMetadata,
  },
  plugins: [
    'gatsby-plugin-graphql-codegen',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['raleway:400,700'],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/posts`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-embed-gist',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              showLineNumbers: true,
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-reading-time',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-53539968-4',
      },
    },
    'gatsby-plugin-feed',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.author,
        start_url: siteMetadata.siteUrl,
        background_color: '#4F4F4F',
        theme_color: '#F0F8FF',
        display: 'minimal-ui',
        icon: 'static/icon.png',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
  ],
};
