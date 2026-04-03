'use client';
import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Search, CheckCircle2, XCircle, Calendar, IndianRupee, Mail, CreditCard } from 'lucide-react';

interface DonationData {
  certificateId: string;
  name: string;
  amount: number;
  date: string;
  email: string;
  transactionId: string;
  status: 'verified' | 'pending' | 'invalid';
}

export default function Verify() {
  const [certificateId, setCertificateId] = useState('');
  const [searchResult, setSearchResult] = useState<DonationData | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  // Mock database - In production, this would be an API call
  const mockDatabase: DonationData[] = [
    {
      certificateId: 'LRWF-2025-ABC123',
      name: 'Meghram Meena',
      amount: 5000,
      date: '12 March 2025',
      email: 'meghram@email.com',
      transactionId: 'TXN123456789',
      status: 'verified'
    },
    {
      certificateId: 'LRWF-2025-XYZ789',
      name: 'Rajesh Kumar',
      amount: 2500,
      date: '15 March 2025',
      email: 'rajesh@email.com',
      transactionId: 'TXN987654321',
      status: 'verified'
    },
    {
      certificateId: 'LRWF-2025-DEF456',
      name: 'Priya Sharma',
      amount: 1000,
      date: '18 March 2025',
      email: 'priya@email.com',
      transactionId: 'TXN456789123',
      status: 'verified'
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setHasSearched(true);

    // Simulate API call delay
    setTimeout(() => {
      const result = mockDatabase.find(
        (record) => record.certificateId.toUpperCase() === certificateId.toUpperCase()
      );
      setSearchResult(result || null);
      setIsSearching(false);
    }, 800);
  };

  // Auto-search if ID is in URL params
  useState(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const idFromUrl = urlParams.get('id');
    if (idFromUrl) {
      setCertificateId(idFromUrl);
      setTimeout(() => {
        const result = mockDatabase.find(
          (record) => record.certificateId.toUpperCase() === idFromUrl.toUpperCase()
        );
        setSearchResult(result || null);
        setHasSearched(true);
      }, 500);
    }
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-white dark:bg-[#0D1F1C]">
        <div className="max-w-4xl mx-auto px-6 py-16">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#111827] dark:text-white mb-4">
              🔍 Verify Donation Certificate
            </h1>
            <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF] max-w-2xl mx-auto">
              Enter your certificate ID to verify the authenticity of your donation certificate issued by Lakhil Raj Welfare Foundation.
            </p>
          </div>

          {/* Search Form */}
          <div className="bg-white dark:bg-[#112F2B] rounded-xl border-2 border-[#E5E7EB] dark:border-[#1F4D47] p-8 mb-8 shadow-lg">
            <form onSubmit={handleSearch} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[#111827] dark:text-white mb-3">
                  Certificate ID
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={certificateId}
                    onChange={(e) => setCertificateId(e.target.value)}
                    placeholder="e.g., LRWF-2025-ABC123"
                    className="w-full px-4 py-3 pr-12 rounded-lg border-2 border-[#E5E7EB] dark:border-[#1F4D47] bg-white dark:bg-[#0D1F1C] text-[#111827] dark:text-white text-base focus:outline-none focus:border-[#1E7A6E] dark:focus:border-[#4FD1C5] transition-colors uppercase"
                    required
                  />
                  <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280] dark:text-[#9CA3AF]" size={20} />
                </div>
                <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mt-2">
                  Format: LRWF-YYYY-XXXXXX (e.g., LRWF-2025-ABC123)
                </p>
              </div>

              <button
                type="submit"
                disabled={isSearching || !certificateId.trim()}
                className="w-full py-3 bg-[#1E7A6E] hover:bg-[#166558] disabled:bg-gray-400 text-white rounded-lg font-semibold text-base transition-all duration-200 disabled:cursor-not-allowed"
              >
                {isSearching ? 'Verifying...' : 'Verify Certificate'}
              </button>
            </form>
          </div>

          {/* Search Results */}
          {hasSearched && (
            <div className="animate-fadeIn">
              {searchResult ? (
                /* Valid Certificate */
                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl border-2 border-green-500 dark:border-green-600 p-8 shadow-lg">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={28} className="text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-2">
                        ✅ Valid Certificate
                      </h2>
                      <p className="text-base text-green-700 dark:text-green-400">
                        This is a genuine donation certificate issued by Lakhil Raj Welfare Foundation.
                      </p>
                    </div>
                  </div>

                  {/* Certificate Details */}
                  <div className="bg-white dark:bg-[#112F2B] rounded-lg p-6 space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-[#1E7A6E]/10 dark:bg-[#4FD1C5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 size={20} className="text-[#1E7A6E] dark:text-[#4FD1C5]" />
                        </div>
                        <div>
                          <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mb-1">Donor Name</p>
                          <p className="text-base font-semibold text-[#111827] dark:text-white">{searchResult.name}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-[#1E7A6E]/10 dark:bg-[#4FD1C5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IndianRupee size={20} className="text-[#1E7A6E] dark:text-[#4FD1C5]" />
                        </div>
                        <div>
                          <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mb-1">Amount</p>
                          <p className="text-base font-semibold text-[#111827] dark:text-white">
                            ₹ {searchResult.amount.toLocaleString('en-IN')}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-[#1E7A6E]/10 dark:bg-[#4FD1C5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Calendar size={20} className="text-[#1E7A6E] dark:text-[#4FD1C5]" />
                        </div>
                        <div>
                          <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mb-1">Donation Date</p>
                          <p className="text-base font-semibold text-[#111827] dark:text-white">{searchResult.date}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-[#1E7A6E]/10 dark:bg-[#4FD1C5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <CreditCard size={20} className="text-[#1E7A6E] dark:text-[#4FD1C5]" />
                        </div>
                        <div>
                          <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mb-1">Transaction ID</p>
                          <p className="text-base font-semibold text-[#111827] dark:text-white font-mono text-sm">
                            {searchResult.transactionId}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 md:col-span-2">
                        <div className="w-10 h-10 bg-[#1E7A6E]/10 dark:bg-[#4FD1C5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Mail size={20} className="text-[#1E7A6E] dark:text-[#4FD1C5]" />
                        </div>
                        <div>
                          <p className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mb-1">Email</p>
                          <p className="text-base font-semibold text-[#111827] dark:text-white">{searchResult.email}</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-[#E5E7EB] dark:border-[#1F4D47] pt-4 mt-4">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="font-semibold text-green-700 dark:text-green-400">Status:</span>
                        <span className="text-green-800 dark:text-green-300 uppercase tracking-wide">{searchResult.status}</span>
                      </div>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-blue-800 dark:text-blue-300">
                      <strong>Note:</strong> This certificate has been verified against our secure database. 
                      Your contribution is helping us create positive impact in education, health, skill development, and rural upliftment.
                    </p>
                  </div>
                </div>
              ) : (
                /* Invalid Certificate */
                <div className="bg-red-50 dark:bg-red-900/20 rounded-xl border-2 border-red-500 dark:border-red-600 p-8 shadow-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <XCircle size={28} className="text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-red-800 dark:text-red-300 mb-2">
                        ❌ Invalid Certificate
                      </h2>
                      <p className="text-base text-red-700 dark:text-red-400 mb-4">
                        No certificate found with ID: <strong className="font-mono">{certificateId}</strong>
                      </p>
                      <div className="space-y-2 text-sm text-red-700 dark:text-red-400">
                        <p>Possible reasons:</p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                          <li>Certificate ID was entered incorrectly</li>
                          <li>Certificate has not been issued yet</li>
                          <li>This is a fraudulent certificate</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <p className="text-sm text-yellow-800 dark:text-yellow-300">
                      <strong>Important:</strong> If you believe this is an error or if you have concerns about a certificate's authenticity, 
                      please contact us at <a href="mailto:tech.lakhilraj@gmail.com" className="underline font-semibold">tech.lakhilraj@gmail.com</a>
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* How to Verify Section */}
          {!hasSearched && (
            <div className="bg-[#F9FAFB] dark:bg-[#112F2B] rounded-xl p-8 border border-[#E5E7EB] dark:border-[#1F4D47]">
              <h2 className="text-xl font-bold text-[#111827] dark:text-white mb-4">
                How to Verify Your Certificate
              </h2>
              <div className="space-y-3 text-[#6B7280] dark:text-[#9CA3AF]">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#1E7A6E] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">1</div>
                  <p>Locate the Certificate ID on your donation certificate (Format: LRWF-YYYY-XXXXXX)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#1E7A6E] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">2</div>
                  <p>Enter the complete Certificate ID in the search box above</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#1E7A6E] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">3</div>
                  <p>Click "Verify Certificate" to check authenticity</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#1E7A6E] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">4</div>
                  <p>View your donation details if the certificate is valid</p>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>

      <Footer />

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
