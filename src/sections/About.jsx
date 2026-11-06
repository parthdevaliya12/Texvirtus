import { motion } from 'framer-motion'
import { Award, Target, ShieldCheck } from 'lucide-react'

const highlights = [
  {
    icon: Award,
    title: 'Professional Expertise',
    description:
      'Our team brings deep domain knowledge in accounting standards, tax laws, and financial compliance frameworks.',
  },
  {
    icon: Target,
    title: 'Accuracy & Compliance',
    description:
      'We prioritize precision in every filing and ensure complete adherence to current regulatory requirements.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable Financial Support',
    description:
      'Dependable guidance and consistent service delivery that you can count on throughout the year.',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-navy rounded-3xl p-10 sm:p-12 relative overflow-hidden">
              {/* Decorative shapes */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold/10 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-8">
                  <span className="w-2 h-2 bg-gold rounded-full" />
                  <span className="text-xs font-semibold text-gold tracking-wider uppercase">
                    Since Establishment
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
                  Simplifying Your{' '}
                  <span className="text-gold">Financial</span>{' '}
                  Responsibilities
                </h3>

                <p className="text-gray-300 leading-relaxed mb-8">
                  We are committed to providing accurate, transparent, and timely financial
                  services that allow our clients to operate confidently.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm">
                    <p className="text-2xl font-bold text-gold mb-1">ITR</p>
                    <p className="text-xs text-gray-300 font-medium">Filing & Returns</p>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm">
                    <p className="text-2xl font-bold text-gold mb-1">GST</p>
                    <p className="text-xs text-gray-300 font-medium">Registration & Returns</p>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm">
                    <p className="text-2xl font-bold text-gold mb-1">TDS</p>
                    <p className="text-xs text-gray-300 font-medium">Compliance & Filing</p>
                  </div>
                  <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm">
                    <p className="text-2xl font-bold text-gold mb-1">PAN</p>
                    <p className="text-xs text-gray-300 font-medium">Applications & Updates</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-semibold text-gold tracking-wider uppercase mb-3">
                About Us
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-5 leading-tight">
                About <span className="text-navy">TAXVIRTUS</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-10">
                TAXVIRTUS provides professional accounting, taxation, and compliance services
                for individuals, startups, and businesses. We focus on accuracy, transparency,
                and timely financial solutions to simplify your financial responsibilities.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="space-y-5"
            >
              {highlights.map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="flex gap-5 p-5 rounded-2xl hover:bg-navy/[0.03] transition-colors duration-300 group"
                >
                  <div className="w-14 h-14 shrink-0 bg-navy/[0.07] group-hover:bg-navy rounded-2xl flex items-center justify-center transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-navy group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-charcoal mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
