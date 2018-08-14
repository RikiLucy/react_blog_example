module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: 'airbnb',
  rules: {
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight', 'to'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    'max-len': ['error', 120],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': [0],
    'no-mixed-operators': [
      'error',
      {
        allowSamePrecedence: true,
      },
    ],
  },
}
