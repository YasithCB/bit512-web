import React, { useState } from "react";
import { Send, Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { contactInfo } from "../MockData";
import '../assets/css/contact-section.css'

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
        budget: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your message! We'll get back to you within 24 hours.");
        console.log("Form submitted:", formData);
        setFormData({
            name: "",
            email: "",
            company: "",
            service: "",
            message: "",
            budget: ""
        });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-5 bg-dark">
            <div className="container">
                <div className="dark-content-container">

                    {/* Header */}
                    <div className="text-center mb-5">
                        <h2 className="display-5 text-white mb-3">Get In Touch</h2>
                        <p className="text-secondary mx-auto" style={{ maxWidth: '768px' }}>
                            Ready to transform your business with innovative web solutions?
                            Let's discuss your project and create something amazing together.
                        </p>
                    </div>

                    <div className="row g-4">
                        {/* Contact Form */}
                        <div className="col-lg-6">
                            <div className="bg-transparent border border-success p-4 rounded h-100">
                                <h3 className="h4 text-white mb-3">Send us a message</h3>
                                <form onSubmit={handleSubmit} className="row g-3">
                                    <div className="col-md-6">
                                        <label className="form-label text-white">Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="form-control bg-dark text-white border-secondary"
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label text-white">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="form-control bg-dark text-white border-secondary"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label text-white">Company</label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="form-control bg-dark text-white border-secondary"
                                            placeholder="Your company name"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label text-white">Service Needed</label>
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                            className="form-select bg-dark text-white border-secondary"
                                        >
                                            <option value="">Select a service</option>
                                            <option value="web-development">Web Development</option>
                                            <option value="mobile-development">Mobile Development</option>
                                            <option value="ai-solutions">AI Solutions</option>
                                            <option value="enterprise-software">Enterprise Software</option>
                                            <option value="consultation">Consultation</option>
                                        </select>
                                    </div>
                                    <div className="col-md-12">
                                        <label className="form-label text-white">Budget Range</label>
                                        <select
                                            name="budget"
                                            value={formData.budget}
                                            onChange={handleChange}
                                            className="form-select bg-dark text-white border-secondary"
                                        >
                                            <option value="">Select budget range</option>
                                            <option value="1k-">Below $1,000</option>
                                            <option value="1k-5k">$1,000 - $5,000</option>
                                            <option value="5k-10k">$5,000 - $10,000</option>
                                            <option value="10k-25k">$10,000 - $25,000</option>
                                            <option value="25k-50k">$25,000 - $50,000</option>
                                            <option value="50k+">$50,000+</option>
                                            <option value="discuss">Let's discuss</option>
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label text-white">Project Details *</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="form-control bg-dark text-white border-secondary"
                                            placeholder="Tell us about your project, goals, and timeline..."
                                        />
                                    </div>
                                    <div className="col-12 d-grid">
                                        <button type="submit" className="btn btn-success">
                                            <Send size={20} className="me-2" /> Send Message <ArrowRight size={20} className="ms-2" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="col-lg-6">
                            <div className="bg-transparent border border-success p-4 rounded h-100">
                                <h3 className="h4 text-white mb-3">Get in touch</h3>
                                <p className="text-secondary mb-4">
                                    We're here to help bring your ideas to life. Choose the best way to reach us.
                                </p>

                                {/* Contact Items */}
                                <div className="row g-3">
                                    {[
                                        { icon: Mail, title: "Email", info: contactInfo.email, note: "Response within 24 hours" },
                                        { icon: Phone, title: "Phone", info: contactInfo.phone, note: "Mon-Fri 9AM-6PM" },
                                        { icon: MapPin, title: "Location", info: contactInfo.address, note: "Remote & On-site available" },
                                        { icon: Clock, title: "Business Hours", info: contactInfo.hours, note: "Emergency support available" }
                                    ].map((item, index) => {
                                        const IconComponent = item.icon;
                                        return (
                                            <div key={index} className="col-12 d-flex align-items-start gap-3">
                                                <div className="d-flex align-items-center justify-content-center rounded bg-success text-dark" style={{ width: '48px', height: '48px' }}>
                                                    <IconComponent size={24} />
                                                </div>
                                                <div>
                                                    <h5 className="text-white mb-1">{item.title}</h5>
                                                    <p className="text-secondary mb-0">{item.info}</p>
                                                    <small className="text-muted">{item.note}</small>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>

                                {/* Quick Actions */}
                                <div className="bg-transparent border border-dark p-3 mt-3 rounded">
                                    <h5 className="text-white mb-3">Quick Actions</h5>
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-outline-light">Schedule Free Consultation</button>
                                        <button className="btn btn-success">Get Project Quote</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
