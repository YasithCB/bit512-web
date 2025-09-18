import React from "react";
import { ArrowRight, Code, Zap } from "lucide-react";
import { companyInfo } from "../MockData";
import '../assets/css/3d-animation.css'

const HeroSection = () => {
    const scrollToContact = () => {
        const element = document.getElementById("contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToServices = () => {
        const element = document.getElementById("services");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="home"
            className="min-vh-100 d-flex align-items-center pt-5"
            style={{ background: 'linear-gradient(135deg, #F0FDF4 0%, #FFFFFF 100%)' }}
        >
            <div className="light-full-container">
                <div className="light-content-container">

                    <div className="row my-4 g-4 align-items-center">
                        {/* Left side - Content */}
                        <div className="col-lg-6">

                            <div className="mb-4">
                                <div className="d-flex align-items-center gap-2 mb-3">
                                    <Code style={{color: '#52C483'}} size={32}/>
                                    <span style={{color: '#52C483'}} className="fw-medium fs-6">
                                        Serving UAE & Global Clients
                                    </span>
                                </div>

                                <h1 className="fw-bold" style={{fontSize: '3rem', color: '#1B412B', lineHeight: 1.2}}>
                                    {companyInfo.tagline}
                                </h1>

                                <p className="fs-5 text-secondary mt-3" style={{maxWidth: '36rem', lineHeight: 1.5}}>
                                    {companyInfo.introText}
                                </p>

                                <div className="d-flex flex-wrap gap-2 mt-3">
                                    {companyInfo.technologies.slice(0, 6).map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 rounded-pill fw-medium"
                                            style={{
                                                backgroundColor: '#F0FDF4',
                                                color: '#1B412B',
                                                border: '1px solid #52C483'
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="d-flex flex-column flex-sm-row gap-2 mt-3">
                                <button
                                    onClick={scrollToContact}
                                    className="btn-primary bg-green-dark d-flex align-items-center gap-1"
                                >
                                    Get Started
                                    <ArrowRight size={20}/>
                                </button>

                                <button
                                    onClick={scrollToServices}
                                    className="btn-secondary border-dark text-dark d-flex align-items-center gap-1 mt-2 mt-sm-0"
                                >
                                    <Zap size={20}/>
                                    View Services
                                </button>
                            </div>

                            {/* Stats */}
                            <div className="row row-cols-2 row-cols-md-4 g-3 mt-4 pt-3 border-top border-secondary">
                                <div className="col text-center">
                                    <div className="fw-bold fs-2" style={{color: '#52C483'}}>4+</div>
                                    <div className="text-muted small">Years Experience</div>
                                </div>
                                <div className="col text-center">
                                    <div className="fw-bold fs-2" style={{color: '#52C483'}}>10+</div>
                                    <div className="text-muted small">Projects Delivered</div>
                                </div>
                                <div className="col text-center">
                                    <div className="fw-bold fs-2" style={{color: '#52C483'}}>100%</div>
                                    <div className="text-muted small">Client Satisfaction</div>
                                </div>
                                <div className="col text-center">
                                    <div className="fw-bold fs-2" style={{color: '#52C483'}}>UAE</div>
                                    <div className="text-muted small">& Global</div>
                                </div>
                            </div>

                        </div>

                        {/* Right side - 3D CSS Animation */}
                        <div className="col-lg-6 position-relative d-flex align-items-center justify-content-center"
                             style={{height: '500px', perspective: '1200px'}}>
                            {/* Cube Container */}
                            <div className="cube-wrapper">
                                <div className="cube cube-1"></div>
                                <div className="cube cube-2"></div>
                                <div className="cube cube-3"></div>
                                <div className="cube cube-4"></div>
                            </div>

                            {/* Floating Particles */}
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                                <div key={n} className={`particle particle-${n}`}></div>
                            ))}
                        </div>


                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
