import { motion } from 'framer-motion'
import {
  ArrowRight,
  Phone,
  Calculator,
  FileText,
  TrendingUp,
  Shield,
  PieChart,
  BarChart3,
  CheckCircle2,
} from 'lucide-react'

export default function Hero() {
  const handleNavClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const top = element.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-offwhite">
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-navy/[0.03] rounded-full -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/[0.05] rounded-full translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-28 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-navy/[0.07] border border-navy/10 px-4 py-2 rounded-full mb-6"
            >
              <Shield className="w-4 h-4 text-navy" />
              <span className="text-xs font-semibold text-navy tracking-wide uppercase">
                Elite • Reliable • Compliant
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-charcoal leading-[1.12] mb-6 tracking-tight">
              Smart Accounting.{' '}
              <span className="text-navy">Reliable Taxation.</span>{' '}
              <span className="relative inline-block">
                Complete Compliance.
                <span className="absolute -bottom-1.5 left-0 w-full h-1.5 bg-gold/40 rounded-full" />
              </span>
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-xl">
              Your trusted partner for accounting, taxation, GST compliance, and financial
              advisory services. We simplify financial responsibilities so you can focus on
              growing your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, '#services')}
                className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-lg shadow-navy/20 hover:shadow-xl hover:shadow-navy/30 hover:-translate-y-0.5"
              >
                Explore Our Services
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-navy/15 hover:border-navy/30 text-charcoal px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 text-navy" />
                Contact Us
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 sm:gap-10 pt-6 border-t border-gray-200">
              <div>
                <p className="text-2xl font-bold text-navy">100%</p>
                <p className="text-xs text-gray-400 font-medium mt-0.5">Compliance Focus</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div>
                <p className="text-2xl font-bold text-navy">Expert</p>
                <p className="text-xs text-gray-400 font-medium mt-0.5">Tax Professionals</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div>
                <p className="text-2xl font-bold text-navy">Online</p>
                <p className="text-xs text-gray-400 font-medium mt-0.5">Hassle-Free Support</p>
              </div>
            </div>
          </motion.div>

          {/* Right Visual - Financial Dashboard Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white rounded-3xl shadow-2xl shadow-navy/10 p-8 border border-gray-100">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Financial Overview</p>
                    <p className="text-2xl font-bold text-charcoal mt-1">Dashboard</p>
                  </div>
                  <div className="w-12 h-12 bg-navy/[0.08] rounded-2xl flex items-center justify-center">
                    <PieChart className="w-6 h-6 text-navy" />
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-navy/[0.04] rounded-2xl p-4">
                    <div className="w-8 h-8 bg-navy rounded-xl flex items-center justify-center mb-3">
                      <FileText className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-xs text-gray-400 font-medium">Tax Returns</p>
                    <p className="text-lg font-bold text-charcoal">Filed</p>
                  </div>
                  <div className="bg-green-50 rounded-2xl p-4">
                    <div className="w-8 h-8 bg-green-600 rounded-xl flex items-center justify-center mb-3">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-xs text-gray-400 font-medium">GST Status</p>
                    <p className="text-lg font-bold text-green-700">Compliant</p>
                  </div>
                  <div className="bg-gold/10 rounded-2xl p-4">
                    <div className="w-8 h-8 bg-gold rounded-xl flex items-center justify-center mb-3">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-xs text-gray-400 font-medium">Tax Savings</p>
                    <p className="text-lg font-bold text-charcoal">Optimized</p>
                  </div>
                </div>

                {/* Chart Bars */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-semibold text-charcoal">Compliance Progress</p>
                    <BarChart3 className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs text-gray-400 mb-1.5">
                        <span>Income Tax</span>
                        <span className="text-navy font-semibold">Complete</span>
                      </div>
                      <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 1.2, delay: 0.8 }}
                          className="h-full bg-navy rounded-full"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-gray-400 mb-1.5">
                        <span>GST Returns</span>
                        <span className="text-blue font-semibold">On Track</span>
                      </div>
                      <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '85%' }}
                          transition={{ duration: 1.2, delay: 1 }}
                          className="h-full bg-blue rounded-full"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-gray-400 mb-1.5">
                        <span>TDS Filing</span>
                        <span className="text-gold-dark font-semibold">In Progress</span>
                      </div>
                      <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '65%' }}
                          transition={{ duration: 1.2, delay: 1.2 }}
                          className="h-full bg-gold rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -left-6 top-1/3 bg-white rounded-2xl shadow-xl shadow-navy/10 p-4 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-charcoal">ITR Filed</p>
                    <p className="text-[11px] text-gray-400">Successfully</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.5 }}
                className="absolute -right-4 bottom-16 bg-white rounded-2xl shadow-xl shadow-navy/10 p-4 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-navy/10 rounded-xl flex items-center justify-center">
                    <Calculator className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-charcoal">Tax Optimized</p>
                    <p className="text-[11px] text-gray-400">Max Savings</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
