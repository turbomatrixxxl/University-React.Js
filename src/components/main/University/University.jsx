import React from 'react';
import Paper from '../Paper';
import sidebarSchoolImage from '../../../images/School@2x 1.png';
import { HiTrash } from 'react-icons/hi2';
import { HiPencilAlt } from 'react-icons/hi';

import styles from './University.module.css';

function University() {
  //   console.log(styles);
  return (
    <Paper className={styles.papers}>
      <div className={styles.mainContainer}>
        <img className={styles.image} src={sidebarSchoolImage} alt="School" />
        {/* alternativa din fisierul de imagini public */}
        {/* <img
                  src={`${process.env.PUBLIC_URL}/images/School@2x 1.png`}
                  alt="School"
                /> */}
        <p className={styles.name}>university</p>
        <h2 className={styles.title}>MIT</h2>
      </div>
      <div className={styles.iconsContainer}>
        <button className={styles.editButtons}>
          <HiPencilAlt />
        </button>
        <button className={styles.editButtons}>
          <HiTrash />
        </button>
      </div>
    </Paper>
  );
}

export default University;
