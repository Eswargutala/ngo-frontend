const fs = require('fs');
let code = fs.readFileSync('components/Contact/ContactSection.tsx', 'utf-8');
code = code.replace(/{ icon: Facebook, label: 'Facebook', url: '[^']+', color: 'hover:text-\\[#1877F2\\]' }/g, "{ icon: Facebook, label: 'Facebook', url: 'https://www.facebook.com/share/1G21SW7VKr/', color: 'hover:text-[#1877F2]' }");
code = code.replace(/{ icon: Twitter, label: 'Twitter', url: '[^']+', color: 'hover:text-\\[#1DA1F2\\]' }/g, "{ icon: Twitter, label: 'Twitter', url: 'https://x.com/lakhil_ngo', color: 'hover:text-[#1DA1F2]' }");
code = code.replace(/{ icon: Instagram, label: 'Instagram', url: '[^']+', color: 'hover:text-\\[#E4405F\\]' }/g, "{ icon: Instagram, label: 'Instagram', url: 'https://www.instagram.com/lakhil_foundation?igsh=MTIyZ3hpYzk2bXEybA==', color: 'hover:text-[#E4405F]' }");
fs.writeFileSync('components/Contact/ContactSection.tsx', code);
