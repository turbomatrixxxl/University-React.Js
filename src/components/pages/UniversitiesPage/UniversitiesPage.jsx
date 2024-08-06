import University from 'components/main/University';
import React from 'react';

import TutorsList from '../../../components/main/TutorsList/TutorsList';
import imageTutors from '../../../images/imageTutors.png';

import styles from './University.module.css';

// import { NavLink } from 'react-router-dom';
// import styled from 'styled-components';

// const StyledLink = styled(NavLink)`
//   color: black;

//   &.active {
//     color: #ff6b0a;
//   }
// `;

export default function UniversitiesPage() {
  return (
    <>
      {' '}
      <p className={styles.firstTitle}>university information</p>
      <div className={styles.mainContent}>
        <University />
        <section className={styles.tutorsSection}>
          <div className={styles.tutorsHeaderContainer}>
            <img className={styles.tutorsImg} src={imageTutors} alt="Fox" />
            <h2 className={styles.tutorsHeader}>tutors</h2>
          </div>
          <TutorsList />
        </section>
      </div>
      y
    </>
  );
}
