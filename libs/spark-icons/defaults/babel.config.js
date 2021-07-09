// Original credit to https://github.com/mui-org/material-ui/blob/1c5beec4be20eae30e75c69ab513bbfec3e9baaf/babel.config.js
//  Changes made since

let defaultPresets;

if (process.env.BABEL_ENV === 'es') {
  defaultPresets = [];
} else {
  defaultPresets = [
    [
      '@babel/preset-env',
      {
        bugfixes: true,
        modules: ['esm', 'production-umd'].includes(process.env.BABEL_ENV)
          ? false
          : 'commonjs',
      },
    ],
  ];
}

module.exports = {
  presets: defaultPresets,
  plugins: [['@babel/plugin-proposal-class-properties', { loose: true }]],
  env: {
    cjs: {
      plugins: [],
    },
    es: {
      plugins: [['@babel/plugin-transform-runtime', { useESModules: true }]],
    },
    esm: {
      plugins: [['@babel/plugin-transform-runtime', { useESModules: true }]],
    },
  },
};
