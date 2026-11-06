import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'
import logo from '../assets/logo.jpg'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-offwhite flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <img
            src={logo}
            alt="TAXVIRTUS Logo"
            className="w-12 h-12 object-contain rounded-xl shadow-md"
          />
          <span className="text-xl font-bold text-navy tracking-tight">TAXVIRTUS</span>
        </div>

        {/* 404 */}
        <h1 className="text-8xl font-extrabold text-navy/15 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-charcoal mb-3">Page Not Found</h2>
        <p className="text-gray-500 mb-8 leading-relaxed">
          The page you are looking for does not exist or has been moved.
          Let us help you get back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <Home className="w-4 h-4" />
            Go to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 hover:border-navy/20 text-charcoal px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  )
}
