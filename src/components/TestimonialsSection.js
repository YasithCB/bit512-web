import React from "react";
import { Star, Quote } from "lucide-react";
import { testimonials } from "../MockData";

const TestimonialsSection = () => {
    return (
        <section id="testimonials" className="py-5">
            <div className="dark-full-container">
                <div className="dark-content-container">

                    {/* Header */}
                    <div className="text-center mb-5">
                        <h2 className="display-5 text-white mb-3">What Our Clients Say</h2>
                        <p className="text-secondary mx-auto" style={{ maxWidth: '768px' }}>
                            Don't just take our word for it. Here's what startups and small businesses
                            say about working with BIT512.
                        </p>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="row g-4">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="col-md-4">
                                <div className="bg-secondary border border-dark p-4 position-relative rounded hover-shadow">
                                    {/* Quote Icon */}
                                    <div className="position-absolute" style={{ top: '-16px', left: '32px' }}>
                                        <div className="d-flex align-items-center justify-content-center bg-success rounded" style={{ width: '32px', height: '32px' }}>
                                            <Quote className="text-black" size={16} />
                                        </div>
                                    </div>

                                    {/* Rating */}
                                    <div className="d-flex align-items-center gap-1 mb-3 mt-3">
                                        {[...Array(testimonial.rating)].map((_, index) => (
                                            <Star key={index} className="text-success" size={16} />
                                        ))}
                                    </div>

                                    {/* Testimonial Text */}
                                    <p className="text-secondary fst-italic mb-3">
                                        "{testimonial.text}"
                                    </p>

                                    {/* Client Info */}
                                    <div className="pt-3 border-top border-dark">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="d-flex align-items-center justify-content-center rounded-circle bg-gradient border border-dark" style={{ width: '48px', height: '48px' }}>
                                                <span className="text-success fw-bold fs-5">{testimonial.name.charAt(0)}</span>
                                            </div>
                                            <div>
                                                <div className="text-white fw-medium small">{testimonial.name}</div>
                                                <div className="text-secondary small">{testimonial.company}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Stats Section */}
                    <div className="mt-5 bg-secondary border border-dark p-4 p-md-5 rounded">
                        <div className="row text-center g-4">
                            <div className="col-md-3">
                                <div className="display-5 text-success mb-1">50+</div>
                                <div className="small text-secondary">Happy Clients</div>
                            </div>
                            <div className="col-md-3">
                                <div className="display-5 text-success mb-1">100+</div>
                                <div className="small text-secondary">Projects Delivered</div>
                            </div>
                            <div className="col-md-3">
                                <div className="display-5 text-success mb-1">98%</div>
                                <div className="small text-secondary">Client Retention</div>
                            </div>
                            <div className="col-md-3">
                                <div className="display-5 text-success mb-1">5★</div>
                                <div className="small text-secondary">Average Rating</div>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-5">
                        <h3 className="h2 text-white mb-3">Ready to Join Our Success Stories?</h3>
                        <p className="text-secondary mx-auto mb-4" style={{ maxWidth: '640px' }}>
                            Let's create something amazing together. Start your project today and become our next success story.
                        </p>
                        <button className="btn btn-success btn-lg">
                            Start Your Project
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
