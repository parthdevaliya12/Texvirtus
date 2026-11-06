import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function ServiceCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 hover:border-navy/15 shadow-sm hover:shadow-xl hover:shadow-navy/[0.07] transition-all duration-300 hover:-translate-y-1 flex flex-col"
    >
      <div className="w-13 h-13 bg-navy/[0.07] group-hover:bg-navy rounded-2xl flex items-center justify-center mb-5 transition-colors duration-300">
        <Icon className="w-6 h-6 text-navy group-hover:text-white transition-colors duration-300" />
      </div>

      <h3 className="text-base font-semibold text-charcoal mb-2.5 leading-snug">
        {title}
      </h3>

      <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">
        {description}
      </p>

      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault()
          const el = document.querySelector('#contact')
          if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 80
            window.scrollTo({ top, behavior: 'smooth' })
          }
        }}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-blue group-hover:gap-2.5 transition-all duration-200"
      >
        Enquire Now
        <ArrowRight className="w-4 h-4" />
      </a>
    </motion.div>
  )
}
