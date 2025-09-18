import React from "react";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { contactInfo } from "../MockData";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="text-white" style={{ backgroundColor: "#1B412B" }}>
            <div className="light-full-container">
                <div className="light-content-container py-5">

                    {/* Main Footer Content */}
                    <div className="row gy-4">
                        {/* Company Info */}
                        <div className="col-lg-6">
                            <h3 className="fw-bold text-success mb-3">BIT512</h3>
                            <p className="text-secondary mb-3" style={{ maxWidth: "400px" }}>
                                Building digital experiences that help brands grow.
                            </p>

                            <div className="d-flex flex-column gap-2">
                                <div className="d-flex align-items-center gap-2">
                                    <Mail className='text-success' size={18} />
                                    <span className="text-secondary">{contactInfo.email}</span>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <Phone className='text-success' size={18} />
                                    <span className="text-secondary">{contactInfo.phone}</span>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <MapPin className='text-success' size={18} />
                                    <span className="text-secondary">{contactInfo.address}</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="col-lg-3">
                            <h5 className="text-white mb-3">Quick Links</h5>
                            <div className="d-flex flex-column gap-2">
                                {["home", "services", "about","projects", "testimonials", "contact"].map((section) => (
                                    <button
                                        key={section}
                                        onClick={() => scrollToSection(section)}
                                        className="btn btn-link text-secondary text-start p-0"
                                        onMouseEnter={(e) => (e.currentTarget.style.color = "#52C483")}
                                        onMouseLeave={(e) => (e.currentTarget.style.color = "#9CA3AF")}
                                    >
                                        {section.charAt(0).toUpperCase() + section.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Services */}
                        <div className="col-lg-3">
                            <h5 className="text-white mb-3">Services</h5>
                            <div className="d-flex flex-column gap-2 text-secondary">
                                <div>Web Development</div>
                                <div>Mobile Development</div>
                                <div>AI Solutions</div>
                                <div>Enterprise Software</div>
                                <div>Consultation</div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-top border-secondary mt-4 pt-3 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
                        <div className="text-secondary small">
                            © 2024 BIT512. All rights reserved. | Innovative Web Solutions for Growing Businesses
                        </div>

                        <div className="d-flex align-items-center gap-3">
                            <div className="text-secondary small">
                                Built with React
                            </div>
                            <button
                                onClick={scrollToTop}
                                className="btn btn-success d-flex align-items-center justify-content-center"
                                style={{ width: "40px", height: "40px" }}
                            >
                                <ArrowUp className="text-white" size={18} />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
