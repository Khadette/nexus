import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/common/Footer'
import ImagePreviewModal from '../components/images/ImagePreviewModal'
import FloatingActionButtons from '../components/common/FloatingActionButtons'

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-page">
      <Sidebar />

      <div className="flex min-h-screen flex-col lg:pl-[260px]">
        <Navbar />
        <main className="flex-1 px-4 py-6 sm:px-6">
          <Outlet />
        </main>
        <Footer />
      </div>

      <ImagePreviewModal />
      <FloatingActionButtons />
    </div>
  )
}