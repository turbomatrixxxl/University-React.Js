import React from 'react';
import PropTypes from 'prop-types';

function TutorItem({ phone, firstName, lastName }) {
  return <li key={phone}>{`${firstName} ${lastName}`}</li>;
}

TutorItem.propTypes = {
  phone: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default TutorItem;
