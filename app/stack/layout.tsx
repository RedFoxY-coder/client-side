import Header from '@/components/header/Header'
import Sidebar from '@/components/sidebar/Sidebar'
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <div className="absolute left-1/8 h-screen w-7/8 bg-gray-200/60">
        <Header />
        {children}
      </div>
    </div>
  )
}
