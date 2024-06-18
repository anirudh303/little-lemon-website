import React from 'react';
import styles from './About.module.css'; // Importiere die CSS-Module

import restaurantChefs from '../../assets/images/restaurant-chef-b.jpg';
import restaurant from '../../assets/images/restaurant.jpg';

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.content}>
        <h4>Little Lemon</h4>
        <h5>Chicago</h5>
        <p>
          We are a family-owned Mediterranean restaurant, dedicated to
          traditional recipes served with a modern twist.
        </p>
      </div>
      <div className={styles.owners}>
        <img className={styles.chefs} src={restaurantChefs} alt="male owner" />
        <img
          className={styles.restaurant}
          src={restaurant}
          alt="female owner"
        />
      </div>
    </section>
  );
};

export default About;
