'use client';

import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ShieldAlert, RefreshCcw, XCircle, Clock, FileText, CreditCard, Mail, Phone, Info } from 'lucide-react';

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#0B1F1D] text-[#111827] dark:text-[#E5E7EB] transition-colors duration-200">
      <Header />
      
      <main className="max-w-[800px] mx-auto px-4 py-16">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-[#E8F2F1] dark:bg-[#1A3A36] rounded-full mb-4">
            <RefreshCcw className="w-8 h-8 text-[#1E7A6E] dark:text-[#4FD1C5]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] dark:text-white mb-4 tracking-tight">Refund Policy</h1>
          <p className="text-[#6B7280] dark:text-[#9CA3AF] text-sm md:text-base font-medium">Last Updated: March 2025</p>
        </div>

        <div className="bg-white dark:bg-[#112F2B] rounded-2xl shadow-sm border border-[#E5E7EB] dark:border-[#1F4D47] overflow-hidden">
          
          {/* Introduction */}
          <div className="p-8 md:p-10 border-b border-[#E5E7EB] dark:border-[#1F4D47] bg-[#F8FAFA] dark:bg-[#163833]">
            <p className="text-[16px] leading-relaxed text-[#4B5563] dark:text-[#D1D5DB]">
              <span className="font-semibold text-[#111827] dark:text-white">Lakhil Raj Welfare Foundation</span> is a non-profit organization. Donations made to support our initiatives are used for social impact programs including education, health, skill development, and community welfare. As donations are voluntary contributions, refunds are generally not applicable except under specific circumstances outlined below.
            </p>
          </div>

          <div className="p-8 md:p-10 space-y-10">

            {/* General Policy */}
            <section className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <Info className="w-6 h-6 text-[#1E7A6E] dark:text-[#4FD1C5]" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#111827] dark:text-white mb-3">General Policy</h2>
                <ul className="space-y-2 text-[#4B5563] dark:text-[#D1D5DB]">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1E7A6E] dark:bg-[#4FD1C5] mt-2 flex-shrink-0"></span>
                    <span><strong className="text-[#111827] dark:text-white">Donations once made are non-refundable.</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1E7A6E] dark:bg-[#4FD1C5] mt-2 flex-shrink-0"></span>
                    <span>All contributions are considered final and voluntary.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1E7A6E] dark:bg-[#4FD1C5] mt-2 flex-shrink-0"></span>
                    <span>Refunds will only be processed in exceptional cases.</span>
                  </li>
                </ul>
              </div>
            </section>

            <hr className="border-[#E5E7EB] dark:border-[#1F4D47]" />

            {/* Eligible / Non-Eligible Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Eligible */}
              <section className="bg-[#F0FDF4] dark:bg-[#064E3B]/30 p-6 rounded-xl border border-[#BBF7D0] dark:border-[#065F46]">
                <div className="flex items-center gap-2 mb-4">
                  <RefreshCcw className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <h2 className="text-lg font-bold text-green-900 dark:text-green-300">Eligible for Refund</h2>
                </div>
                <ul className="space-y-2.5 text-sm text-green-800 dark:text-green-200/80">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 mt-0.5">•</span>
                    <span>Duplicate transaction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 mt-0.5">•</span>
                    <span>Incorrect amount entered accidentally</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 mt-0.5">•</span>
                    <span>Technical error during payment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 mt-0.5">•</span>
                    <span>Unauthorized transaction (with proof)</span>
                  </li>
                </ul>
              </section>

              {/* Non-Eligible */}
              <section className="bg-[#FEF2F2] dark:bg-[#7F1D1D]/20 p-6 rounded-xl border border-[#FECACA] dark:border-[#991B1B]/50">
                <div className="flex items-center gap-2 mb-4">
                  <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <h2 className="text-lg font-bold text-red-900 dark:text-red-300">Not Eligible</h2>
                </div>
                <ul className="space-y-2.5 text-sm text-red-800 dark:text-red-200/80">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                    <span>Change of mind after donation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                    <span>Delay in program execution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                    <span>Dissatisfaction without valid reason</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                    <span>Donations made knowingly</span>
                  </li>
                </ul>
              </section>
            </div>

            {/* Timeline Alert Banner */}
            <div className="flex items-center gap-4 bg-[#FFFBEB] dark:bg-[#78350F]/20 p-5 rounded-xl border border-[#FDE68A] dark:border-[#92400E]/50">
              <Clock className="w-8 h-8 text-[#D97706] dark:text-[#FBBF24] flex-shrink-0" />
              <div>
                <h3 className="font-bold text-[#92400E] dark:text-[#FCD34D]">7-Day Policy</h3>
                <p className="text-sm text-[#B45309] dark:text-[#FDE68A]/80 mt-1">Refund requests must be made within 7 days of the transaction. Requests after this period may not be considered.</p>
              </div>
            </div>

            <hr className="border-[#E5E7EB] dark:border-[#1F4D47]" />

            {/* Refund Process & Details */}
            <div className="grid md:grid-cols-2 gap-8">
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-5 h-5 text-[#1E7A6E] dark:text-[#4FD1C5]" />
                  <h2 className="text-lg font-bold text-[#111827] dark:text-white">Request Process</h2>
                </div>
                <p className="text-sm text-[#4B5563] dark:text-[#D1D5DB] mb-3">To request a refund, please provide:</p>
                <ul className="space-y-1.5 text-sm text-[#6B7280] dark:text-[#9CA3AF] mb-4">
                  <li>• Full Name</li>
                  <li>• Email ID</li>
                  <li>• Transaction ID</li>
                  <li>• Donation Amount</li>
                  <li>• Reason for refund</li>
                </ul>
                <a href="mailto:support@lakhilrajwelfare.org" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E7A6E] dark:text-[#4FD1C5] hover:underline bg-[#E8F2F1] dark:bg-[#1A3A36] px-4 py-2 rounded-lg transition-colors">
                  <Mail className="w-4 h-4" />
                  support@lakhilrajwelfare.org
                </a>
              </section>

              <section className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <ShieldAlert className="w-5 h-5 text-[#1E7A6E] dark:text-[#4FD1C5]" />
                    <h2 className="text-lg font-bold text-[#111827] dark:text-white">Processing Details</h2>
                  </div>
                  <ul className="space-y-1.5 text-sm text-[#6B7280] dark:text-[#9CA3AF]">
                    <li>• Processing takes <strong className="text-[#111827] dark:text-gray-200">5–10 business days</strong>.</li>
                    <li>• Refunds route to original payment method.</li>
                    <li>• The Foundation reserves the right to decline invalid or fraudulent requests.</li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CreditCard className="w-5 h-5 text-[#1E7A6E] dark:text-[#4FD1C5]" />
                    <h2 className="text-sm font-bold text-[#111827] dark:text-white">Payment & Certificates</h2>
                  </div>
                  <p className="text-[13px] text-[#6B7280] dark:text-[#9CA3AF] leading-relaxed">
                    Payments are securely processed via Razorpay. We do not store sensitive card data. Note that once a donation certificate (80G) has been generated, refunds may not be applicable unless an error is verified.
                  </p>
                </div>
              </section>
            </div>

          </div>

          {/* Footer of card */}
          <div className="bg-[#F9FAFB] dark:bg-[#0B1F1D] p-6 border-t border-[#E5E7EB] dark:border-[#1F4D47] flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="flex items-center gap-2 text-[#6B7280] dark:text-[#9CA3AF]">
              <Phone className="w-4 h-4" />
              <span>For queries: <strong className="text-[#111827] dark:text-white">+91-XXXXXXXXXX</strong></span>
            </div>
            <p className="text-[#9CA3AF] dark:text-[#6B7280] text-[12px] text-center md:text-right">
              We may update this policy periodically.<br className="hidden md:block"/> Changes will reflect on this page.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

