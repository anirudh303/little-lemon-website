import React from 'react';
import ratings from '../../assets/Icons/rating.png';
import profile1 from '../../assets/images/profile1.jpg';
import profile2 from '../../assets/images/profile2-copy-0.jpg';
import profile3 from '../../assets/images/profile3.jpg';
import profile4 from '../../assets/images/profile2.jpg';
import styles from './Testimonials.module.css'; // Import der scoped CSS Datei

function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.testimonials}>
        <div className={styles.testimonialHeader}>
          <h1>What Our Customers Say</h1>
        </div>

        <div className={styles.reviewContainer}>
          <div className={styles.review}>
            <img className={styles.rating} src={ratings} alt="ratings" />
            <img className={styles.profile} src={profile1} alt="Customer Pic" />
            <h2>Selena G.</h2>
            <p>"Little Lemon's Bruschetta is a symphony of flavors."</p>
          </div>
          <div className={styles.review}>
            <img className={styles.rating} src={ratings} alt="ratings" />
            <img className={styles.profile} src={profile2} alt="Customer Pic" />
            <h2>Brandon M.</h2>
            <p>"The greek salad was excellent!"</p>
          </div>

          <div className={styles.review}>
            <img className={styles.rating} src={ratings} alt="ratings" />
            <img className={styles.profile} src={profile3} alt="Customer Pic" />
            <h2>Peter R.</h2>
            <p>"You have to try the Greek Salad!"</p>
          </div>

          <div className={styles.review}>
            <img className={styles.rating} src={ratings} alt="ratings" />
            <img className={styles.profile} src={profile4} alt="Customer Pic" />
            <h2>Neha J.</h2>
            <p>"Awesome place peaceful atmosphere with delicious food"</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
