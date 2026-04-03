const fs = require('fs');
let content = fs.readFileSync('packages/frontend/src/components/Header.tsx', 'utf8');

content = content.replace(/href=\"\/individual-supporters\"/g, 'href=\"/individual-support\"');
content = content.replace(/href=\"\/corporate-partnerships\"/g, 'href=\"/corporate-partnership\"');
content = content.replace(/href=\"\/programs\/education\"/g, 'href=\"/education\"');
content = content.replace(/href=\"\/programs\/career-guidance\"/g, 'href=\"/career-guidance\"');
content = content.replace(/href=\"\/programs\/environmental\"/g, 'href=\"/environmental\"');
content = content.replace(/href=\"\/programs\/health\"/g, 'href=\"/health\"');
content = content.replace(/href=\"\/programs\/women-empowerment\"/g, 'href=\"/women-empowerment\"');
content = content.replace(/href=\"\/programs\/skill-development\"/g, 'href=\"/skill-development\"');
content = content.replace(/href=\"\/programs\/rural-development\"/g, 'href=\"/rural-development\"');

content = content.replace(/href=\"\/impact\"/g, 'href=\"/impact-overview\"');
content = content.replace(/href=\"\/impact\/success-stories\"/g, 'href=\"/success-stories\"');
content = content.replace(/href=\"\/impact\/before-after\"/g, 'href=\"/before-after\"');
content = content.replace(/href=\"\/impact\/testimonials\"/g, 'href=\"/testimonials\"');
content = content.replace(/href=\"\/impact\/annual-report\"/g, 'href=\"/annual-report\"');

content = content.replace(/href=\"\/resources\/blog\"/g, 'href=\"/blog\"');
content = content.replace(/href=\"\/resources\/news\"/g, 'href=\"/news\"');
content = content.replace(/href=\"\/resources\/events\"/g, 'href=\"/events\"');
content = content.replace(/href=\"\/resources\/gallery\"/g, 'href=\"/gallery\"');

fs.writeFileSync('packages/frontend/src/components/Header.tsx', content);
