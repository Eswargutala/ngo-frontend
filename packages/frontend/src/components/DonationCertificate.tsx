import { useEffect, useRef } from 'react';
import { X, Download, Printer, Share2, CheckCircle2 } from 'lucide-react';

interface DonationCertificateProps {
  isOpen: boolean;
  onClose: () => void;
  donationData: {
    name: string;
    amount: number;
    transactionId: string;
    paymentMethod: string;
    email: string;
    date: string;
    certificateId: string;
  };
}

export function DonationCertificate({ isOpen, onClose, donationData }: DonationCertificateProps) {
  const certificateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleDownloadPDF = async () => {
    // Dynamic import of html2pdf
    const html2pdf = (await import('html2pdf.js')).default;
    
    const element = certificateRef.current;
    if (!element) return;

    const opt = {
      margin: 0,
      filename: `LRWF-Certificate-${donationData.certificateId}.pdf`,
      image: { type: 'jpeg' as any, quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const }
    };

    html2pdf().set(opt).from(element).save();
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Donation Certificate - Lakhil Raj Welfare Foundation',
      text: `I just donated ₹${donationData.amount} to Lakhil Raj Welfare Foundation! Certificate ID: ${donationData.certificateId}`,
      url: `${window.location.origin}/verify?id=${donationData.certificateId}`
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`${shareData.text}\nVerify at: ${shareData.url}`);
      alert('Certificate details copied to clipboard!');
    }
  };

  const verificationUrl = `${window.location.origin}/verify?id=${donationData.certificateId}`;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white dark:bg-[#0D1F1C] rounded-xl max-w-4xl w-full my-8 relative shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-[#1F4D47] rounded-lg transition-colors z-10"
        >
          <X size={24} className="text-gray-600 dark:text-gray-400" />
        </button>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-3 p-6 pb-4 border-b border-gray-200 dark:border-[#1F4D47]">
          <button
            onClick={handleDownloadPDF}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#1E7A6E] hover:bg-[#166558] text-white rounded-lg text-sm font-medium transition-colors"
          >
            <Download size={16} />
            Download PDF
          </button>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#112F2B] hover:bg-gray-50 dark:hover:bg-[#1F4D47] text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-[#1F4D47] rounded-lg text-sm font-medium transition-colors"
          >
            <Printer size={16} />
            Print
          </button>
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#112F2B] hover:bg-gray-50 dark:hover:bg-[#1F4D47] text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-[#1F4D47] rounded-lg text-sm font-medium transition-colors"
          >
            <Share2 size={16} />
            Share
          </button>
        </div>

        {/* Certificate */}
        <div className="p-8">
          <div 
            ref={certificateRef}
            className="bg-white p-8 md:p-12 rounded-lg border-2 border-[#1E7A6E] dark:border-[#4FD1C5] relative overflow-hidden"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            {/* Decorative Corner Elements */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-[#F4B400]"></div>
            <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-[#F4B400]"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-[#F4B400]"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-[#F4B400]"></div>

            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-[#1E7A6E] mb-2 tracking-wide">
                LAKHIL RAJ WELFARE FOUNDATION
              </h1>
              <div className="w-32 h-1 bg-[#F4B400] mx-auto mb-3"></div>
              <p className="text-lg text-gray-600 tracking-wider">DONATION CERTIFICATE</p>
            </div>

            {/* Certificate Info */}
            <div className="flex justify-between items-start mb-8 text-sm text-gray-600">
              <div>
                <p><strong>Certificate No:</strong> {donationData.certificateId}</p>
              </div>
              <div className="text-right">
                <p><strong>Date:</strong> {donationData.date}</p>
              </div>
            </div>

            {/* Main Content */}
            <div className="text-center mb-8 space-y-6">
              <p className="text-base text-gray-700">This is to certify that</p>
              
              <h2 className="text-2xl md:text-3xl font-bold text-[#111827] border-b-2 border-[#1E7A6E] pb-2 inline-block px-8">
                {donationData.name}
              </h2>

              <p className="text-base text-gray-700">has contributed an amount of</p>

              <div className="my-6">
                <p className="text-4xl md:text-5xl font-bold text-[#1E7A6E]">
                  ₹ {donationData.amount.toLocaleString('en-IN')}
                </p>
              </div>

              <p className="text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
                towards supporting the initiatives of<br />
                <strong>Lakhil Raj Welfare Foundation</strong>
              </p>

              <div className="bg-[#F9FAFB] p-4 rounded-lg border border-gray-200 max-w-xl mx-auto">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Your contribution helps us create impact in:</strong>
                </p>
                <p className="text-sm text-[#1E7A6E] font-medium">
                  Education • Health • Skill Development • Rural Upliftment
                </p>
              </div>
            </div>

            {/* Payment Details */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-8">
              <h3 className="text-sm font-bold text-gray-700 mb-3">Payment Details:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                <p><strong>Transaction ID:</strong> {donationData.transactionId}</p>
                <p><strong>Payment Method:</strong> {donationData.paymentMethod}</p>
                <p className="md:col-span-2"><strong>Email:</strong> {donationData.email}</p>
              </div>
            </div>

            {/* Thank You */}
            <p className="text-center text-base text-gray-700 mb-8">
              We sincerely thank you for your support.
            </p>

            {/* Signature Section */}
            <div className="flex justify-between items-end mb-8">
              <div className="text-left">
                <div className="mb-2">
                  <div className="w-32 h-12 flex items-center justify-center text-3xl font-serif italic text-[#1E7A6E]">
                    Signature
                  </div>
                </div>
                <div className="border-t-2 border-gray-400 pt-2 text-sm text-gray-600">
                  <p className="font-semibold">Authorized Signatory</p>
                  <p>Lakhil Raj Welfare Foundation</p>
                </div>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 border-2 border-gray-300 rounded-lg flex items-center justify-center text-xs text-gray-500 mb-2">
                  QR Code
                </div>
                <p className="text-xs text-gray-500">Scan to Verify</p>
              </div>
            </div>

            {/* Verification Section */}
            <div className="border-t-2 border-dashed border-gray-300 pt-4 text-center">
              <p className="text-xs text-gray-600 mb-2">
                <strong>Verify this certificate at:</strong>
              </p>
              <p className="text-xs text-[#1E7A6E] font-mono break-all mb-2">
                {verificationUrl}
              </p>
              <p className="text-xs text-gray-500 italic">
                This certificate is digitally generated and valid only after verification through official portal.
              </p>
            </div>

            {/* Verified Badge */}
            <div className="flex justify-center mt-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full">
                <CheckCircle2 size={20} className="text-green-600" />
                <span className="text-sm font-semibold text-green-700">Verified Donation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="px-8 pb-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Your certificate has been sent to your email: <strong>{donationData.email}</strong>
          </p>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #certificate-content, #certificate-content * {
            visibility: visible;
          }
          #certificate-content {
            position: absolute;
            left: 0;
            top: 0;
          }
        }
      `}</style>
    </div>
  );
}
