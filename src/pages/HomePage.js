import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ProjectsSection from "../components/ProjectsSection";
import WhatsAppButton from "../components/WhatsappButton";

const HomePage = () => {
    return (
        <div className="light-container">
            <Header/>
            <HeroSection/>
            <ServicesSection/>
            <AboutSection/>
            <ProjectsSection/>
            <TestimonialsSection/>
            <ContactSection/>
            <Footer/>

            <WhatsAppButton/>
        </div>
    );
};

export default HomePage;