'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Copy, CheckCircle2, AlertTriangle, Shield, Mail, Phone } from 'lucide-react';

const UPI_ID = 'lakhilraj@upi';

export default function DonateViaUPI() {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>('idle');
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(UPI_ID);
      setCopyState('copied');
      setTimeout(() => setCopyState('idle'), 2000);
    } catch (err) {
      console.error(err);
      setCopyState('error');
      setTimeout(() => setCopyState('idle'), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#0B1F1D] text-[#111827] dark:text-[#E5E7EB]">
      <Header />

      <main className="max-w-[600px] mx-auto px-4 py-10 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Donate via UPI</h1>
          <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
            Scan the QR code using any UPI app to complete your donation.
          </p>
        </div>

        {/* QR Section */}
        <div className="bg-white dark:bg-[#112F2B] border border-[#E5E7EB] dark:border-[#1F4D47] rounded-2xl p-6 flex flex-col items-center gap-3 shadow-sm">
          <div className="w-[240px] h-[240px] bg-white rounded-xl flex items-center justify-center border border-[#E5E7EB] dark:border-[#1F4D47]">
            <Image
              src="/images/upi-qr.png"
              alt="UPI QR code for Lakhil Raj Welfare Foundation"
              width={220}
              height={220}
              className="w-[220px] h-[220px] object-contain rounded-lg"
              priority
            />
          </div>
          <p className="text-sm text-[#374151] dark:text-[#D1D5DB]">UPI ID: <span className="font-semibold">{UPI_ID}</span></p>
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold border border-[#E5E7EB] dark:border-[#1F4D47] rounded-lg bg-white dark:bg-[#0D1F1C] hover:bg-[#F9FAFB] dark:hover:bg-[#1F4D47] text-[#1E7A6E] dark:text-[#4FD1C5] transition-colors"
          >
            <Copy className="w-4 h-4" />
            {copyState === 'copied' ? 'Copied!' : copyState === 'error' ? 'Copy failed' : 'Copy UPI ID'}
          </button>
        </div>

        {/* Instructions */}
        <div className="space-y-2">
          <h2 className="text-base font-semibold">How to Donate</h2>
          <ol className="text-sm text-[#4B5563] dark:text-[#D1D5DB] space-y-1 list-decimal list-inside">
            <li>Open any UPI app (GPay, PhonePe, Paytm).</li>
            <li>Scan the QR code.</li>
            <li>Enter the amount.</li>
            <li>Complete the payment.</li>
          </ol>
        </div>

        {/* Confirmation Form */}
        <div className="border border-[#E5E7EB] dark:border-[#1F4D47] rounded-2xl bg-white dark:bg-[#112F2B] p-6">
          <h2 className="text-lg font-semibold mb-4">Payment Confirmation</h2>
          <form className="space-y-3" onSubmit={handleSubmit}>
            <input required placeholder="Full Name" className="w-full border border-[#E5E7EB] dark:border-[#1F4D47] rounded-lg px-3 py-2.5 bg-white dark:bg-[#0D1F1C] text-sm" />
            <input required type="email" placeholder="Email" className="w-full border border-[#E5E7EB] dark:border-[#1F4D47] rounded-lg px-3 py-2.5 bg-white dark:bg-[#0D1F1C] text-sm" />
            <input required placeholder="Phone" className="w-full border border-[#E5E7EB] dark:border-[#1F4D47] rounded-lg px-3 py-2.5 bg-white dark:bg-[#0D1F1C] text-sm" />
            <input required placeholder="Amount Paid" className="w-full border border-[#E5E7EB] dark:border-[#1F4D47] rounded-lg px-3 py-2.5 bg-white dark:bg-[#0D1F1C] text-sm" />
            <input required placeholder="Transaction ID (UPI Ref No.)" className="w-full border border-[#E5E7EB] dark:border-[#1F4D47] rounded-lg px-3 py-2.5 bg-white dark:bg-[#0D1F1C] text-sm" />
            <button
              type="submit"
              className="w-full bg-[#111827] text-white py-3 rounded-lg text-sm font-semibold hover:bg-[#0f172a] transition-colors"
            >
              Submit Payment Details
            </button>
          </form>
          {submitted && (
            <div className="mt-3 inline-flex items-center gap-2 text-sm text-[#1E7A6E] dark:text-[#4FD1C5] font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              Your payment is under verification. Certificate will be sent soon.
            </div>
          )}
        </div>

        {/* Important Note */}
        <div className="bg-[#F3F4F6] dark:bg-[#1F2937] border border-[#E5E7EB] dark:border-[#1F4D47] text-xs text-[#4B5563] dark:text-[#D1D5DB] rounded-xl p-4 flex items-start gap-3">
          <AlertTriangle className="w-4 h-4 text-[#B45309] mt-0.5" />
          <div>
            <p>Payment must be completed before submitting. Enter the correct transaction ID. Verification may take some time.</p>
          </div>
        </div>

        {/* Trust Section */}
        <div className="space-y-2">
          <h2 className="text-sm font-semibold">Trust</h2>
          <ul className="text-sm text-[#4B5563] dark:text-[#D1D5DB] space-y-1">
            <li className="flex items-center gap-2"><Shield className="w-4 h-4 text-[#1E7A6E] dark:text-[#4FD1C5]" /> Secure payment via UPI</li>
            <li className="flex items-center gap-2"><Shield className="w-4 h-4 text-[#1E7A6E] dark:text-[#4FD1C5]" /> No sensitive data stored</li>
            <li className="flex items-center gap-2"><Shield className="w-4 h-4 text-[#1E7A6E] dark:text-[#4FD1C5]" /> 100% transparency</li>
          </ul>
        </div>

        {/* After Submission Flow */}
        <div className="text-sm text-[#4B5563] dark:text-[#D1D5DB] space-y-1">
          <p>Submit details → Admin verifies payment → Certificate generated → Email sent</p>
          <p className="inline-flex items-center gap-2 text-[#1E7A6E] dark:text-[#4FD1C5] font-semibold">
            <CheckCircle2 className="w-4 h-4" /> Your payment is under verification. Certificate will be sent soon.
          </p>
        </div>

        {/* Help CTA */}
        <div className="text-center text-sm text-[#4B5563] dark:text-[#D1D5DB] space-y-2">
          <p>Need help with payment?</p>
          <div className="flex items-center justify-center gap-4 text-[#1E7A6E] dark:text-[#4FD1C5] font-semibold">
            <a href="mailto:support@lakhilrajwelfare.org" className="inline-flex items-center gap-2 hover:underline">
              <Mail className="w-4 h-4" /> Contact Us
            </a>
            <span className="text-[#9CA3AF]">|</span>
            <a href="tel:+910000000000" className="inline-flex items-center gap-2 hover:underline">
              <Phone className="w-4 h-4" /> +91-XXXXXXXXXX
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
