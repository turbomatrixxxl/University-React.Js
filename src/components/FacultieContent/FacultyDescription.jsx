import React from 'react';
// import data from '../../utils/data.json';
import { useParams } from 'react-router-dom';
import Paper from 'components/main/Paper';

import styles from './FacultieContent.module.css';
import { useSelector } from 'react-redux';
import { selectFaculties } from '../../redux/selectors';

export default function FacultyDescription() {
  const { facultyName } = useParams();

  const faculties = useSelector(selectFaculties);

  const faculty = faculties?.find(
    faculty => faculty.name.toLowerCase() === facultyName.toLowerCase()
  );

  return <Paper className={styles.paper}>{faculty?.description}</Paper>;
}
