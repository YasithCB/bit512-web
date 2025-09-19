import React from "react";
import { Users, Award, Clock, Target } from "lucide-react";
import { companyInfo, teamMembers } from "../MockData";
import '../assets/css/about-section.css'

const AboutSection = () => {
    return (
        <section id="about" className="py-5 bg-dark">
            <div className="container">

                {/* Main About Content */}
                <div className="row align-items-center g-4 mb-5">
                    <div className="col-lg-6">
                        <h2 className="display-5 text-white mb-3">About <span className='fw-bold'>BIT512</span></h2>
                        <p className="text-secondary mb-4">{companyInfo.description}</p>

                        <div className="d-grid gap-3">
                            <div className="d-flex align-items-start gap-3">
                                <div className="d-flex align-items-center justify-content-center rounded p-3" style={{
                                    backgroundColor: 'rgba(82,196,131,0.1)',
                                    border: '1px solid rgba(82,196,131,0.3)'
                                }}>
                                    <Target className="text-success" size={24}/>
                                </div>
                                <div>
                                    <h4 className="h5 text-white mb-1">Our Mission</h4>
                                    <p className="text-secondary">
                                        Empowering startups and small businesses with cutting-edge technology solutions
                                        that drive growth and establish strong digital presence.
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex align-items-start gap-3">
                                <div className="d-flex align-items-center justify-content-center rounded p-3" style={{
                                    backgroundColor: 'rgba(82,196,131,0.1)',
                                    border: '1px solid rgba(82,196,131,0.3)'
                                }}>
                                    <Award className="text-success" size={24}/>
                                </div>
                                <div>
                                    <h4 className="h5 text-white mb-1">Our Expertise</h4>
                                    <p className="text-secondary">
                                        Specialized in React and Python development, we combine technical excellence
                                        with creative design to deliver exceptional results.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="why-choose-bit512 p-4 p-md-5 rounded-3">
                            <h3 className="h4 text-white mb-4">Why Choose BIT512?</h3>

                            <div className="features">
                                <div className="feature-item d-flex align-items-center mb-3">
                                    <div className="feature-icon d-flex align-items-center justify-content-center me-3">
                                        <Clock className="text-white" size={16}/>
                                    </div>
                                    <div>
                                        <div className="text-white fw-semibold">Fast Delivery</div>
                                        <div className="text-white-50 small">Quick turnaround without compromising
                                            quality
                                        </div>
                                    </div>
                                </div>

                                <div className="feature-item d-flex align-items-center mb-3">
                                    <div className="feature-icon d-flex align-items-center justify-content-center me-3">
                                        <Users className="text-white" size={16}/>
                                    </div>
                                    <div>
                                        <div className="text-white fw-semibold">Expert Team</div>
                                        <div className="text-white-50 small">Experienced developers and designers</div>
                                    </div>
                                </div>

                                <div className="feature-item d-flex align-items-center mb-3">
                                    <div className="feature-icon d-flex align-items-center justify-content-center me-3">
                                        <Award className="text-white" size={16}/>
                                    </div>
                                    <div>
                                        <div className="text-white fw-semibold">Quality Focused</div>
                                        <div className="text-white-50 small">Rigorous testing and optimization</div>
                                    </div>
                                </div>
                            </div>

                            {/* Tech Stack */}
                            <div className="tech-stack mt-4 pt-3 border-top border-light">
                                <h4 className="text-white fw-semibold mb-3">Tech Stack</h4>
                                <div className="d-flex flex-wrap gap-2">
                                    {companyInfo.technologies.map((tech, index) => (
                                        <span key={index} className="tech-badge px-3 py-1 rounded small">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* team members */}
                <div className="text-center mb-5">
                    <h3 className="display-6 text-white mb-3">Meet Our Team</h3>
                    <p className="text-white-50 mx-auto" style={{maxWidth: '640px'}}>
                        Our diverse team of experts brings together years of experience in web development,
                        design, and emerging technologies.
                    </p>
                </div>

                <div className="row g-4">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="col-md-4 text-center">
                            <div className="team-avatar mx-auto mb-3">
                                <img
                                    src={member.img} // your team member's image URL
                                    alt={member.name}
                                    className="img-fluid rounded team-img"
                                />
                            </div>
                            <h4 className="h5 text-white mb-1">{member.name}</h4>
                            <p className="text-success fw-medium mb-1">{member.role}</p>
                            <p className="small text-white-50 mb-1">{member.expertise}</p>
                            <p className="small text-muted">{member.experience}</p>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default AboutSection;
