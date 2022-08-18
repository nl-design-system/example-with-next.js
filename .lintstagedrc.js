module.exports = {
  '**/*.{ts, tsx}?(x)': () => 'tsc -p tsconfig.json --noEmit',
  '**/*.{ts, tsx, js, scss, css, html, json}?(x)': () => 'npm run lint',
};
