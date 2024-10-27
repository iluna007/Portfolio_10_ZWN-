import React from "react";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 text-center example">
      <div className="container">
        <footer className="border-top">
          <div className="social-icons">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3 text-secondary"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3 text-secondary"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3 text-secondary"
            >
              <i className="bi bi-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3 text-secondary"
            >
              <i className="bi bi-linkedin"></i>
            </a>

            <a
              href="mailto:arquitectoikerluna@gmail.com"
              className="me-3 text-secondary"
            >
              <i className="bi bi-envelope"></i>
            </a>
          </div>
          <p className="text-body-secondary">
            © 2024 Zero Waste Nicaragua. All rights reserved. Web design by:
            Iker Luna Prototype V1.0
          </p>
        </footer>
      </div>
    </footer>
  );
};

export default Footer;
