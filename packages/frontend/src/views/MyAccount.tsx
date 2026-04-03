'use client';

import { useState, useEffect } from 'react';
import { useThemeLanguage } from '../contexts/ThemeLanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { accountTranslations } from '../translations/accountTranslations';
import { StoreNavbar } from '../components/Store/StoreNavbar';
import { StoreFooter } from '../components/Store/StoreFooter';
import { User, Package, Heart, MapPin, Bell, CreditCard, LogOut, Shield } from 'lucide-react';

export default function MyAccount() {
  const { language } = useThemeLanguage();
  const { isAuthenticated, isLoading, user, logout } = useAuth();
  const t = (key: string) => accountTranslations[key]?.[language] || key;

  const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/v1';
  const [activeTab, setActiveTab] = useState('profile');
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [orders, setOrders] = useState<any[]>([]);
  const [wishlistItems, setWishlistItems] = useState<any[]>([]);
  const [addresses, setAddresses] = useState<any[]>([]);
  const [loadingProfile, setLoadingProfile] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        window.location.href = '/login';
      } else if (user?.isAdmin) {
        // Redirect admins to their dashboard
        window.location.href = '/admin';
      }
    }
  }, [isAuthenticated, isLoading, user]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  const menuItems = [
    { id: 'profile', label: t('account.profile'), icon: User },
    { id: 'orders', label: t('account.orders'), icon: Package },
    { id: 'wishlist', label: t('account.wishlist'), icon: Heart },
    { id: 'addresses', label: t('account.addresses'), icon: MapPin },
    { id: 'notifications', label: t('account.notifications'), icon: Bell },
    { id: 'payments', label: t('account.payments'), icon: CreditCard },
  ];

  useEffect(() => {
    if (isAuthenticated && !user?.isAdmin) {
      fetchProfile();
    }
  }, [isAuthenticated, user]);

  useEffect(() => {
    if (isAuthenticated && !user?.isAdmin) {
      if (activeTab === 'orders') fetchOrders();
      if (activeTab === 'wishlist') fetchWishlist();
      if (activeTab === 'addresses') fetchAddresses();
    }
  }, [activeTab, isAuthenticated, user]);

  const getToken = () => localStorage.getItem('accessToken');

  const fetchProfile = async () => {
    try {
      setLoadingProfile(true);
      const res = await fetch(`${API}/users/profile`, {
        headers: { Authorization: `Bearer ${getToken()}` },
        credentials: 'include',
      });
      if (res.ok) {
        const data = await res.json();
        const u = data.user || data;
        setUserData({ name: u.name || '', email: u.email || '', phone: u.phone || '' });
      }
    } catch (err) {
      console.error('Failed to fetch profile:', err);
    } finally {
      setLoadingProfile(false);
    }
  };

  const fetchOrders = async () => {
    try {
      const res = await fetch(`${API}/orders`, {
        headers: { Authorization: `Bearer ${getToken()}` },
        credentials: 'include',
      });
      if (res.ok) {
        const data = await res.json();
        setOrders(data.orders ?? []);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const fetchWishlist = async () => {
    try {
      const res = await fetch(`${API}/wishlist`, {
        headers: { Authorization: `Bearer ${getToken()}` },
        credentials: 'include',
      });
      if (res.ok) {
        const data = await res.json();
        setWishlistItems(data.items ?? data.wishlist ?? []);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const fetchAddresses = async () => {
    try {
      const res = await fetch(`${API}/users/addresses`, {
        headers: { Authorization: `Bearer ${getToken()}` },
        credentials: 'include',
      });
      if (res.ok) {
        const data = await res.json();
        setAddresses(data.addresses ?? []);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSave = async () => {
    try {
      const res = await fetch(`${API}/users/profile`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${getToken()}` },
        credentials: 'include',
        body: JSON.stringify({ name: userData.name, phone: userData.phone }),
      });
      if (!res.ok) throw new Error('Save failed');
      alert('Changes saved successfully!');
    } catch (err) {
      console.error(err);
      alert('Failed to save changes.');
    }
  };

  const handleLogout = async () => {
    if (confirm('Are you sure you want to logout?')) {
      await logout();
      window.location.href = '/login';
    }
  };

  return (
    <>
      <StoreNavbar cartCount={2} />

      <div className="min-h-screen bg-[#FAF9F7] dark:bg-[#0F0F0F] py-8 px-4">
        <div className="max-w-[1400px] mx-auto">
          {/* Mobile: Account Overview */}
          <div className="lg:hidden mb-6">
            <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E5E5] dark:border-[#3A3A3A]">
              <h1 className="text-[24px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-1 font-['Playfair_Display',serif]">
                {t('account.hello')}, {userData.name.split(' ')[0]} 👋
              </h1>
              <p className="text-[13px] text-[#6B6B6B] dark:text-[#9CA3AF] mb-4 font-['Inter',sans-serif]">
                {userData.email}
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setActiveTab('orders')}
                  className="flex-1 px-4 py-2 bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white rounded-lg text-[13px] font-semibold font-['Inter',sans-serif]"
                >
                  {t('account.viewOrders')}
                </button>
                <button
                  onClick={() => setActiveTab('profile')}
                  className="flex-1 px-4 py-2 bg-white dark:bg-[#0F0F0F] text-[#7A4A2E] dark:text-[#4F7C6A] border-2 border-[#7A4A2E] dark:border-[#4F7C6A] rounded-lg text-[13px] font-semibold font-['Inter',sans-serif]"
                >
                  {t('account.editProfile')}
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Desktop Header */}
              <div className="hidden lg:block bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E5E5] dark:border-[#3A3A3A] mb-4">
                <h2 className="text-[20px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-1 font-['Playfair_Display',serif]">
                  {t('account.hello')}, {userData.name.split(' ')[0]} 👋
                </h2>
                <p className="text-[13px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                  {userData.email}
                </p>
              </div>

              {/* Navigation */}
              <div className="bg-white dark:bg-[#1A1A1A] rounded-lg border border-[#E5E5E5] dark:border-[#3A3A3A]">
                <div className="p-3">
                  <h3 className="text-[12px] font-bold text-[#6B6B6B] dark:text-[#9CA3AF] uppercase mb-2 px-3 font-['Inter',sans-serif]">
                    {t('account.title')}
                  </h3>
                  <nav className="space-y-1">
                    {menuItems.map(item => (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-semibold transition-colors font-['Inter',sans-serif] ${
                          activeTab === item.id
                            ? 'bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white'
                            : 'text-[#1F1F1F] dark:text-[#FAF9F7] hover:bg-[#F0EDE9] dark:hover:bg-[#2A2A2A]'
                        }`}
                      >
                        <item.icon className="w-4 h-4" />
                        {item.label}
                      </button>
                    ))}
                    <div className="pt-3 mt-3 border-t border-[#E5E5E5] dark:border-[#3A3A3A]">
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-semibold text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors font-['Inter',sans-serif]"
                      >
                        <LogOut className="w-4 h-4" />
                        {t('account.logout')}
                      </button>
                    </div>
                  </nav>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3">
              {/* Profile */}
              {activeTab === 'profile' && (
                <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E5E5] dark:border-[#3A3A3A]">
                  <h2 className="text-[24px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-6 font-['Playfair_Display',serif]">
                    {t('account.profile')}
                  </h2>
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                        {t('account.fullName')}
                      </label>
                      <input
                        type="text"
                        value={userData.name}
                        onChange={e => setUserData({ ...userData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[14px] font-['Inter',sans-serif] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                      />
                    </div>
                    <div>
                      <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                        {t('account.email')}
                      </label>
                      <input
                        type="email"
                        value={userData.email}
                        onChange={e => setUserData({ ...userData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[14px] font-['Inter',sans-serif] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                      />
                    </div>
                    <div>
                      <label className="text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] mb-2 block font-['Inter',sans-serif]">
                        {t('account.phone')}
                      </label>
                      <input
                        type="tel"
                        value={userData.phone}
                        onChange={e => setUserData({ ...userData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] border border-[#E5E5E5] dark:border-[#3A3A3A] rounded-lg text-[14px] font-['Inter',sans-serif] focus:outline-none focus:border-[#7A4A2E] dark:focus:border-[#4F7C6A]"
                      />
                    </div>
                  </div>
                  <button
                    onClick={handleSave}
                    className="px-6 py-3 bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white rounded-lg font-semibold text-[14px] hover:shadow-lg transition-all font-['Inter',sans-serif]"
                  >
                    {t('account.saveChanges')}
                  </button>

                  {/* Security */}
                  <div className="mt-8 pt-8 border-t border-[#E5E5E5] dark:border-[#3A3A3A]">
                    <h3 className="text-[18px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-4 font-['Playfair_Display',serif]">
                      {t('account.security')}
                    </h3>
                    <div className="space-y-3">
                      <button className="flex items-center gap-3 text-[14px] text-[#7A4A2E] dark:text-[#4F7C6A] hover:underline font-['Inter',sans-serif]">
                        <Shield className="w-4 h-4" />
                        {t('account.changePassword')}
                      </button>
                      <button className="flex items-center gap-3 text-[14px] text-[#7A4A2E] dark:text-[#4F7C6A] hover:underline font-['Inter',sans-serif]">
                        <Shield className="w-4 h-4" />
                        {t('account.manageLogin')}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Orders */}
              {activeTab === 'orders' && (
                <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E5E5] dark:border-[#3A3A3A]">
                  <h2 className="text-[24px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-6 font-['Playfair_Display',serif]">
                    {t('account.orders')}
                  </h2>
                  {orders.length === 0 ? (
                    <div className="text-center py-12">
                      <Package className="w-16 h-16 text-[#6B6B6B] dark:text-[#9CA3AF] mx-auto mb-4" />
                      <p className="text-[14px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                        No orders yet
                      </p>
                      <a
                        href="/shop"
                        className="inline-block mt-4 px-6 py-3 bg-[#7A4A2E] dark:bg-[#4F7C6A] text-white rounded-lg font-semibold text-[14px] font-['Inter',sans-serif]"
                      >
                        Start Shopping
                      </a>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {orders.map((order: any) => (
                        <div
                          key={order.id}
                          className="flex items-center justify-between p-4 bg-[#FAF9F7] dark:bg-[#0F0F0F] rounded-lg border border-[#E5E5E5] dark:border-[#3A3A3A]"
                        >
                          <div>
                            <p className="text-[14px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] font-['Inter',sans-serif]">
                              #{order.orderNumber}
                            </p>
                            <p className="text-[12px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                              {new Date(order.createdAt).toLocaleDateString()} &bull;{' '}
                              {order.items?.length || 0} items
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-[14px] font-bold text-[#7A4A2E] dark:text-[#4F7C6A] font-['Inter',sans-serif]">
                              ₹{order.total}
                            </p>
                            <span
                              className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                                order.status === 'DELIVERED'
                                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                  : order.status === 'CANCELLED'
                                    ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                                    : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                              }`}
                            >
                              {order.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Wishlist */}
              {activeTab === 'wishlist' && (
                <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E5E5] dark:border-[#3A3A3A]">
                  <h2 className="text-[24px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-6 font-['Playfair_Display',serif]">
                    {t('account.wishlist')}
                  </h2>
                  {wishlistItems.length === 0 ? (
                    <div className="text-center py-12">
                      <Heart className="w-16 h-16 text-[#6B6B6B] dark:text-[#9CA3AF] mx-auto mb-4" />
                      <p className="text-[14px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                        Your wishlist is empty
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {wishlistItems.map((item: any) => (
                        <div
                          key={item.id}
                          className="flex gap-3 p-3 bg-[#FAF9F7] dark:bg-[#0F0F0F] rounded-lg border border-[#E5E5E5] dark:border-[#3A3A3A]"
                        >
                          <div className="flex-1">
                            <p className="text-[14px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] font-['Inter',sans-serif]">
                              {item.product?.name || item.name}
                            </p>
                            <p className="text-[14px] font-bold text-[#7A4A2E] dark:text-[#4F7C6A] font-['Inter',sans-serif]">
                              ₹{item.product?.price || item.price}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Addresses */}
              {activeTab === 'addresses' && (
                <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E5E5] dark:border-[#3A3A3A]">
                  <h2 className="text-[24px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-6 font-['Playfair_Display',serif]">
                    {t('account.addresses')}
                  </h2>
                  {addresses.length === 0 ? (
                    <div className="text-center py-12">
                      <MapPin className="w-16 h-16 text-[#6B6B6B] dark:text-[#9CA3AF] mx-auto mb-4" />
                      <p className="text-[14px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                        No saved addresses
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {addresses.map((addr: any) => (
                        <div
                          key={addr.id}
                          className="p-4 bg-[#FAF9F7] dark:bg-[#0F0F0F] rounded-lg border border-[#E5E5E5] dark:border-[#3A3A3A]"
                        >
                          {addr.isDefault && (
                            <span className="text-[11px] font-bold text-[#7A4A2E] dark:text-[#4F7C6A] uppercase">
                              Default
                            </span>
                          )}
                          <p className="text-[14px] font-semibold text-[#1F1F1F] dark:text-[#FAF9F7] font-['Inter',sans-serif]">
                            {addr.label || 'Address'}
                          </p>
                          <p className="text-[13px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                            {addr.street}, {addr.city}, {addr.state} {addr.zip}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Notifications & Payments placeholder */}
              {['notifications', 'payments'].includes(activeTab) && (
                <div className="bg-white dark:bg-[#1A1A1A] rounded-lg p-6 border border-[#E5E5E5] dark:border-[#3A3A3A]">
                  <h2 className="text-[24px] font-bold text-[#1F1F1F] dark:text-[#FAF9F7] mb-6 font-['Playfair_Display',serif] capitalize">
                    {menuItems.find(item => item.id === activeTab)?.label}
                  </h2>
                  <div className="text-center py-12">
                    <p className="text-[14px] text-[#6B6B6B] dark:text-[#9CA3AF] font-['Inter',sans-serif]">
                      Coming soon...
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <StoreFooter />
    </>
  );
}
