import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import data from '../../utils/data.json';

import styles from './FacultieContent.module.css';

export default function FacultieContent() {
  const { facultyName } = useParams();

  const faculty = data?.faculties?.find(
    faculty => faculty.name.toLowerCase() === facultyName.toLowerCase()
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{faculty?.name}</h1>
      <div className={styles.links}>
        <Link className={styles.link} to="description">
          description
        </Link>
        <Link to="history">
          {' '}
          <Link className={styles.link} to="history">
            history
          </Link>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
