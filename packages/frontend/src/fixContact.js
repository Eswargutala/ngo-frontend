const fs = require('fs');
let code = fs.readFileSync('components/Contact/ContactSection.tsx', 'utf-8');

code = code.replace(/import { (.*?) } from 'lucide-react';/, "import { \, MessageCircle } from 'lucide-react';");

code = code.replace(/{ icon: Youtube,/, "{ icon: MessageCircle, label: 'WhatsApp', url: 'https://chat.whatsapp.com/ErFMeM9qSkWHBlkreWmGMA?mode=gi_t', color: 'hover:text-[#25D366]' },\n    { icon: Youtube,");

fs.writeFileSync('components/Contact/ContactSection.tsx', code);
