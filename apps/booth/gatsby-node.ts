// Because we used ts-node in gatsby-config.js, this file will automatically be
// imported by Gatsby instead of gatsby-node.js.

// Use the type definitions that are included with Gatsby.
import { GatsbyNode } from 'gatsby';
import { resolve } from 'path';

const sites = [
  { title: 'Tony Chocolony', backgroundColor: 'red', slug: '/tony' },
  {
    title: 'Nationaal Militair Museam',
    backgroundColor: 'yellow',
    slug: '/nmm',
  },
];

export const createPages: GatsbyNode['createPages'] = async ({ actions }) => {
  const { createPage } = actions;

  sites.forEach((site) => {
    createPage({
      path: site.slug,
      component: resolve(__dirname, './src/templates/site.tsx'),
      context: {
        ...site,
      },
    });
  });
};
