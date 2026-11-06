import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  const handleClick = (e) => {
    e.preventDefault()
    const el = document.querySelector('#contact')
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section className="section-padding bg-offwhite">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="relative bg-navy rounded-3xl px-8 py-14 sm:px-14 sm:py-18 text-center overflow-hidden"
        >
          {/* Decorative */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/[0.04] rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-gold/[0.08] rounded-full translate-x-1/3 translate-y-1/3" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
              Let&apos;s Make Your Financial Journey{' '}
              <span className="text-gold">Easier</span>.
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8 text-lg">
              Get professional accounting and taxation assistance with TAXVIRTUS.
            </p>
            <a
              href="#contact"
              onClick={handleClick}
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy px-8 py-4 rounded-xl text-sm font-bold transition-all duration-200 shadow-lg shadow-gold/20 hover:shadow-xl hover:-translate-y-0.5"
            >
              Contact Our Team
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
