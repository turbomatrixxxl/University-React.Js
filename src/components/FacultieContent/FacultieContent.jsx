import React from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
// import data from '../../utils/data.json';

import styles from './FacultieContent.module.css';
import { useSelector } from 'react-redux';
import { selectFaculties } from '../../redux/selectors';

export default function FacultieContent() {
  const { facultyName } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/University-React.Js/faculties';

  const faculties = useSelector(selectFaculties);

  const faculty = faculties?.find(
    faculty => faculty.name.toLowerCase() === facultyName.toLowerCase()
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{faculty?.name}</h1>
      <div className={styles.back}>
        <Link className={styles.link} to={backLinkHref}>
          Back to faculties
        </Link>
      </div>

      <div className={styles.links}>
        <Link className={styles.link} to="description">
          description
        </Link>

        <Link className={styles.link} to="history">
          history
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
