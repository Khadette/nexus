/**
 * Mock image dataset.
 *
 * This is the single source of truth for all image records in the app.
 * Both the "Recently viewed" rail and the "All Images" grid are DERIVED
 * from this list inside the reducer/selectors — no data is duplicated.
 *
 * Thumbnails use Picsum's deterministic seed URLs so every reload renders
 * the same picture for the same image id.
 */

const SEEDS = [
  'mountain', 'forest', 'ocean', 'desert', 'city', 'bridge', 'flowers',
  'lake', 'snow', 'sunset', 'canyon', 'harbor', 'meadow', 'island',
  'waterfall', 'skyline', 'garden', 'dunes', 'glacier', 'valley',
  'reef', 'orchard'
]

function thumbnailFor(seed, id) {
  return `https://picsum.photos/seed/${seed}-${id}/640/480`
}

export const images = [
  { id: 1, name: 'Gallery-1234725783.jpg', createdAt: '2020-12-13T09:15:00Z', lastOpened: minutesAgo(1) },
  { id: 2, name: 'Gallery-25783.jpg', createdAt: '2020-12-13T09:20:00Z', lastOpened: daysAgo(2) },
  { id: 3, name: 'Gallery-49895383.jpg', createdAt: '2020-12-13T09:25:00Z', lastOpened: monthsAgo(1) },
  { id: 4, name: 'Gallery-4509853.jpg', createdAt: '2020-12-13T09:30:00Z', lastOpened: daysAgo(2) },
  { id: 5, name: 'Gallery-280397557.jpg', createdAt: '2020-12-13T09:35:00Z', lastOpened: minutesAgo(5) },
  { id: 6, name: 'Gallery-76935783.jpg', createdAt: '2020-12-13T09:40:00Z', lastOpened: daysAgo(2) },
  { id: 7, name: 'Gallery-4725783.jpg', createdAt: '2020-12-13T09:45:00Z', lastOpened: monthsAgo(1) },
  { id: 8, name: 'Gallery-9981273.jpg', createdAt: '2020-12-14T10:00:00Z', lastOpened: hoursAgo(3) },
  { id: 9, name: 'Gallery-1029384756.jpg', createdAt: '2020-12-14T10:05:00Z', lastOpened: daysAgo(5) },
  { id: 10, name: 'Gallery-5566778899.jpg', createdAt: '2020-12-14T10:10:00Z', lastOpened: hoursAgo(8) },
  { id: 11, name: 'Gallery-3344556677.jpg', createdAt: '2020-12-15T11:00:00Z', lastOpened: daysAgo(1) },
  { id: 12, name: 'Gallery-2233445566.jpg', createdAt: '2020-12-15T11:10:00Z', lastOpened: monthsAgo(2) },
  { id: 13, name: 'Gallery-7788990011.jpg', createdAt: '2020-12-16T12:00:00Z', lastOpened: minutesAgo(20) },
  { id: 14, name: 'Gallery-6655443322.jpg', createdAt: '2020-12-16T12:15:00Z', lastOpened: daysAgo(3) },
  { id: 15, name: 'Gallery-8899001122.jpg', createdAt: '2020-12-17T13:00:00Z', lastOpened: hoursAgo(1) },
  { id: 16, name: 'Gallery-1122334455.jpg', createdAt: '2020-12-17T13:20:00Z', lastOpened: daysAgo(6) },
  { id: 17, name: 'Gallery-9900112233.jpg', createdAt: '2020-12-18T14:00:00Z', lastOpened: monthsAgo(3) },
  { id: 18, name: 'Gallery-4433221100.jpg', createdAt: '2020-12-18T14:30:00Z', lastOpened: hoursAgo(6) },
  { id: 19, name: 'Gallery-5544332211.jpg', createdAt: '2020-12-19T15:00:00Z', lastOpened: daysAgo(4) },
  { id: 20, name: 'Gallery-6677889900.jpg', createdAt: '2020-12-19T15:30:00Z', lastOpened: minutesAgo(45) },
  { id: 21, name: 'Gallery-7766554433.jpg', createdAt: '2020-12-20T16:00:00Z', lastOpened: daysAgo(7) },
  { id: 22, name: 'Gallery-8877665544.jpg', createdAt: '2020-12-20T16:15:00Z', lastOpened: monthsAgo(1) }
].map((image, index) => ({
  ...image,
  thumbnail: thumbnailFor(SEEDS[index % SEEDS.length], image.id)
}))

function minutesAgo(minutes) {
  return new Date(Date.now() - minutes * 60 * 1000).toISOString()
}

function hoursAgo(hours) {
  return new Date(Date.now() - hours * 60 * 60 * 1000).toISOString()
}

function daysAgo(days) {
  return new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString()
}

function monthsAgo(months) {
  return new Date(Date.now() - months * 30 * 24 * 60 * 60 * 1000).toISOString()
}
