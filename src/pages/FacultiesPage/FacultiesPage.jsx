import React, { useRef } from 'react';
// import data from '../../utils/data.json';
// import Paper from 'components/main/Paper';
// import { BsThreeDotsVertical } from 'react-icons/bs';

import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectFaculties,
  selectFacultiesError,
  selectFacultiestLoading,
} from '../../redux/selectors';
// import { fetchFaculties } from '../../redux/operations';
import Loading from 'components/common/Loading';
import Alert from 'components/common/Alert';

import InfoItemBlock from 'components/common/InfoItemBlock';
import { deleteFaculty, editFaculty } from '../../redux/operations';

import styles from './FacultiesPage.module.css';

export default function FacultiesPage() {
  // const [searchParams] = useSearchParams();
  const location = useLocation();
  const facultiesThunk = useSelector(selectFaculties);
  const loadingThunk = useSelector(selectFacultiestLoading);
  const errorThunk = useSelector(selectFacultiesError);

  const dialogRef = useRef();
  const contRef = useRef();
  const dialogDeleteRef = useRef();
  const contDeleteRef = useRef();

  // useEffect(() => {
  //   dispatch(fetchFaculties());
  // }, [dispatch]);

  // console.log(searchParams);

  // console.log(searchParams.get('name'));
  // console.log(searchParams.get('surname'));

  return (
    <div>
      <h2 className={styles.title}>faculties</h2>

      {/* {loading && <Loading />} */}
      {loadingThunk && <Loading />}

      {/* {error && <Alert message={error} />} */}
      {errorThunk && <Alert message={errorThunk} />}

      {facultiesThunk?.map(faculty => {
        return (
          <InfoItemBlock
            key={faculty.id}
            id={faculty.id}
            contDeleteRef={contDeleteRef}
            dialogDeleteRef={dialogDeleteRef}
            contRef={contRef}
            dialogRef={dialogRef}
            onDelete={deleteFaculty}
            onEdit={editFaculty}
            name="name"
            label="Faculty"
            value={faculty.name}
            className={styles.paper}
            divClassName={styles.info}
            menuBlockClassName={styles.menuBlockClassName}
          >
            <Link to={`${faculty.name}`} state={{ from: location }}>
              <p className={styles.name}>{faculty.name}</p>
            </Link>
          </InfoItemBlock>
        );
      })}
    </div>
  );
}
