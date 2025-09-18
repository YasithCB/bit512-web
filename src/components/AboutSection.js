import React from "react";
import { Users, Award, Clock, Target } from "lucide-react";
import { companyInfo, teamMembers } from "../MockData";

const AboutSection = () => {
    return (
        <section id="about" className="py-5 bg-dark">
            <div className="dark-full-container">
                <div className="dark-content-container">

                    {/* Main About Content */}
                    <div className="row align-items-center g-4 mb-5">
                        <div className="col-lg-6">
                            <h2 className="display-5 text-white mb-3">About BIT512</h2>
                            <p className="text-secondary mb-4">{companyInfo.description}</p>

                            <div className="d-grid gap-3">
                                <div className="d-flex align-items-start gap-3">
                                    <div className="d-flex align-items-center justify-content-center rounded" style={{ width: '48px', height: '48px', backgroundColor: 'rgba(82,196,131,0.1)', border: '1px solid rgba(82,196,131,0.3)' }}>
                                        <Target className="text-success" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="h5 text-white mb-1">Our Mission</h4>
                                        <p className="text-secondary small">
                                            Empowering startups and small businesses with cutting-edge technology solutions
                                            that drive growth and establish strong digital presence.
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex align-items-start gap-3">
                                    <div className="d-flex align-items-center justify-content-center rounded" style={{ width: '48px', height: '48px', backgroundColor: 'rgba(82,196,131,0.1)', border: '1px solid rgba(82,196,131,0.3)' }}>
                                        <Award className="text-success" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="h5 text-white mb-1">Our Expertise</h4>
                                        <p className="text-secondary small">
                                            Specialized in React and Python development, we combine technical excellence
                                            with creative design to deliver exceptional results.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="bg-secondary border border-dark p-4 p-md-5">
                                <h3 className="h4 text-white mb-3">Why Choose BIT512?</h3>

                                <div className="d-grid gap-3">
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="d-flex align-items-center justify-content-center rounded" style={{ width: '32px', height: '32px', backgroundColor: 'rgba(82,196,131,0.2)', border: '1px solid rgba(82,196,131,0.4)' }}>
                                            <Clock className="text-success" size={16} />
                                        </div>
                                        <div>
                                            <div className="text-white fw-medium">Fast Delivery</div>
                                            <div className="text-secondary small">Quick turnaround without compromising quality</div>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center gap-3">
                                        <div className="d-flex align-items-center justify-content-center rounded" style={{ width: '32px', height: '32px', backgroundColor: 'rgba(82,196,131,0.2)', border: '1px solid rgba(82,196,131,0.4)' }}>
                                            <Users className="text-success" size={16} />
                                        </div>
                                        <div>
                                            <div className="text-white fw-medium">Expert Team</div>
                                            <div className="text-secondary small">Experienced developers and designers</div>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center gap-3">
                                        <div className="d-flex align-items-center justify-content-center rounded" style={{ width: '32px', height: '32px', backgroundColor: 'rgba(82,196,131,0.2)', border: '1px solid rgba(82,196,131,0.4)' }}>
                                            <Award className="text-success" size={16} />
                                        </div>
                                        <div>
                                            <div className="text-white fw-medium">Quality Focused</div>
                                            <div className="text-secondary small">Rigorous testing and optimization</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Technology Stack */}
                                <div className="mt-3 pt-3 border-top border-dark">
                                    <h4 className="text-white fw-medium mb-2">Tech Stack</h4>
                                    <div className="d-flex flex-wrap gap-2">
                                        {companyInfo.technologies.map((tech, index) => (
                                            <span key={index} className="px-2 py-1 bg-dark text-success border border-dark small">
                        {tech}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Team Section */}
                    <div className="text-center mb-4">
                        <h3 className="display-6 text-white mb-2">Meet Our Team</h3>
                        <p className="text-secondary mx-auto" style={{ maxWidth: '640px' }}>
                            Our diverse team of experts brings together years of experience in web development,
                            design, and emerging technologies.
                        </p>
                    </div>

                    <div className="row g-4">
                        {teamMembers.map((member) => (
                            <div key={member.id} className="col-md-4 text-center">
                                <div className="d-flex align-items-center justify-content-center rounded-circle bg-gradient border border-dark mx-auto mb-2" style={{ width: '96px', height: '96px' }}>
                                    <Users className="text-success" size={32} />
                                </div>
                                <h4 className="h5 text-white mb-1">{member.name}</h4>
                                <p className="text-success fw-medium mb-1">{member.role}</p>
                                <p className="small text-secondary mb-1">{member.expertise}</p>
                                <p className="small text-muted">{member.experience}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
