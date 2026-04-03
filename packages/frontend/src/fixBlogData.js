const fs = require('fs');
let code = fs.readFileSync('views/Blog.tsx', 'utf-8');

const match = code.match(/const categories = \['All'.*?\];\s*const blogPosts: BlogPost\[\] = \[([\s\S]*?)\];/);
if (match) {
  let content = match[0];
  code = code.replace(content, "\n");
  const interfaceMatch = code.match(/export interface BlogPost \{[\s\S]*?\}/) || code.match(/interface BlogPost \{[\s\S]*?\}/);
  const interfaceStr = interfaceMatch ? interfaceMatch[0] : '';
  code = code.replace(interfaceStr, '');

  let newData = interfaceStr.replace('interface', 'export interface') + "\n\n";
  newData += "export const categories = ['All', 'Education', 'Career', 'Health', 'Environment', 'Women Empowerment'];\n\n";
  newData += "export " + content.replace(/const categories = .*?;/, '');

  fs.writeFileSync('data/blogData.ts', newData);
  
  if (!code.includes("import { blogPosts,")) {
    code = "import { blogPosts, categories, BlogPost } from '../data/blogData';\n" + code;
  }
  fs.writeFileSync('views/Blog.tsx', code);
  console.log('Done extracting blogData');
} else {
  console.log('Not found');
}
