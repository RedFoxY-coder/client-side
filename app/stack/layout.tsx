import Header from '@/components/header/Header'
import Sidebar from '@/components/sidebar/Sidebar'
export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="absolute h-screen bg-gray-200/60 w-7/8 left-1/8">
            <Header />
            {children}
        </div>
    )
}
