'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '../../contexts/AuthContext';
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Users,
  CreditCard,
  Archive,
  Tag,
  Bell,
  BarChart3,
  Settings,
  UserCog,
  LogOut,
  Menu,
} from 'lucide-react';

const menuItems = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard, href: '/admin' },
  { id: 'orders', label: 'Orders', icon: Package, href: '/admin/orders' },
  { id: 'products', label: 'Products', icon: ShoppingBag, href: '/admin/products' },
  { id: 'customers', label: 'Customers', icon: Users, href: null },
  { id: 'payments', label: 'Payments', icon: CreditCard, href: null },
  { id: 'inventory', label: 'Inventory', icon: Archive, href: '/admin/inventory' },
  { id: 'promotions', label: 'Promotions', icon: Tag, href: null },
  { id: 'notifications', label: 'Notifications', icon: Bell, href: null },
  { id: 'reports', label: 'Reports', icon: BarChart3, href: '/admin/reports' },
];

const pageTitles: Record<string, string> = {
  '/admin': 'Overview',
  '/admin/orders': 'Orders',
  '/admin/products': 'Products',
  '/admin/inventory': 'Inventory',
  '/admin/reports': 'Reports',
  '/admin/settings': 'Settings',
};

export default function AdminSharedLayout({ children }: { children: React.ReactNode }) {
  const { user, logout, isAuthenticated, isLoading } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Prevent unauthenticated flashes for all admin routes within this layout
    if (pathname !== '/admin/login' && !isLoading && (!isAuthenticated || !user?.isAdmin)) {
      router.push('/login');
    }
  }, [isLoading, isAuthenticated, user, pathname, router]);

    // Login page gets no shell
  if (pathname === '/admin/login') return <>{children}</>;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#0B1F1D] flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#7A4A2E]"></div>
      </div>
    );
  }

  // Prevent flash content rendering while redirecting
  if (!isAuthenticated || !user?.isAdmin) {
    return null;
  }

  const activeId =
    menuItems.find(item => item.href === pathname)?.id ??
    menuItems.find(item => item.href && pathname.startsWith(item.href + '/'))?.id ??
    'overview';

  const pageTitle = pageTitles[pathname] ?? 'Admin';

    // Login page gets no shell
  if (pathname === '/admin/login') return <>{children}</>;

  const handleLogout = async () => {
    if (confirm('Are you sure you want to logout?')) {
      await logout();
      window.location.href = '/login';
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#0F0F0F]">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 bg-white dark:bg-[#1A1A1A] border-b border-[#E5E7EB] dark:border-[#374151]">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              <Menu className="w-5 h-5 text-[#1F1F1F] dark:text-[#FFFFFF]" />
            </button>
            <h1 className="text-[18px] font-bold text-[#1F1F1F] dark:text-[#FFFFFF]">
              {pageTitle}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            {/* Notifications */}
            <button className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
              <Bell className="w-5 h-5 text-[#1F1F1F] dark:text-[#FFFFFF]" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Admin Profile */}
            <div className="flex items-center gap-2 px-3 py-2 bg-[#F9FAFB] dark:bg-[#0F0F0F] border border-[#E5E7EB] dark:border-[#374151] rounded-lg">
              <div className="w-7 h-7 bg-[#1E7A6E] rounded-full flex items-center justify-center">
                <span className="text-[12px] font-bold text-white">A</span>
              </div>
              <span className="hidden md:block text-[13px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF]">
                {user?.name}
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white dark:bg-[#1A1A1A] border-r border-[#E5E7EB] dark:border-[#374151] transition-transform lg:translate-x-0 ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex flex-col h-[calc(100vh-57px)] overflow-y-auto">
            {/* Menu Items */}
            <nav className="flex-1 p-3 space-y-1">
              {menuItems.map(item =>
                item.href ? (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setIsSidebarOpen(false)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-semibold transition-colors ${
                      activeId === item.id
                        ? 'bg-[#1E7A6E] text-white'
                        : 'text-[#1F1F1F] dark:text-[#FFFFFF] hover:bg-[#F9FAFB] dark:hover:bg-[#2A2A2A]'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </a>
                ) : (
                  <button
                    key={item.id}
                    disabled
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-semibold text-[#9CA3AF] dark:text-[#6B7280] cursor-not-allowed"
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </button>
                )
              )}
            </nav>

            {/* Bottom Actions */}
            <div className="p-3 border-t border-[#E5E7EB] dark:border-[#374151] space-y-1">
              <a
                href="/admin/settings"
                onClick={() => setIsSidebarOpen(false)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-semibold transition-colors ${
                  pathname === '/admin/settings'
                    ? 'bg-[#1E7A6E] text-white'
                    : 'text-[#1F1F1F] dark:text-[#FFFFFF] hover:bg-[#F9FAFB] dark:hover:bg-[#2A2A2A]'
                }`}
              >
                <Settings className="w-4 h-4" />
                Settings
              </a>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-semibold text-[#1F1F1F] dark:text-[#FFFFFF] hover:bg-[#F9FAFB] dark:hover:bg-[#2A2A2A] transition-colors">
                <UserCog className="w-4 h-4" />
                Admin Users
              </button>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-semibold text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </aside>

        {/* Mobile Overlay */}
        {isSidebarOpen && (
          <div
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          />
        )}

        {/* Main Content */}
        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </div>
  );
}
