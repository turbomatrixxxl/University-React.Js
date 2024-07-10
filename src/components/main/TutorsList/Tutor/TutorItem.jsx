import React from 'react';
import PropTypes from 'prop-types';
import { HiDeviceMobile, HiLocationMarker, HiMail } from 'react-icons/hi';

import styles from '../TutorsList.module.css';

function TutorItem({
  phone,
  firstName,
  lastName,
  email,
  city,
  options,
  isVisible,
}) {
  return (
    <li className={styles.listItem} key={phone}>
      <div className={styles.listItemName}>{`${firstName} ${lastName}`}</div>
      <div className={styles.listItemDetailsCont}>
        <div className={styles.listItemDetailCont}>
          <span className={styles.listItemDetailIcon}>
            <HiDeviceMobile />
          </span>
          <span className={styles.listItemDetail}>{phone}</span>
        </div>
        <div className={styles.listItemDetailCont}>
          <span className={styles.listItemDetailIcon}>
            <HiMail />
          </span>
          <span className={styles.listItemDetail}>{email}</span>
        </div>

        <div className={styles.listItemDetailCont}>
          <span className={styles.listItemDetailIcon}>
            <HiLocationMarker />
          </span>
          <span className={styles.listItemDetail}>{city}</span>
        </div>
      </div>
      <div className={styles.listItemDescription}>
        {options ? options : null}
      </div>
    </li>
  );
}

TutorItem.propTypes = {
  phone: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  options: PropTypes.string.isRequired,
};

export default TutorItem;
