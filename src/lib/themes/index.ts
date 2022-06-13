const modules = import.meta.globEager('./json/*.json', { as: 'raw' });

export interface Theme {
  themeName: string;
  theme: any;
}

const themes = [] as Theme[];
const entries = Object.entries(modules);
for (let i = 0, l = entries.length; i < l; i++) {
  const [path, theme] = entries[i];
  const themeName = path.slice(path.lastIndexOf('/') + 1, path.lastIndexOf('.'));
  themes.push({ themeName, theme: JSON.parse(theme) });
}

console.log(themes);

export default themes;
