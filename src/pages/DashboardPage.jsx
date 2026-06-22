import FoldersGrid from '../components/dashboard/FoldersGrid'
import StorageDetailsCard from '../components/dashboard/StorageDetailsCard'
import ActivityChartCard from '../components/dashboard/ActivityChartCard'
import UploadingOnDriveCard from '../components/dashboard/UploadingOnDriveCard'
import RecentlyAddedFilesCard from '../components/dashboard/RecentlyAddedFilesCard'
import CloudStorageCard from '../components/dashboard/CloudStorageCard'
import UpgradeStorageCard from '../components/dashboard/UpgradeStorageCard'

/**
 * Dashboard page — the file-manager home view. Laid out as a wide
 * left column (folders, activity) plus a narrower right rail
 * (storage gauge, uploads), then a three-up row at the bottom.
 */
export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <FoldersGrid />
        </div>
        <StorageDetailsCard />
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <ActivityChartCard />
        </div>
        <UploadingOnDriveCard />
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-4">
        <div className="xl:col-span-2">
          <RecentlyAddedFilesCard />
        </div>
        <CloudStorageCard />
        <UpgradeStorageCard />
      </div>
    </div>
  )
}
