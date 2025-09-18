import React from "react";
import { Globe, Smartphone, Brain, Building, ArrowRight } from "lucide-react";
import { services } from "../MockData";

const iconMap = {
    Globe: Globe,
    Smartphone: Smartphone,
    Brain: Brain,
    Building: Building
};

const ServicesSection = () => {
    return (
        <section id="services" className="py-5 bg-light">
            <div className="light-full-container">
                <div className="light-content-container">

                    {/* Header */}
                    <div className="text-center mb-5 pt-5">
                        <h2 className="fw-bold mb-3" style={{ fontSize: '2.5rem', color: '#1B412B' }}>Our Services</h2>
                        <p className="fs-5 text-secondary mx-auto" style={{ maxWidth: '768px' }}>
                            We deliver comprehensive digital solutions tailored for startups and small businesses,
                            combining cutting-edge technology with creative innovation.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="row g-4">
                        {services.map((service) => {
                            const IconComponent = iconMap[service.icon];
                            return (
                                <div key={service.id} className="col-md-6">
                                    <div
                                        className="group bg-white border rounded-xl p-4 p-md-5 shadow-sm"
                                        style={{ borderColor: '#E5E7EB', transition: 'all 0.3s' }}
                                        onMouseEnter={(e) => e.currentTarget.style.borderColor = '#52C483'}
                                        onMouseLeave={(e) => e.currentTarget.style.borderColor = '#E5E7EB'}
                                    >
                                        <div className="d-flex gap-3">
                                            <div className="d-flex align-items-center justify-content-center rounded-xl p-3" style={{ backgroundColor: '#F0FDF4', border: '1px solid #52C483', height: 'min-content' }}>
                                                <IconComponent style={{ color: '#52C483' }} size={32} />
                                            </div>

                                            <div className="flex-grow-1">
                                                <h3 className="fw-bold mb-3" style={{ color: '#1B412B', fontSize: '1.5rem' }}>{service.title}</h3>
                                                <p className="text-secondary mb-3">{service.description}</p>

                                                <div className="mb-3">
                                                    {service.features.map((feature, index) => (
                                                        <div key={index} className="d-flex align-items-center gap-2 mb-1">
                                                            <div className="rounded-circle" style={{ width: '6px', height: '6px', backgroundColor: '#52C483' }}></div>
                                                            <span className="text-secondary small">{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>

                                                <button
                                                    className="btn btn-link p-0 d-flex align-items-center gap-2"
                                                    style={{ color: '#52C483', transition: 'color 0.3s' }}
                                                    onMouseEnter={(e) => e.currentTarget.style.color = '#45B371'}
                                                    onMouseLeave={(e) => e.currentTarget.style.color = '#52C483'}
                                                >
                                                    <span>Learn More</span>
                                                    <ArrowRight size={16} className="transition-transform" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* CTA Section */}
                    <div className="text-center mt-5">
                        <div className="rounded-3 p-4 p-md-5 text-white" style={{ backgroundColor: '#52C483' }}>
                            <h3 className="fw-bold mb-3" style={{ fontSize: '1.75rem' }}>Ready to Start Your Project?</h3>
                            <p className="fs-5 mb-4 mx-auto" style={{ maxWidth: '640px', opacity: 0.9 }}>
                                Let's discuss how we can help transform your business with innovative web solutions,
                                mobile apps, and AI-powered features.
                            </p>
                            <button className="btn btn-light fw-bold d-inline-flex align-items-center gap-2 px-4 py-2" style={{ color: '#52C483' }}>
                                Get Free Consultation
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
