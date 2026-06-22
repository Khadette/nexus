import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/common/Footer'
import ImagePreviewModal from '../components/images/ImagePreviewModal'

/**
 * Shell layout: fixed sidebar + scrollable main column (navbar, page
 * content, footer). Every page renders through <Outlet /> here.
 */
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
    </div>
  )
}
