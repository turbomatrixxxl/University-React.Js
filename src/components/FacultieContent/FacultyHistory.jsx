import React from 'react';
import data from '../../utils/data.json';
import { useParams } from 'react-router-dom';
import Paper from 'components/main/Paper';

import styles from './FacultieContent.module.css';

export default function FacultyHistory() {
  const { facultyName } = useParams();

  const faculty = data?.faculties?.find(
    faculty => faculty.name.toLowerCase() === facultyName.toLowerCase()
  );

  return <Paper className={styles.paper}>{faculty?.history}</Paper>;
}
