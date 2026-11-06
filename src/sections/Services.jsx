import { motion } from 'framer-motion'
import {
  BookOpen,
  FileText,
  Scale,
  Receipt,
  Landmark,
  Globe,
  CreditCard,
  Lightbulb,
  ShoppingCart,
  Building2,
  FileSignature,
} from 'lucide-react'
import ServiceCard from '../components/ServiceCard'

const services = [
  {
    icon: BookOpen,
    title: 'Accounting & Bookkeeping',
    description:
      'Comprehensive bookkeeping and accounting services to maintain accurate financial records and streamline your business finances.',
  },
  {
    icon: FileText,
    title: 'Income Tax Registration & ITR',
    description:
      'Complete assistance with income tax registration, return preparation, and timely ITR filing for individuals and businesses.',
  },
  {
    icon: Scale,
    title: 'Tax Compliance & Consultancy',
    description:
      'Expert guidance on tax regulations, compliance requirements, and strategic consultancy to keep your business on track.',
  },
  {
    icon: Receipt,
    title: 'GST Registration & Returns',
    description:
      'End-to-end GST registration, return filing, and compliance management for seamless goods and services tax operations.',
  },
  {
    icon: Landmark,
    title: 'TDS and TCS Compliance & Filing',
    description:
      'Accurate TDS/TCS computation, deduction, and timely filing to ensure full compliance with tax deduction requirements.',
  },
  {
    icon: Globe,
    title: 'Importer-Exporter Code (IEC)',
    description:
      'Quick and hassle-free IEC certificate registration for businesses engaged in import and export activities.',
  },
  {
    icon: CreditCard,
    title: 'PAN/TAN Application & Updates',
    description:
      'Assistance with new PAN and TAN applications, corrections, and updates for individuals and organizations.',
  },
  {
    icon: Lightbulb,
    title: 'Tax Planning & Advisory',
    description:
      'Strategic tax planning and advisory services to optimize your tax liability and maximize legitimate savings.',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Account Management',
    description:
      'Professional setup and management of e-commerce seller accounts with compliance and operational support.',
  },
  {
    icon: Building2,
    title: 'Udyam Registration Certificate',
    description:
      'Simplified Udyam registration process for MSMEs to access government benefits and schemes for small businesses.',
  },
  {
    icon: FileSignature,
    title: 'Rent Agreement / Concern Letter',
    description:
      'Professional drafting and preparation of rent agreements, concern letters, and related legal documentation.',
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-offwhite">
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
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4 leading-tight">
            Our <span className="text-navy">Services</span>
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Comprehensive accounting, taxation, and compliance solutions tailored to meet
            the diverse financial needs of individuals, startups, and businesses.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
