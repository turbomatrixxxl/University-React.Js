import React from 'react';
import data from '../../../utils/data.json';
import Paper from 'components/main/Paper';

export default function FacultiesPage() {
  return (
    <div>
      {data?.faculties?.map(faculty => {
        return (
          <Paper key={faculty.id}>
            <p>{faculty.name}</p>
          </Paper>
        );
      })}
    </div>
  );
}
