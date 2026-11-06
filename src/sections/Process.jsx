import { motion } from 'framer-motion'
import { MessageSquare, Users, FileCheck, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Contact Us',
    description: 'Share your requirements and financial service needs with our team.',
  },
  {
    icon: Users,
    number: '02',
    title: 'Consultation',
    description: 'We understand your financial needs and recommend the right solutions.',
  },
  {
    icon: FileCheck,
    number: '03',
    title: 'Documentation',
    description: 'Submit the required documents securely for processing and compliance.',
  },
  {
    icon: CheckCircle,
    number: '04',
    title: 'Service Completion',
    description: 'Receive professional, accurate, and timely financial assistance.',
  },
]

export default function Process() {
  return (
    <section className="section-padding bg-navy relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.03] rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/[0.05] rounded-full translate-y-1/2 -translate-x-1/3" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-sm font-semibold text-gold tracking-wider uppercase mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            Our Working Process
          </h2>
          <p className="text-gray-300 leading-relaxed">
            A simple, straightforward process to get the professional financial services you need.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-40px)] h-px border-t-2 border-dashed border-white/15" />
              )}

              <div className="bg-white/[0.07] backdrop-blur-sm border border-white/10 rounded-2xl p-7 text-center hover:bg-white/[0.12] transition-all duration-300">
                <div className="relative w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <step.icon className="w-7 h-7 text-gold" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-gold text-navy text-xs font-bold rounded-lg flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
