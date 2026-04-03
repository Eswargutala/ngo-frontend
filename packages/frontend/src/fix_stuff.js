const fs = require('fs');
const glob = require('glob');

const newAddress = 'H. No. 448, Hansa Mohalla, Deeg - 43 Fatehpur, Pundri, Haryana';
const newLinkedin = 'https://www.linkedin.com/company/laskhil-raj-welfare-foundation/';

const files = glob.sync('**/*.{ts,tsx}', { ignore: 'node_modules/**' });

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  let changed = false;

  const oldAddressPatterns = [
    /123 Community Street, Connaught Place, New Delhi - 110001, India/g,
    /123 कम्युनिटी स्ट्रीट, कनॉट प्लेस, नई दिल्ली - 110001, भारत/g,
    /123 Community Street, Connaught Place, Nueva Delhi - 110001, India/g,
    /123 Community Street, Connaught Place, New Delhi - 110001, Inde/g,
    /123 Community Street, Connaught Place, Neu-Delhi - 110001, Indien/g,
    /123 Community Street, Connaught Place, Nova Delhi - 110001, Índia/g,
    /123 Community Street, Connaught Place, 新德里 - 110001, 印度/g,
    /123 Main Street/gi
  ];
  
  oldAddressPatterns.forEach(r => {
    if(r.test(content)) {
      content = content.replace(r, newAddress);
      changed = true;
    }
  });

  const liRegex = /{ icon: Linkedin, label: 'LinkedIn', url: '[^']+', color:/g;
  if (liRegex.test(content)) {
    content = content.replace(liRegex, \{ icon: Linkedin, label: 'LinkedIn', url: '\', color:\);
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf-8');
    console.log('Modified:', file);
  }
});
