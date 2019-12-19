import { configure } from '@storybook/react';
import { addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
// import addStoriesGroup from 'react-storybook-addon-add-stories-group'
// setAddon(addStoriesGroup)

// automatically import all files ending in *.stories.js

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});
configure(require.context('../stories', true, /\.stories\.(js|mdx)$/), module);
