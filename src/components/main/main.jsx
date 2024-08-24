import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// import FacultieContent from 'components/FacultieContent/FacultieContent';
import FacultyDescription from 'components/FacultieContent/FacultyDescription';
import FacultyHistory from 'components/FacultieContent/FacultyHistory';
// import FacultiesPage from 'pages/FacultiesPage/FacultiesPage';

// import UniversitiesPage from 'pages/UniversitiesPage/UniversitiesPage';
import NotFoundPage from 'pages/NotFoundPage';
import LoadingPage from 'pages/LoadingPage';
import RestrictedRoute from 'components/RestrictedRoute';
import PrivateRoute from 'components/PrivateRoute';

const LazyUniversitiesPage = lazy(() =>
  import('pages/UniversitiesPage/UniversitiesPage')
);
const LazyFacultiesPage = lazy(() =>
  import('pages/FacultiesPage/FacultiesPage')
);
const LazyFacultieContent = lazy(() =>
  import('components/FacultieContent/FacultieContent')
);

const LazyLoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));

const LazyRegisterPage = lazy(() =>
  import('../../pages/RegisterPage/RegisterPage')
);

// import Paper from './Paper';

// import data from '../../utils/data.json';

function main() {
  return (
    <main>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route
            path="University-React.Js/login"
            element={
              <RestrictedRoute
                redirectTo="/University-React.Js/university"
                component={<LazyLoginPage />}
              />
            }
          />
          <Route
            path="University-React.Js/register"
            element={
              <RestrictedRoute
                redirectTo="/University-React.Js/university"
                component={<LazyRegisterPage />}
              />
            }
          />
          <Route
            path="University-React.Js/"
            element={
              <PrivateRoute
                redirectTo="University-React.Js/login"
                component={<LazyUniversitiesPage />}
              />
            }
          />
          <Route
            path="University-React.Js/university"
            element={
              <PrivateRoute
                redirectTo="University-React.Js/login"
                component={<LazyUniversitiesPage />}
              />
            }
          />
          <Route
            path="University-React.Js/faculties"
            element={
              <PrivateRoute
                redirectTo="University-React.Js/login"
                component={<LazyFacultiesPage />}
              />
            }
          />
          <Route
            path="University-React.Js/faculties/:facultyName"
            element={
              <PrivateRoute
                redirectTo="University-React.Js/login"
                component={<LazyFacultieContent />}
              />
            }
          >
            <Route path="" element={<FacultyDescription />} />
            <Route path="description" element={<FacultyDescription />} />
            <Route path="history" element={<FacultyHistory />} />
          </Route>

          <Route
            path="*"
            element={<NotFoundPage initPage="University-React.Js/university" />}
          />
        </Routes>
      </Suspense>
    </main>
  );
}

export default main;

// class Main extends Component {
//   // const data = {
//   //   name: 'MIT',
//   //   description:
//   //     'Experience, a concentration of knowledge and the ability to avoid most recruiting mistakes. We know what most local and foreign companies want and we can give it to you. Aend we are constantly improving our programming courses, adding something new there. You can see the success stories of our alumni for yourself to see the effectiveness of our teaching methodology. Yes, we will start with the basics and the most basic information. We know that most people come to us with zero knowledge. ',
//   //   tutors: [
//   //     {
//   //       firstName: 'John',
//   //       lastName: 'Smith',
//   //       phone: '+1 302-865-7394',
//   //       email: 'johnsmith@goit.global',
//   //       city: 'New York',
//   //       options: 'Group creation',
//   //     },
//   //     {
//   //       firstName: 'Antonio',
//   //       lastName: 'García',
//   //       phone: '+34 456 890 302',
//   //       email: 'antonio.garcia@goit.global',
//   //       city: 'Madrid',
//   //       options: 'Group creation, editing teacher profiles',
//   //     },
//   //   ],
//   //   cities: ['Kyiv', 'London', 'Berlin'],
//   //   department: [
//   //     { name: 'Faculty of Computer Science' },
//   //     { name: 'Faculty of Automation' },
//   //     { name: 'Faculty of +Neural Networks' },
//   //   ],
//   // };
//   // state = {
//   //   isModalVisible: false,
//   // };
//   // //
//   // handleOpenModal = () => {
//   //   this.setState({
//G   //     isModalVisible: !this.state.isMwodalVisible,
//   //   });
//   //   console.log('open');
//   // };

//   render() {
//     return (
//       <main>
//  <p className={styles.firstTitle}>university information</p>
//         <div className={styles.mainContent}>
//           <University />

//           <section className={styles.tutorsSection}>
//             <div className={styles.tutorsHeaderContainer}>
//               <img className={styles.tutorsImg} src={imageTutors} alt="Fox" />
//               <h2 className={styles.tutorsHeader}>tutors</h2>
//             </div>
//             <TutorsList />
//           </section>
//         </div>
//       </main>
//     );
//   }
// }

// export default Main;
