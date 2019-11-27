module.exports = {
  '*.{ts,tsx,js,jsx,json}': [
    'npm run lint',
    'npm run format-file:default',
    'git add',
  ],
  '*.{js,jsx,vue,ts,css,less,scss,html,htm,json,md,markdown,yml,yaml}': [
    'npm run format-file:default',
    'git add',
  ],
};
