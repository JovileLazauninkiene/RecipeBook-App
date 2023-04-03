import { Link } from "react-router-dom";
import NewsletterSignup from "../newsletter/NewsletterSignup";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.subscription}>
          <p className={styles.subscriptionHeading}>Join the newsletter</p>
          <p className={styles.subscriptionText}>
            You can unsubscribe at any time
          </p>
          <NewsletterSignup />
        </section>
        <div className={styles.links}>
          <div className={styles.linkWrapper}>
            <div className={styles.linkItems}>
              <h2>About us</h2>
              <Link to="/sign-up">How it works</Link>
              <Link to="/">Testimonials</Link>
              <Link to="/">Careers</Link>
              <Link to="/">Investors</Link>
              <Link to="/">Terms of Service</Link>
            </div>
            <div className={styles.linkItems}>
              <h2>Contact us</h2>
              <Link to="/">Contact</Link>
              <Link to="/">Support</Link>
              <Link to="/">Destinations</Link>
              <Link to="/">Sponsorships</Link>
            </div>
          </div>
          <div className={styles.linkWrapper}>
            <div className={styles.linkItems}>
              <h2>Videos</h2>
              <Link to="/">Submit Videos</Link>
              <Link to="/">Ambassadors</Link>
              <Link to="/">Agency</Link>
              <Link to="/">Influencer</Link>
            </div>
            <div className={styles.linkItems}>
              <h2>Social media</h2>
              <Link to="/">Instagram</Link>
              <Link to="/">Facebook</Link>
              <Link to="/">Youtube</Link>
              <Link to="/">Twitter</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
