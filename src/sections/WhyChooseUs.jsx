import { motion } from 'framer-motion'
import { Users, Clock, IndianRupee, Headphones } from 'lucide-react'

const advantages = [
  {
    icon: Users,
    title: 'Trusted Professionals',
    description:
      'Reliable support for your financial needs with experienced accounting and taxation professionals.',
    accent: 'bg-navy',
  },
  {
    icon: Clock,
    title: 'Timely & Accurate Services',
    description:
      'Accuracy and on-time compliance for every filing, return, and financial obligation.',
    accent: 'bg-blue',
  },
  {
    icon: IndianRupee,
    title: 'Affordable Pricing',
    description:
      'Cost-effective professional solutions without compromising on quality or service standards.',
    accent: 'bg-gold',
  },
  {
    icon: Headphones,
    title: 'Online & Hassle-Free Support',
    description:
      'Convenient online assistance and clear communication throughout the entire process.',
    accent: 'bg-green-600',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-sm font-semibold text-gold tracking-wider uppercase mb-3">
            Why Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4 leading-tight">
            Why Businesses Trust{' '}
            <span className="text-navy">TAXVIRTUS</span>
          </h2>
          <p className="text-gray-500 leading-relaxed">
            We deliver financial services built on trust, accuracy, and a commitment to your success.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-offwhite rounded-2xl p-7 border border-gray-100 hover:border-navy/15 hover:shadow-lg hover:shadow-navy/[0.06] transition-all duration-300 hover:-translate-y-1 text-center"
            >
              {/* Top accent bar */}
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 ${item.accent} rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className={`w-16 h-16 ${item.accent}/10 group-hover:${item.accent} rounded-2xl flex items-center justify-center mx-auto mb-5 transition-colors duration-300`}>
                <item.icon className={`w-7 h-7 text-navy group-hover:text-navy transition-colors duration-300`} />
              </div>

              <h3 className="text-base font-semibold text-charcoal mb-2.5">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
