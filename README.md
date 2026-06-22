# File Manager — Images (Hope UI–inspired clone)

A from-scratch React recreation of the **Hope UI Pro → File Manager → Image Folder**
page, built with Vite, React Router, Context API + useReducer, react-icons, and
Tailwind CSS. No Hope UI source files, CSS, JS bundles, or image assets are used —
this is an independent re-implementation matching its layout and design tokens.

## Stack

- React 18 + Vite
- React Router v6
- Tailwind CSS v3
- react-icons (Feather icon set)
- Context API + useReducer for state

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (defaults to `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── main.jsx                  Entry point
├── App.jsx                   Wires AppProvider + router
├── routes/Router.jsx          Route table
├── layouts/DashboardLayout.jsx  Sidebar + navbar + footer shell
├── pages/
│   ├── ImagesPage.jsx          Main cloned page
│   ├── VideosPage.jsx
│   ├── DocumentsPage.jsx
│   ├── AllFilesPage.jsx
│   └── TrashPage.jsx
├── components/
│   ├── sidebar/                Sidebar, nav links, nav config
│   ├── navbar/                 Navbar, search, cart/notification/profile dropdowns
│   ├── images/                 ImageCard, RecentlyViewed, ImageGrid, preview modal
│   └── common/                 Button, Footer, EmptyState
├── context/
│   ├── AppContext.jsx           Provider + selectors (filteredImages, recentlyViewed)
│   ├── AppReducer.js             Action types + reducer
│   └── initialState.js
├── data/                       Mock datasets (images, videos, documents, cart, notifications, trash)
└── utils/                      relativeTime, formatCreatedDate, useClickOutside
```

## State management

All page state lives in one Context + `useReducer` store (`src/context`):

```js
{
  images: [],
  searchQuery: '',
  selectedImage: null,
  sidebarOpen: true,
  theme: 'light'
}
```

`filteredImages` (search results) and `recentlyViewed` (the horizontal rail) are
**memoized selectors derived from the same `images` array** — there is no second
copy of the data kept anywhere.

## Scope notes

Per the project brief, this is intentionally **view-only**: there are no API calls,
no image uploads, and no edit/delete/drag-and-drop functionality. The "Add Image"
button, cart items, and notifications are visual-only and use local mock data.
