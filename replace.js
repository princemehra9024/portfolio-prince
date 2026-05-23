const fs = require('fs');
const path = require('path');

const colorMap = {
  '#ff6eb4': '#00f2fe',
  '#e040fb': '#4facfe',
  '#ff2d87': '#00c6fb',
  '#ff69b4': '#00f2fe',
  '#ff85c1': '#4facfe',
  '#eca8d6': '#89f7fe'
};

const regexWwwwards1 = /<a[^>]*href="https:\/\/wwwwards\.com"[^>]*>[\s\S]*?<\/a>/g;
const regexWwwwards2 = /\{[^}]*"https:\/\/wwwwards\.com"[^}]*\},?/g;

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  for (const [oldColor, newColor] of Object.entries(colorMap)) {
    content = content.split(oldColor).join(newColor);
    content = content.split(oldColor.toUpperCase()).join(newColor);
  }

  content = content.split('text-glow-pink').join('text-glow-blue');
  content = content.split('animate-glow-pulse').join('animate-pulse'); // removes the custom glow pulse

  content = content.replace(regexWwwwards1, '');
  content = content.replace(regexWwwwards2, '');
  content = content.replace(/\{ name: "Wwwwards", href: "https:\/\/wwwwards\.com" \},/g, '');
  content = content.replace(/\{ name: "Wwwwards", href: "https:\/\/wwwwards\.com", icon: "globe" \},/g, '');
  content = content.replace(/<span[^>]*>Wwwwards Member<\/span>/g, '');
  content = content.replace(/Wwwwards/g, '');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated:', filePath);
  }
}

function walkDir(dir) {
  if (dir.includes('node_modules') || dir.includes('.next') || dir.includes('.git')) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      processFile(fullPath);
    }
  }
}

walkDir('app');
walkDir('components');

