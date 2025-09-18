import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false);
    };

    return (
        <header className="light-header">
            <div className="light-logo">
                <h1 className="text-green-dark fw-bold fs-4">BIT512</h1>
            </div>

            {/* Desktop Nav */}
            <nav className="light-nav d-none d-md-flex">
                {["home", "services", "about", "projects", "testimonials", "contact"].map((sec) => (
                    <button
                        key={sec}
                        onClick={() => scrollToSection(sec)}
                        className="light-nav-link btn btn-link p-0 me-3"
                    >
                        {sec.charAt(0).toUpperCase() + sec.slice(1)}
                    </button>
                ))}
            </nav>

            {/* Desktop Get Quote Button */}
            <div className="d-none d-md-flex align-items-center gap-2">
                <button
                    onClick={() => scrollToSection("contact")}
                    className="btn-primary bg-green-dark"
                >
                    Get Quote
                </button>
            </div>

            {/* Mobile menu button */}
            <button
                className="d-md-none btn btn-link text-secondary"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="position-absolute top-100 start-0 end-0 bg-white border-top shadow d-md-none">
                    <div className="d-flex flex-column p-3 gap-2">
                        {["home", "services", "about", "testimonials", "contact"].map((sec) => (
                            <button
                                key={sec}
                                onClick={() => scrollToSection(sec)}
                                className="light-nav-link btn btn-link text-start p-0"
                            >
                                {sec.charAt(0).toUpperCase() + sec.slice(1)}
                            </button>
                        ))}
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="btn-primary bg-dark mt-2"
                        >
                            Get Quote
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
