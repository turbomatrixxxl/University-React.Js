import React from 'react';
import PropTypes from 'prop-types';
import { HiDeviceMobile, HiLocationMarker, HiMail } from 'react-icons/hi';

import styles from '../TutorsList.module.css';
import { HiTrash } from 'react-icons/hi2';
import Button from 'components/common/Button';

function TutorItem({ item, handleDelete }) {
  return (
    <li className={styles.listItem} key={item.id}>
      <div
        className={styles.listItemName}
      >{`${item.firstName} ${item.lastName}`}</div>
      <div className={styles.listItemDetailsCont}>
        <div className={styles.listItemDetailCont}>
          <span className={styles.listItemDetailIcon}>
            <HiDeviceMobile />
          </span>
          <span className={styles.listItemDetail}>{item.phone}</span>
        </div>
        <div className={styles.listItemDetailCont}>
          <span className={styles.listItemDetailIcon}>
            <HiMail />
          </span>
          <span className={styles.listItemDetail}>{item.email}</span>
        </div>

        <div className={styles.listItemDetailCont}>
          <span className={styles.listItemDetailIcon}>
            <HiLocationMarker />
          </span>
          <span className={styles.listItemDetail}>{item.city}</span>
        </div>
      </div>
      <div className={styles.listItemDescription}>
        {item.options ? item.options : null}
      </div>
      <span className={styles.buttonTrashlIconContainer}>
        <Button
          type="button"
          disabled={false}
          handleClick={handleDelete}
          variant="icon"
        >
          <HiTrash className={styles.svg} />
        </Button>
      </span>
    </li>
  );
}

TutorItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleDelete: PropTypes.func,
};

export default TutorItem;
