import { Link } from 'react-router-dom'
import edtechathonLogo from '../assets/logo.svg'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-3 px-4 py-4 text-sm text-slate-600 sm:flex-row sm:justify-center sm:gap-6">
        <div className="flex items-center gap-6">
          <Link
            to="/about"
            className="hover:text-amber-700 hover:underline underline-offset-4"
          >
            About
          </Link>
          <Link
            to="/privacy"
            className="hover:text-amber-700 hover:underline underline-offset-4"
          >
            Privacy
          </Link>
        </div>
        <a
          href="https://edtechathon.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-amber-700"
        >
          <img src={edtechathonLogo} alt="" className="h-6 w-6" />
          Built by the EdTech-a-thon
        </a>
      </div>
    </footer>
  )
}
