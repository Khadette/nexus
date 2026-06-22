function daysAgo(days) {
  return new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString()
}

export const trashedItems = [
  { id: 1, name: 'Old-Logo-Draft.png', type: 'Image', size: '1.2 MB', deletedAt: daysAgo(2) },
  { id: 2, name: 'Meeting-Recording.mp4', type: 'Video', size: '84.3 MB', deletedAt: daysAgo(4) },
  { id: 3, name: 'Draft-Proposal.docx', type: 'Document', size: '56 KB', deletedAt: daysAgo(1) },
  { id: 4, name: 'Unused-Banner.jpg', type: 'Image', size: '980 KB', deletedAt: daysAgo(6) },
  { id: 5, name: 'Test-Export.xlsx', type: 'Document', size: '120 KB', deletedAt: daysAgo(9) }
]
