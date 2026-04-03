const fs = require('fs');
let code = fs.readFileSync('views/Blog.tsx', 'utf-8');
code = code.replace(/href="#"/g, "href={\/resources/blog/\\}");
code = code.replace(/href=\{\\/resources\/blog\/\$\{featuredPost\.id\}\\}\s+className="inline-flex items-center gap-2 text-sm/g, 'href={/resources/blog/} className="inline-flex items-center gap-2 text-sm');
fs.writeFileSync('views/Blog.tsx', code);
