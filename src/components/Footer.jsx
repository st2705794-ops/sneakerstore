import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2 className="logo">SneakerStore</h2>
          <p>
           <strong>
           Best sneakers collection for men & women. <br/>
           Shop the latest trending shoes with best quality.
           </strong>
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/search">Search</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: sneakerstore@gmail.com</p>
          <p>Email: st2705794@gmail.com</p> 
          <p>Phone: +91 7876782589</p>

          {/* SOCIAL MEDIA */}

          <div className="social-icons">

            <a href="https://instagram.com" target="_blank">
              <FaInstagram />
            </a>

            <a href="https://facebook.com" target="_blank">
              <FaFacebook />
            </a>

            <a href="https://twitter.com" target="_blank">
              <FaTwitter />
            </a>

          </div>

        </div>

      </div>

      <p className="copyright">
        © 2026 SneakerStore. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;