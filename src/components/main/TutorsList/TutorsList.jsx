import React from 'react';
import PropTypes from 'prop-types';
import TutorItem from './Tutor/TutorItem';

function TutorsList({ tutors }) {
  return (
    <>
      <ul>
        {tutors.map(tutor => {
          return (
            <TutorItem
              key={tutor.phone}
              phone={tutor.phone}
              firstName={tutor.firstName}
              lastName={tutor.lastName}
            />
          );
        })}
      </ul>
    </>
  );
}

TutorsList.propTypes = {
  tutors: PropTypes.array.isRequired,
};

export default TutorsList;
