const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    }
  });
};

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const pages = [
    {
      id: 1,
      template: 'home/index.jsx',
      locale: 'es',
      pagePath: '/'
    },
    {
      id: 2,
      template: 'home/index.jsx',
      locale: 'en',
      pagePath: '/'
    }
  ];

  pages.map(({ id, template, locale, pagePath }) => {
    const prefix = locale === 'en' ? '' : `/${locale}`;
    return createPage({
      path: `${prefix}${pagePath}`,
      component: path.resolve(`./src/templates/${template}`),
      context: {
        id,
        locale
      }
    });
  });
};
