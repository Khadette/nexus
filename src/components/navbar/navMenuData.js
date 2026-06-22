/**
 * Mega-menu data tree for the top navbar's Home / Pages / Elements items.
 * Any item with a `children` array renders a chevron and opens a flyout
 * submenu on hover — this recurses to whatever depth the data needs.
 */

export const homeMenu = [
  { label: 'Dashboard' },
  { label: 'Alternate Dashboard' },
  {
    label: 'Menu Style',
    children: [
      { label: 'Horizontal Dashboard' },
      { label: 'Dual Horizontal Dashboard' },
      { label: 'Dual Compact' },
      { label: 'Boxed Horizontal' },
      { label: 'Boxed Fancy' }
    ]
  },
  { label: 'E-Commerce' },
  { label: 'Social App' },
  { label: 'Blog' },
  { label: 'Appointment' },
  { label: 'File Manager' },
  { label: 'Chat' },
  { label: 'Mail' }
]

export const pagesMenu = [
  {
    label: 'Special Pages',
    children: [
      { label: 'Billing' },
      { label: 'Calendar' },
      { label: 'Kanban' },
      { label: 'Pricing' },
      { label: 'Timeline' }
    ]
  },
  {
    label: 'Auth Skins',
    children: [
      {
        label: 'Default',
        children: [
          { label: 'Sign In' },
          { label: 'Sign Up' },
          { label: 'Email Verified' },
          { label: 'Reset Password' },
          { label: 'Lock Screen' }
        ]
      },
      {
        label: 'Animated',
        children: [
          { label: 'Sign In' },
          { label: 'Sign Up' },
          { label: 'Email' },
          { label: 'Lock Screen' },
          { label: 'Reset Password' },
          { label: 'Two Factor' },
          { label: 'Account Deactivate' }
        ]
      },
      { label: 'Popup', children: [{ label: 'Sign In' }, { label: 'Sign Up' }] },
      { label: 'Simple', children: [{ label: 'Sign In' }, { label: 'Sign Up' }] }
    ]
  },
  {
    label: 'User',
    children: [{ label: 'User Profile' }, { label: 'User Add' }, { label: 'User List' }]
  },
  {
    label: 'Utilities',
    children: [{ label: 'Maintenance' }, { label: '404' }, { label: '505' }]
  },
  {
    label: 'Plugins',
    children: [
      { label: 'Button Hover' },
      { label: 'Choice JS' },
      { label: 'FSLightbox' },
      { label: 'Select2' },
      { label: 'Sweetalert' },
      { label: 'Flatpickr' },
      { label: 'Apexcharts' },
      { label: 'Gallery Hover' },
      { label: 'Image Cropper' },
      { label: 'Loader' },
      { label: 'Rating' },
      { label: 'Quill' },
      { label: 'Uppy' }
    ]
  }
]

export const elementsMenu = [
  { label: 'Components' },
  { label: 'UI Color' },
  {
    label: 'Widgets',
    children: [{ label: 'Widget Basic' }, { label: 'Widget Chart' }, { label: 'Widget Card' }]
  },
  {
    label: 'Map',
    children: [{ label: 'Google' }, { label: 'Vector' }]
  },
  {
    label: 'Form',
    children: [{ label: 'Element' }, { label: 'Wizard' }, { label: 'Validation' }]
  },
  {
    label: 'Table',
    children: [
      { label: 'Bootstrap Table' },
      { label: 'Data Table' },
      { label: 'Bordered Table' },
      { label: 'Fancy Table' },
      { label: 'Fixed Table' }
    ]
  },
  {
    label: 'Icons',
    children: [{ label: 'Solid' }, { label: 'Outlined' }, { label: 'Dual Tone' }]
  }
]
