const customColors = {
  seaButton: '#005CFF',
  iron: '#3e3f42',
};

export default {
  public: './public',
  title: 'Cordage',
  description: 'Cordage UI Kit',
  wrapper: 'src/js/Docz',
  port: 7000,
  menu: [
    {
      name: 'Getting Started',
      menu: [
        'Introduction',
        'Atomic Design Methodology',
        'File Tree',
        'Pure Components vs Stateless Functional Components'
      ],
    },
    'Atoms',
  ],
  themeConfig: {
    colors: {
      primary: customColors.seaButton,
      text: customColors.iron,
    },
    logo: {
      src: '/public/logo.svg',
    },
    styles: {
      h1: `
        font-size: 50px;
        margin-bottom: 30px;
        line-height: 1.2;
      `,
    },
  },
  modifyBundlerConfig: (bundlerConfig) => {
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
            [
              require.resolve('@babel/plugin-syntax-dynamic-import'),
            ],
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
  },
};
