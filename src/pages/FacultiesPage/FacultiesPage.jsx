import React from 'react';
import data from '../../utils/data.json';
import Paper from 'components/main/Paper';
import { BsThreeDotsVertical } from 'react-icons/bs';

import styles from './FacultiesPage.module.css';
import { Link } from 'react-router-dom';

export default function FacultiesPage() {
  return (
    <div>
      <h2 className={styles.title}>faculties</h2>
      {data?.faculties?.map(faculty => {
        return (
          <Link key={faculty.id} to={`${faculty.name}`}>
            <Paper className={styles.paper}>
              <div className={styles.info}>
                <p className={styles.name}>{faculty.name}</p>
                <button className={styles.button}>
                  {' '}
                  <BsThreeDotsVertical />
                </button>
              </div>
            </Paper>
          </Link>
        );
      })}
    </div>
  );
}
