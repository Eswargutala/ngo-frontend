const fs = require('fs');
let code = fs.readFileSync('components/Donate/DonationCard.tsx', 'utf-8');

code = code.replace(/pan: string;\s*}/, 'pan: string;\n  utrNumber: string;\n}');

code = code.replace(/pan: ''\s*}\);/g, "pan: '',\n    utrNumber: ''\n  });");

code = code.replace(/const handleSubmit = \(e: React\.FormEvent\) => \{[\s\S]*?setShowCertificate\(true\);\n    \}\n  \};/, 
\const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isFormValid()) {
      setIsSubmitting(true);
      const donationId = generateCertificateId();
      const donationAmount = isCustom ? parseInt(customAmount) : selectedAmount;
      
      const payload = {
        type: donationType,
        amount: donationAmount,
        ...formData,
        donationId
      };
      
      try {
        console.log('Processing donation backend entry:', payload);
        await new Promise(r => setTimeout(r, 1500));
        setSubmitSuccess(true);
      } catch (error) {
        alert('Something went wrong. Please ensure you provided a valid UTR or contact support.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };\);

code = code.replace(/return \(\s*<div className="w-full max-w-\[440px\] mx-auto bg-white dark:bg-\[#0F2E2A\] rounded-2xl shadow-lg p-6">\s*<form onSubmit=\{handleSubmit\} className="space-y-4">/,
\eturn (
    <div className="w-full max-w-[440px] mx-auto bg-white dark:bg-[#0F2E2A] rounded-2xl shadow-lg p-6">
      {submitSuccess ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-[#1E7A6E]/10 dark:bg-[#4FD1C5]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="w-8 h-8 text-[#1E7A6E] dark:text-[#4FD1C5]" />
          </div>
          <h3 className="text-xl font-bold text-[#1F2937] dark:text-white mb-3">Donation Received Successfully!</h3>
          <p className="text-[#6B7280] dark:text-[#9CA3AF] text-sm leading-relaxed">
            Thank you for your generous contribution. We will verify your transaction against the UTR provided and email you your official 80G tax exemption certificate within 7 working days.
          </p>
          <button 
            onClick={() => {
              setSubmitSuccess(false);
              setFormData({ ...formData, utrNumber: '', pan: '', pincode: '', address: '', city: '', state: '' });
            }}
            className="mt-6 w-full py-3 bg-[#1E7A6E] dark:bg-[#4FD1C5] hover:bg-[#155A51] dark:hover:bg-[#3EADA1] text-white dark:text-[#0F2E2A] font-semibold rounded-lg transition-colors"
          >
            Donate Again
          </button>
        </div>
      ) : (
      <form onSubmit={handleSubmit} className="space-y-4">
\);

code = code.replace(/After scanning and completing your payment, please submit this form to receive your certificate\./, "After scanning and completing your payment, please enter your UTR number and submit this form to receive your certificate.");

code = code.replace(/<div className="flex items-center justify-center gap-3 flex-wrap pt-2">/, 
\
            <div className="w-full">
              <label className="block text-[12px] font-medium text-[#4B5563] dark:text-[#E5E7EB] mb-1">
                UPI Reference Number (UTR) <span className="text-[#EF4444]">*</span>
              </label>
              <input
                type="text"
                name="utrNumber"
                value={formData.utrNumber}
                onChange={handleInputChange}
                onBlur={() => setTouched(prev => new Set(prev).add('utrNumber'))}
                className="w-full px-3 py-2 bg-white dark:bg-[#1A3935] border border-[#E5E7EB] dark:border-[#2D5A54] rounded-lg text-[14px] text-[#1F2937] dark:text-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-[#1E7A6E] dark:focus:ring-[#4FD1C5] transition-shadow placeholder:text-gray-400 dark:placeholder:text-gray-500"
                placeholder="Enter 12-digit UTR No."
              />
            </div>

            <div className="flex items-center justify-center gap-3 flex-wrap pt-2">\);
            
code = code.replace(/<button\s+type="submit"[\s\S]*?>\s*\{t\('donate\.card\.donateNow'\)\}\s*<\/button>/,
\<button
            type="submit"
            disabled={!isFormValid() || isSubmitting}
            className="w-full py-3.5 bg-gradient-to-r from-[#1E7A6E] to-[#2C9A8D] dark:from-[#4FD1C5] dark:to-[#38B2AC] hover:from-[#155A51] hover:to-[#227A70] dark:hover:from-[#3EADA1] dark:hover:to-[#2F938E] text-white dark:text-[#0F2E2A] font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg disabled:hover:scale-100 flex items-center justify-center gap-2"
          >
            {isSubmitting ? 'Processing...' : t('donate.card.donateNow')}
          </button>
\);

code = code.replace(/<\/form>\s*<\/div>\s*<DonationCertificate[\s\S]*?\/>\s*<\/div>/, \</form>
      )}
    </div>
    </div>\);

fs.writeFileSync('components/Donate/DonationCard.tsx', code);
