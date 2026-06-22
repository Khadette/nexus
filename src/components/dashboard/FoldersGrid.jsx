import { folders } from '../../data/folders'
import FolderCard from './FolderCard'

export default function FoldersGrid() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-bold text-textPrimary">Your Folders</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {folders.map((folder) => (
          <FolderCard key={folder.id} folder={folder} />
        ))}
      </div>
    </section>
  )
}
