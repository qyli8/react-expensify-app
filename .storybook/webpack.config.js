// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
// const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');
// module.exports = {
//   plugins: [
//     // your custom plugins
//   ],
//   module: {
//     rules: [
//       // add your custom rules.
//       {
//         loader: 'babel-loader',
//         // may or may not need this line depending on your app's setup        
//         options: {
//           plugins: ['@babel/plugin-transform-react-jsx'],
//           },
//       },
//       {
//         loader: '@mdx-js/loader',
//         options: {
//           compilers: [createCompiler({})],
//         },
//       },
//       {
//         test: /\.(stories|story)\.[tj]sx?$/,
//         loader: require.resolve('@storybook/source-loader'),
//         exclude: [/node_modules/],
//         enforce: 'pre',
//       }
//     ],
//   },
// };

// module.exports = async ({ config }) => {
//   config.module.rules.push({
//     test: /\.(stories|story)\.mdx$/,
//     use: [
//       {
//         loader: 'babel-loader',
//         // may or may not need this line depending on your app's setup        
//         options: {
//           plugins: ['@babel/plugin-transform-react-jsx'],
//           },
//       },
//       {
//         loader: '@mdx-js/loader',
//         options: {
//           compilers: [createCompiler({})],
//         },
//       },
//     ],
//   });
//   config.module.rules.push({
//     test: /\.(stories|story)\.[tj]sx?$/,
//     loader: require.resolve('@storybook/source-loader'),
//     exclude: [/node_modules/],
//     enforce: 'pre',
//   });
//   return config;
// };