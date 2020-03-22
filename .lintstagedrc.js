module.exports = {
  '*.{ts,tsx,js,jsx,json}': ['npm run lint-file:fix', 'npm run test:staged'],
  '*.{vue,ts,css,less,scss,html,htm,md,markdown,yml,yaml}': [
    'npm run format-file:default',
  ],
};
