const fs = require('fs');
const path = require('path');

const mappings = {
  'invite-to-school': 'RequestWorkshop',
  'resources/blog': 'Blog',
  'resources/career': 'CareerGuidance',
  'resources/environmental': 'Environmental',
  'resources/news': 'News',
  'resources/events': 'Events',
  'resources/gallery': 'Gallery',
  'about': 'About',
  'about/our-story': 'OurStory',
  'about/vision-mission': 'VisionMission',
  'about/team': 'Team',
  'impact': 'ImpactOverview',
  'impact/annual-reports': 'AnnualReport',
  'impact/reports': 'AnnualReport',
  'impact/success-stories': 'SuccessStories',
  'impact/case-studies': 'SuccessStories',
  'programs': 'Programs',
  'programs/education': 'Education',
  'programs/health': 'Health',
  'programs/women-empowerment': 'WomenEmpowerment',
  'programs/rural-development': 'RuralDevelopment',
  'programs/skill-development': 'SkillDevelopment'
};

const appDir = path.join('app');
for (const [route, view] of Object.entries(mappings)) {
  const routePath = path.join(appDir, route);
  if (!fs.existsSync(routePath)) {
    fs.mkdirSync(routePath, { recursive: true });
  }
  
  const pageFile = path.join(routePath, 'page.tsx');
  const depth = route.split('/').length;
  let importPath = '';
  for(let i=0; i<depth; i++) importPath += '../';
  importPath += '../views/' + view;
  
  fs.writeFileSync(pageFile, "import " + view + " from '" + importPath + "';\n\nexport default function Page() {\n  return <" + view + " />;\n}\n");
  console.log('Updated ' + routePath);
}
