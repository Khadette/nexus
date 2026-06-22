/**
 * Footer rendered at the bottom of the dashboard layout's main column.
 * Static links — view-only, no routing required for legal pages.
 */
export default function Footer() {
  return (
    <footer className="mt-8 border-t border-border bg-transparent px-4 py-4 sm:px-6">
      <div className="flex flex-col items-center justify-between gap-3 text-sm text-textSecondary sm:flex-row">
        <p>
          © {new Date().getFullYear()} File Manager. Built with{' '}
          <span aria-label="love" role="img">
            ♥
          </span>{' '}
          as a Hope UI–inspired clone.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-primary">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-primary">
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  )
}
