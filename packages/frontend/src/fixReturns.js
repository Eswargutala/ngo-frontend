const fs = require('fs');
let code = fs.readFileSync('views/TermsConditions.tsx', 'utf-8');
const oldReturns =       {
        icon: RotateCcw,
        title: '6. Returns & Refunds',
        content: [
          'We want you to be completely satisfied with your purchase. Our return policy includes:'
        ],
        list: [
          'Returns accepted within 7 days of delivery',
          'Products must be unused, unwashed, and in original packaging',
          'Tags and labels must be intact',
          'Refunds processed within 7-10 business days after receiving returned items'
        ],;
const newReturns =       {
        icon: RotateCcw,
        title: '6. Returns & Refunds',
        content: [
          'We want you to be completely satisfied with your purchase. To request a refund or return for products, please contact us via email.'
        ],
        list: [
          'Returns must be initiated within 7 days of delivery.',
          'Products must be unused, unwashed, and in original packaging with tags intact.',
          'Refunds will be processed within 7-10 business days after receiving returned items.'
        ],;

code = code.replace(oldReturns, newReturns);
fs.writeFileSync('views/TermsConditions.tsx', code);
