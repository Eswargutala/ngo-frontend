'use client';
import { useEffect, useState } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FileText, ShoppingBag, CreditCard, Package, RotateCcw, AlertCircle, Scale, UserCheck, Mail, MapPin, Phone } from 'lucide-react';

export default function TermsConditions() {
  const { t } = useThemeLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const sections = [
    {
      icon: FileText,
      title: '1. Acceptance of Terms',
      content: [
        'Welcome to Lakhil Raj Welfare Foundation\'s online platform ("Website"). By accessing or using our Website, you agree to be bound by these Terms and Conditions ("Terms").',
        'If you do not agree with any part of these Terms, please do not use our Website or services.',
        'We reserve the right to modify these Terms at any time. Continued use of the Website after changes constitutes acceptance of the modified Terms.'
      ]
    },
    {
      icon: UserCheck,
      title: '2. User Eligibility',
      content: [
        'You must be at least 18 years old to use our services or make purchases.',
        'By using this Website, you represent that you have the legal capacity to enter into a binding agreement.',
        'If you are under 18, you may use our Website only with the involvement and consent of a parent or legal guardian.'
      ]
    },
    {
      icon: ShoppingBag,
      title: '3. Products & Services',
      content: [
        'All products sold on our platform are handmade or eco-friendly items created by artisans and underprivileged communities.',
        'We make every effort to display accurate product information, including descriptions, images, and pricing.',
        'Product availability is subject to change without notice. We reserve the right to limit quantities or discontinue products.',
        'Colors and appearance may vary slightly from images due to device display settings and the handmade nature of products.'
      ]
    },
    {
      icon: CreditCard,
      title: '4. Pricing & Payment',
      content: [
        'All prices are listed in Indian Rupees (INR) unless otherwise stated.',
        'We accept the following payment methods:'
      ],
      list: [
        'UPI (Unified Payments Interface)',
        'Credit/Debit Cards (Visa, Mastercard, RuPay)',
        'Net Banking',
        'Cash on Delivery (where available)'
      ],
      additionalContent: [
        'Payment processing is handled by secure third-party payment gateways.',
        'Prices are subject to change without notice, but changes will not affect orders already placed.',
        'All transactions are final unless otherwise stated in our Return Policy.'
      ]
    },
    {
      icon: Package,
      title: '5. Order Processing & Shipping',
      content: [
        'Orders are processed within 1-3 business days after payment confirmation.',
        'Shipping times vary by location:'
      ],
      list: [
        'Metro cities: 3-5 business days',
        'Other cities: 5-7 business days',
        'Remote areas: 7-10 business days'
      ],
      additionalContent: [
        'Shipping charges are calculated at checkout based on order value and delivery location.',
        'Free shipping is available on orders above ₹500 (unless otherwise specified).',
        'We are not responsible for delays caused by courier services, natural disasters, or circumstances beyond our control.'
      ]
    },
    {
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
      ],
      note: 'Certain items may not be eligible for return due to hygiene reasons or customization. Please check product-specific return eligibility before purchasing.',
      additionalContent: [
        'Return shipping costs are the responsibility of the customer unless the product is defective or incorrect.',
        'Exchanges are subject to product availability.'
      ]
    },
    {
      icon: AlertCircle,
      title: '7. Cancellations',
      content: [
        'You may cancel your order before it is shipped.',
        'To cancel an order, contact us immediately at tech.lakhilraj@gmail.com or call +91 94677 63541.',
        'Once an order is shipped, cancellation is not possible, but you may return the product as per our Return Policy.',
        'Refunds for cancelled orders will be processed within 5-7 business days.'
      ]
    },
    {
      title: '8. User Accounts',
      content: [
        'You may need to create an account to access certain features of our Website.',
        'You are responsible for maintaining the confidentiality of your account credentials.',
        'You agree to notify us immediately of any unauthorized use of your account.',
        'We reserve the right to suspend or terminate accounts that violate these Terms or engage in fraudulent activity.'
      ]
    },
    {
      title: '9. Intellectual Property',
      content: [
        'All content on this Website, including text, images, logos, graphics, and software, is the property of Lakhil Raj Welfare Foundation or its content suppliers.',
        'You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.',
        'Product images and descriptions are protected by copyright and may not be used without authorization.'
      ]
    },
    {
      title: '10. User Conduct',
      content: [
        'You agree not to use our Website for any unlawful purpose or in any way that could damage, disable, or impair our services.',
        'Prohibited activities include:'
      ],
      list: [
        'Submitting false or misleading information',
        'Attempting to hack or disrupt the Website',
        'Uploading viruses or malicious code',
        'Harassing or intimidating other users or staff',
        'Using automated systems (bots) to access the Website'
      ]
    },
    {
      title: '11. Donations',
      content: [
        'Contact us via email at tech.lakhilraj@gmail.com for any donation or transaction issues.',
        'Refund for donations is applicable for only 4 days after the transaction. Exceptional cases might be decided by the Lakhil team only.',
        'Certificates/Tax receipts (80G) may be provided within 7 working days of a successful donation.',
        'If a refund is processed, no donation certificate will be issued, and any issued certificates become invalid.',
        'All valid donations support our NGO\'s mission to empower underprivileged communities.'
      ]
    },
    {
      icon: Scale,
      title: '12. Limitation of Liability',
      content: [
        'To the fullest extent permitted by law, Lakhil Raj Welfare Foundation shall not be liable for:',
      ],
      list: [
        'Indirect, incidental, or consequential damages',
        'Loss of profits, data, or business opportunities',
        'Damages resulting from use or inability to use the Website',
        'Errors or omissions in content',
        'Unauthorized access to your account or personal information'
      ],
      note: 'Our total liability for any claim arising from these Terms or use of the Website shall not exceed the amount you paid for the product or service in question.'
    },
    {
      title: '13. Disclaimer of Warranties',
      content: [
        'Our Website and services are provided "as is" without warranties of any kind, either express or implied.',
        'We do not guarantee that:',
      ],
      list: [
        'The Website will be uninterrupted or error-free',
        'Defects will be corrected',
        'The Website is free from viruses or harmful components',
        'Information provided is accurate or complete'
      ]
    },
    {
      title: '14. Third-Party Links',
      content: [
        'Our Website may contain links to third-party websites for your convenience.',
        'We are not responsible for the content, privacy practices, or terms of service of third-party websites.',
        'Accessing third-party links is at your own risk.'
      ]
    },
    {
      title: '15. Governing Law',
      content: [
        'These Terms shall be governed by and construed in accordance with the laws of India.',
        'Any disputes arising from these Terms or use of the Website shall be subject to the exclusive jurisdiction of the courts in Bhagalpur, Bihar, India.',
        'If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.'
      ]
    },
    {
      title: '16. Changes to Terms',
      content: [
        'We reserve the right to update or modify these Terms at any time without prior notice.',
        'Changes will be effective immediately upon posting to the Website.',
        'Your continued use of the Website after changes are posted constitutes acceptance of the modified Terms.',
        'We recommend reviewing these Terms periodically to stay informed of any updates.'
      ]
    },
    {
      title: '17. Contact & Dispute Resolution',
      content: [
        'If you have any questions, concerns, or disputes regarding these Terms, please contact us first to seek resolution.',
        'We are committed to addressing your concerns promptly and fairly.',
        'Most disputes can be resolved through good-faith communication.'
      ]
    }
  ];

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#0B1F1D] py-12 px-4">
        <div className={`max-w-[900px] mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1E7A6E]/10 dark:bg-[#4FD1C5]/10 rounded-full mb-4">
              <FileText className="w-8 h-8 text-[#1E7A6E] dark:text-[#4FD1C5]" />
            </div>
            <h1 className="text-[32px] md:text-[40px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-3">
              Terms & Conditions
            </h1>
            <p className="text-[14px] text-[#6B7280] dark:text-[#9CA3AF]">
              Lakhil Raj Welfare Foundation
            </p>
            <p className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF] mt-2">
              Last Updated: March 24, 2026
            </p>
          </div>

          {/* Content Sections */}
          <div className="bg-white dark:bg-[#112F2B] rounded-lg shadow-sm border border-[#E5E7EB] dark:border-[#1F4D47] overflow-hidden">
            {sections.map((section, index) => (
              <div 
                key={index} 
                className={`p-6 md:p-8 ${index !== sections.length - 1 ? 'border-b border-[#E5E7EB] dark:border-[#1F4D47]' : ''}`}
              >
                {/* Section Header */}
                <div className="flex items-start gap-3 mb-4">
                  {section.icon && (
                    <div className="flex-shrink-0 w-10 h-10 bg-[#1E7A6E]/10 dark:bg-[#4FD1C5]/10 rounded-lg flex items-center justify-center mt-1">
                      <section.icon className="w-5 h-5 text-[#1E7A6E] dark:text-[#4FD1C5]" />
                    </div>
                  )}
                  <h2 className="text-[18px] md:text-[20px] font-bold text-[#111827] dark:text-[#E5E7EB]">
                    {section.title}
                  </h2>
                </div>

                {/* Section Content */}
                <div className="space-y-3">
                  {section.content?.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-[14px] leading-relaxed text-[#6B7280] dark:text-[#9CA3AF]">
                      {paragraph}
                    </p>
                  ))}

                  {/* List */}
                  {section.list && (
                    <ul className="space-y-2 mt-3">
                      {section.list.map((item, lIndex) => (
                        <li key={lIndex} className="text-[14px] text-[#6B7280] dark:text-[#9CA3AF] flex items-start gap-2">
                          <span className="text-[#1E7A6E] dark:text-[#4FD1C5] mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Note */}
                  {section.note && (
                    <p className="text-[13px] italic text-[#6B7280] dark:text-[#9CA3AF] mt-3 pl-4 border-l-2 border-[#1E7A6E] dark:border-[#4FD1C5]">
                      {section.note}
                    </p>
                  )}

                  {/* Additional Content */}
                  {section.additionalContent?.map((paragraph, aIndex) => (
                    <p key={aIndex} className="text-[14px] leading-relaxed text-[#6B7280] dark:text-[#9CA3AF] mt-3">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-8 bg-white dark:bg-[#112F2B] rounded-lg shadow-sm border border-[#E5E7EB] dark:border-[#1F4D47] p-6 md:p-8">
            <h2 className="text-[18px] md:text-[20px] font-bold text-[#111827] dark:text-[#E5E7EB] mb-4">
              18. Contact Information
            </h2>
            <p className="text-[14px] text-[#6B7280] dark:text-[#9CA3AF] mb-4">
              For questions or concerns about these Terms and Conditions, please contact us:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#1E7A6E] dark:text-[#4FD1C5] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[13px] font-semibold text-[#111827] dark:text-[#E5E7EB]">Email</p>
                  <a href="mailto:tech.lakhilraj@gmail.com" className="text-[14px] text-[#1E7A6E] dark:text-[#4FD1C5] hover:underline">
                    tech.lakhilraj@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#1E7A6E] dark:text-[#4FD1C5] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[13px] font-semibold text-[#111827] dark:text-[#E5E7EB]">Address</p>
                  <p className="text-[14px] text-[#6B7280] dark:text-[#9CA3AF]">
                    IIIT Bhagalpur, Bihar 813210, India
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#1E7A6E] dark:text-[#4FD1C5] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[13px] font-semibold text-[#111827] dark:text-[#E5E7EB]">Phone</p>
                  <a href="tel:+918058060375" className="text-[14px] text-[#1E7A6E] dark:text-[#4FD1C5] hover:underline">
                    +91 94677 63541
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-6 text-center">
            <p className="text-[12px] text-[#6B7280] dark:text-[#9CA3AF]">
              By using our Website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
