// gatsby-node.js
const path = require('path');

exports.onCreateWebpackConfig = args => {
  args.actions.setWebpackConfig({
    resolve: {
      alias: {
        'cordage_ui': path.resolve(__dirname, '../src/js/lib/'),
      },
    },
  })
};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPreset({ name: '@babel/preset-env' });
  actions.setBabelPreset({ name: '@babel/preset-react' });
  actions.setBabelPlugin({
    name:  `babel-plugin-named-asset-import`,
    options: {
      loaderMap: {
        svg: {
          ReactComponent: '@svgr/webpack?-svgo,+ref![path]',
        },
      },
    },
  });
  actions.setBabelPlugin({
    name:  `@babel/plugin-proposal-decorators`,
    options: {
      legacy: true,
    },
  });
  actions.setBabelPlugin({
    name:  `@babel/plugin-proposal-class-properties`,
    options: {
      loose: true,
    },
  });
  actions.setBabelPlugin({
    name:  `@babel/plugin-proposal-export-default-from`,
  });
  actions.setBabelPlugin({
    name:  `@babel/plugin-syntax-dynamic-import`,
  });
}

modifyBundlerConfig = (bundlerConfig) => {
  console.log('MODIFYING BUNDLE')
  const rules = [
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader',
    },
    {
      test: /\.(js|jsx|mjs|ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [
          [
            '@babel/preset-env', {
              // modules: false,
              // useBuiltIns: 'usage',
              // corejs: 2,
              // targets: {
              //   node: '10',
              //   browsers: ['last 2 versions', 'safari >= 7'],
              // },
            },
          ],
          '@babel/preset-react',
        ],
        plugins: [
          [
            require.resolve('babel-plugin-named-asset-import'),
            {
              loaderMap: {
                svg: {
                  ReactComponent: '@svgr/webpack?-svgo,+ref![path]',
                },
              },
            },
          ],
          [
            require.resolve('@babel/plugin-proposal-decorators'),
            {
              legacy: true,
            },
          ],
          [
            require.resolve('@babel/plugin-proposal-class-properties'),
            {
              loose: true,
            },
          ],
          require.resolve('@babel/plugin-proposal-export-default-from'),
          require.resolve('@babel/plugin-syntax-dynamic-import'),
        ],
      },
    },
    // {
    //   test: /\.(js|mjs)$/,
    //   exclude: /@babel(?:\/|\\{1,2})runtime/,
    //   loader: require.resolve('babel-loader'),
    //   options: {
    //     babelrc: false,
    //     configFile: false,
    //     compact: false,
    //     presets: [
    //       [
    //         require.resolve('babel-preset-react-app/dependencies'),
    //         {
    //           helpers: true,
    //         },
    //       ],
    //     ],
    //     cacheDirectory: true,

    //     // If an error happens in a package, it's possible to be
    //     // because it was compiled. Thus, we don't want the browser
    //     // debugger to show the original code. Instead, the code
    //     // being evaluated would be much more helpful.
    //     sourceMaps: false,
    //   },
    // },
  ];
  bundlerConfig.module.rules.push(...rules);
  // bundlerConfig.entry = ['babel-polyfill', ...bundlerConfig.entry];
  return bundlerConfig;
};
