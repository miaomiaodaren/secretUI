module.exports = {
  presets: ['@babel/env', '@babel/typescript', '@babel/react'],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/proposal-class-properties',
    '@babel/plugin-proposal-optional-chaining',
  ],
  env: {
    esm: {
      presets: [
        [
          '@babel/env',
          {
            modules: false,
          },
        ],
      ],
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            useESModules: true,
          },
        ],
      ],
    },
    dist: {
      plugins: [
        [
          '@babel/plugin-transform-modules-umd',
          {
            globals: {
              'es6-promise': 'Promise',
            },
          },
        ],
      ],
    },
  },
};
