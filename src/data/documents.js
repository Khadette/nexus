function daysAgo(days) {
  return new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString()
}

export const documents = [
  { id: 1, name: 'Invoice-00231.pdf', type: 'PDF', size: '212 KB', createdAt: '2021-02-01T09:00:00Z', lastOpened: daysAgo(1) },
  { id: 2, name: 'Project-Brief.docx', type: 'DOCX', size: '88 KB', createdAt: '2021-02-02T09:00:00Z', lastOpened: daysAgo(2) },
  { id: 3, name: 'Budget-2021.xlsx', type: 'XLSX', size: '154 KB', createdAt: '2021-02-03T09:00:00Z', lastOpened: daysAgo(3) },
  { id: 4, name: 'NDA-Template.pdf', type: 'PDF', size: '96 KB', createdAt: '2021-02-04T09:00:00Z', lastOpened: daysAgo(5) },
  { id: 5, name: 'Sprint-Notes.docx', type: 'DOCX', size: '64 KB', createdAt: '2021-02-05T09:00:00Z', lastOpened: daysAgo(1) },
  { id: 6, name: 'Roadmap-Q1.pdf', type: 'PDF', size: '301 KB', createdAt: '2021-02-06T09:00:00Z', lastOpened: daysAgo(4) },
  { id: 7, name: 'Vendor-Contract.pdf', type: 'PDF', size: '178 KB', createdAt: '2021-02-08T09:00:00Z', lastOpened: daysAgo(6) },
  { id: 8, name: 'Team-Directory.xlsx', type: 'XLSX', size: '42 KB', createdAt: '2021-02-09T09:00:00Z', lastOpened: daysAgo(9) }
]
