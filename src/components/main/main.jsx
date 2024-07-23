import React from 'react';
import University from './University';
// import Paper from './Paper';
import TutorsList from './TutorsList/TutorsList';
import imageTutors from '../../images/imageTutors.png';
// import data from '../../utils/data.json';

import styles from './Main.module.css';

function main() {
  return (
    <main>
      <p className={styles.firstTitle}>university information</p>
      <div className={styles.mainContent}>
        <University />
        <section className={styles.tutorsSection}>
          <div className={styles.tutorsHeaderContainer}>
            <img className={styles.tutorsImg} src={imageTutors} alt="Fox" />
            <h2 className={styles.tutorsHeader}>tutors</h2>
          </div>
          <TutorsList />
        </section>
      </div>
    </main>
  );
}

export default main;

// class Main extends Component {
//   // const data = {
//   //   name: 'MIT',
//   //   description:
//   //     'Experience, a concentration of knowledge and the ability to avoid most recruiting mistakes. We know what most local and foreign companies want and we can give it to you. And we are constantly improving our programming courses, adding something new there. You can see the success stories of our alumni for yourself to see the effectiveness of our teaching methodology. Yes, we will start with the basics and the most basic information. We know that most people come to us with zero knowledge. ',
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
//   //     { name: 'Faculty of Neural Networks' },
//   //   ],
//   // };

//   // state = {
//   //   isModalVisible: false,
//   // };
//   // //   console.log(styles);
//   // handleOpenModal = () => {
//   //   this.setState({
//   //     isModalVisible: !this.state.isModalVisible,
//   //   });
//   //   console.log('open');
//   // };

//   render() {
//     return (
//       <main>
//         <p className={styles.firstTitle}>university information</p>
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
