export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100%' }}>
      {children}
    </div>
  );
}
