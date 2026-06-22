function daysAgo(days) {
  return new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString()
}

export const videos = [
  { id: 1, name: 'Product-Launch-Recap.mp4', duration: '04:12', createdAt: '2021-01-04T10:00:00Z', lastOpened: daysAgo(1), thumbnail: 'https://picsum.photos/seed/video-1/640/480' },
  { id: 2, name: 'Team-Standup-Jan.mp4', duration: '12:45', createdAt: '2021-01-06T10:00:00Z', lastOpened: daysAgo(3), thumbnail: 'https://picsum.photos/seed/video-2/640/480' },
  { id: 3, name: 'Design-Walkthrough.mov', duration: '08:30', createdAt: '2021-01-10T10:00:00Z', lastOpened: daysAgo(5), thumbnail: 'https://picsum.photos/seed/video-3/640/480' },
  { id: 4, name: 'Customer-Interview-02.mp4', duration: '21:02', createdAt: '2021-01-12T10:00:00Z', lastOpened: daysAgo(2), thumbnail: 'https://picsum.photos/seed/video-4/640/480' },
  { id: 5, name: 'Onboarding-Tutorial.mp4', duration: '06:18', createdAt: '2021-01-14T10:00:00Z', lastOpened: daysAgo(7), thumbnail: 'https://picsum.photos/seed/video-5/640/480' },
  { id: 6, name: 'Quarterly-Review.mp4', duration: '34:50', createdAt: '2021-01-18T10:00:00Z', lastOpened: daysAgo(4), thumbnail: 'https://picsum.photos/seed/video-6/640/480' },
  { id: 7, name: 'Brand-Promo-Final.mov', duration: '01:30', createdAt: '2021-01-20T10:00:00Z', lastOpened: daysAgo(6), thumbnail: 'https://picsum.photos/seed/video-7/640/480' },
  { id: 8, name: 'Webinar-Highlights.mp4', duration: '15:40', createdAt: '2021-01-22T10:00:00Z', lastOpened: daysAgo(8), thumbnail: 'https://picsum.photos/seed/video-8/640/480' }
]
