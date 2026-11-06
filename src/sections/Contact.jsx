import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle, Clock, MapPin } from 'lucide-react'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
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
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4 leading-tight">
            Contact <span className="text-navy">TAXVIRTUS</span>
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Have a question or need professional financial assistance? Reach out to us and
            our team will get back to you promptly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Phone */}
            <a
              href="tel:+918849159528"
              className="flex items-start gap-4 p-5 bg-offwhite rounded-2xl border border-gray-100 hover:border-navy/15 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-12 h-12 shrink-0 bg-navy/[0.08] group-hover:bg-navy rounded-xl flex items-center justify-center transition-colors duration-300">
                <Phone className="w-5 h-5 text-navy group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-sm font-semibold text-charcoal mb-0.5">Phone</p>
                <p className="text-sm text-gray-500">+91 88491 59528</p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:taxvirtus07@gmail.com"
              className="flex items-start gap-4 p-5 bg-offwhite rounded-2xl border border-gray-100 hover:border-navy/15 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-12 h-12 shrink-0 bg-navy/[0.08] group-hover:bg-navy rounded-xl flex items-center justify-center transition-colors duration-300">
                <Mail className="w-5 h-5 text-navy group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-sm font-semibold text-charcoal mb-0.5">Email</p>
                <p className="text-sm text-gray-500">taxvirtus07@gmail.com</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918849159528"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-5 bg-offwhite rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-12 h-12 shrink-0 bg-green-100 group-hover:bg-green-600 rounded-xl flex items-center justify-center transition-colors duration-300">
                <MessageCircle className="w-5 h-5 text-green-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <p className="text-sm font-semibold text-charcoal mb-0.5">WhatsApp</p>
                <p className="text-sm text-gray-500">Chat with us on WhatsApp</p>
              </div>
            </a>

            {/* Hours */}
            <div className="flex items-start gap-4 p-5 bg-offwhite rounded-2xl border border-gray-100">
              <div className="w-12 h-12 shrink-0 bg-navy/[0.08] rounded-xl flex items-center justify-center">
                <Clock className="w-5 h-5 text-navy" />
              </div>
              <div>
                <p className="text-sm font-semibold text-charcoal mb-0.5">Working Hours</p>
                <p className="text-sm text-gray-500">Mon – Sat: 10:00 AM – 7:00 PM</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="bg-offwhite rounded-2xl p-6 sm:p-8 border border-gray-100">
              <h3 className="text-lg font-semibold text-charcoal mb-1.5">
                Send us a message
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Fill in the form below and we will get back to you as soon as possible.
              </p>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
