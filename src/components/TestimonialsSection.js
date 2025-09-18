import React from "react";
import {Star, Quote} from "lucide-react";
import { testimonials } from "../MockData";
import "../assets/css/testimonials-section.css";

const TestimonialsSection = () => {
    return (
        <section id="testimonials" className="testimonials-section">
            <div className="testimonials-container">
                {/* Header */}
                <div className="testimonials-header">
                    <h2 className="title">What Our Clients Say</h2>
                    <p className="subtitle">
                        Don't just take our word for it. Here's what startups and small
                        businesses say about working with BIT512.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="testimonials-grid">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-card">
                            {/* Quote Icon */}
                            <div className="quote-icon">
                                <Quote size={16} />
                            </div>

                            {/* Rating */}
                            <div className="rating">
                                {[...Array(testimonial.rating)].map((_, index) => (
                                    <Star key={index} size={16} className='text-secondary' fill="yellow" />
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className="testimonial-text">"{testimonial.text}"</p>

                            {/* Client Info */}
                            <div className="client-info">
                                <div className="client-avatar">
                                    <span>{testimonial.name.charAt(0)}</span>
                                </div>
                                <div className="client-details">
                                    <div className="client-name">{testimonial.name}</div>
                                    <div className="client-company">{testimonial.company}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="stats-section">
                    <div className="stat-box">
                        <div className="stat-number">10+</div>
                        <div className="stat-label">Happy Clients</div>
                    </div>
                    <div className="stat-box">
                        <div className="stat-number">10+</div>
                        <div className="stat-label">Projects Delivered</div>
                    </div>
                    <div className="stat-box">
                        <div className="stat-number">98%</div>
                        <div className="stat-label">Client Retention</div>
                    </div>
                    <div className="stat-box">
                        <div className="stat-number">5★</div>
                        <div className="stat-label">Average Rating</div>
                    </div>
                </div>

                {/* CTA */}
                <div className="cta-section">
                    <h3 className="cta-title">Ready to Join Our Success Stories?</h3>
                    <p className="cta-text">
                        Let's create something amazing together. Start your project today and
                        become our next success story.
                    </p>
                    <button className="cta-button btn-primary bg-green-dark">Start Your Project</button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
