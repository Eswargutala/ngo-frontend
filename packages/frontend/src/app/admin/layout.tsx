import AdminSharedLayout from '../../components/Admin/AdminSharedLayout';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <AdminSharedLayout>{children}</AdminSharedLayout>;
}
