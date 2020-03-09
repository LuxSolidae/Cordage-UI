const customColors = {
  seaButton: '#005CFF',
  iron: '#3e3f42',
};

export default {
  public: './public',
  title: 'Cordage',
  description: 'Cordage UI Kit',
  wrapper: 'src/lib/js/Docz',
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
  ignore: [
    'dist/'
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
};
