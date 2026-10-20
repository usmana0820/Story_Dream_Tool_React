import { useState } from 'react'
import toast from 'react-hot-toast'
import {
  FaYoutube, FaSnapchatGhost, FaFacebook, FaInstagram,
} from 'react-icons/fa'

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: false }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nextErrors = {}
    if (!form.name || form.name.length < 2) nextErrors.name = true
    if (!form.email || !validateEmail(form.email)) nextErrors.email = true
    if (!form.subject) nextErrors.subject = true
    if (!form.message || form.message.length < 10) nextErrors.message = true

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      return
    }

    toast.success('Thank you for your message! We will get back to you soon.')
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section className="contact-section neon-animate" id="contact">
      <div className="section-bg-orb orb-1" />
      <div className="section-bg-orb orb-2" />
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-badge contact-badge">Support & Inquiries</span>
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">
            Have questions about AI Cartoon Story Studio? We&apos;re here to help with support, partnerships, and platform inquiries.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-6">
            <div className="card p-4 contact-form-card">
              <h4 className="mb-4 contact-card-title">Send us a Message</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label" htmlFor="contactName">Full Name</label>
                  <input
                    type="text"
                    className={`form-control${errors.name ? ' is-invalid' : ''}`}
                    id="contactName"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="contactEmail">Email Address</label>
                  <input
                    type="email"
                    className={`form-control${errors.email ? ' is-invalid' : ''}`}
                    id="contactEmail"
                    name="email"
                    placeholder="Your email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="contactSubject">Subject</label>
                  <input
                    type="text"
                    className={`form-control${errors.subject ? ' is-invalid' : ''}`}
                    id="contactSubject"
                    name="subject"
                    placeholder="Message subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="contactMessage">Message</label>
                  <textarea
                    className={`form-control${errors.message ? ' is-invalid' : ''}`}
                    id="contactMessage"
                    name="message"
                    rows={5}
                    placeholder="Your message"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Send Message</button>
              </form>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card p-4 contact-form-card h-100">
              <h4 className="mb-4 contact-card-title">Get in Touch</h4>
              <div className="mb-4">
                <h6 className="contact-label">Email</h6>
                <p><a href="mailto:support@suzudreamtoon.com">support@suzudreamtoon.com</a></p>
              </div>
              <div className="mb-4">
                <h6 className="contact-label">Phone</h6>
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="mb-4">
                <h6 className="contact-label">Address</h6>
                <p>123 Creative Street<br />Innovation City, IC 12345<br />Country</p>
              </div>
              <div className="mb-4">
                <h6 className="contact-label">Business Hours</h6>
                <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM<br />Sunday: Closed</p>
              </div>
              <div>
                <h6 className="contact-label">Follow Us</h6>
                <div className="social-links">
                  <a href="https://www.youtube.com/@wigglyland.worlds" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <FaYoutube />
                  </a>
                  <a href="https://www.tiktok.com/@wigglyland.world" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="social-tiktok">
                    <span>Tk</span>
                  </a>
                  <a href="https://www.snapchat.com/add/wigglyland" target="_blank" rel="noopener noreferrer" aria-label="Snapchat">
                    <FaSnapchatGhost />
                  </a>
                  <a href="https://www.facebook.com/share/1WYbpFJFJB/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FaFacebook />
                  </a>
                  <a href="https://www.instagram.com/wigglyland.official" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
