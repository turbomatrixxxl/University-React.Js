import React, { useEffect, useState } from 'react';
import Paper from '../Paper';
import sidebarSchoolImage from '../../../images/School@2x 1.png';
import { HiTrash } from 'react-icons/hi2';
import { HiPencilAlt } from 'react-icons/hi';

import styles from './University.module.css';
import Modal from 'components/Modal';

function University() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    document.body.addEventListener('keydown', handleKeyDown);

    function handleKeyDown(event) {
      // console.log(event.key);

      if (event.key === 'Escape') {
        handleModalClose();
      }
    }

    return () => {
      document.body.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  function handleModalClose() {
    setIsModalVisible(false);
  }

  function handleOpenModal() {
    setIsModalVisible(true);

    // console.log('open');
  }

  return (
    <section className={styles.section}>
      <Modal
        handleModalClose={handleModalClose}
        isModalVisible={isModalVisible}
      />
      <Paper className={styles.papers}>
        <div className={styles.mainContainer}>
          <img className={styles.image} src={sidebarSchoolImage} alt="School" />
          {/* alternativa din fisierul de imagini public */}
          {/* <img
                    src={`${process.env.PUBLIC_URL}/images/School@2x 1.png`}
                    alt="School"
                  /> */}
          <p className={styles.name}>university</p>
          <h2 className={styles.title}>MIT</h2>
        </div>
        <div className={styles.iconsContainer}>
          <button className={styles.editButtons} onClick={handleOpenModal}>
            <HiPencilAlt />
          </button>
          <button className={styles.editButtons}>
            <HiTrash />
          </button>
        </div>
      </Paper>
      <Paper className={styles.paperDescription}>
        Experience, a concentration of knowledge and the ability to avoid most
        recruiting mistakes. We know what most local and foreign companies want
        and we can give it to you. And we are constantly improving our
        programming courses, adding something new there. You can see the success
        stories of our alumni for yourself to see the effectiveness of our
        teaching methodology. Yes, we will start with the basics and the most
        basic information. We know that most people come to us with zero
        knowledge.
      </Paper>
    </section>
  );
}

export default University;

// class University extends Component {
//   state = {
//     isModalVisible: false,
//   };

//   componentDidMount() {
//     document.body.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     document.body.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleModalClose = () => {
//     this.setState({ isModalVisible: false });
//   };

//   handleKeyDown = event => {
//     // console.log(event.key);
//     if (event.key === 'Escape') {
//       this.handleModalClose();
//     }
//   };

//   handleOpenModal = () => {
//     this.setState({
//       isModalVisible: true,
//     });
//     // console.log('open');
//   };

//   render() {
//     return (
//       <section className={styles.section}>
//         <Modal
//           handleModalClose={this.handleModalClose}
//           isModalVisible={this.state.isModalVisible}
//         />
//         <Paper className={styles.papers}>
//           <div className={styles.mainContainer}>
//             <img
//               className={styles.image}
//               src={sidebarSchoolImage}
//               alt="School"
//             />
//             {/* alternativa din fisierul de imagini public */}
//             {/* <img
//                     src={`${process.env.PUBLIC_URL}/images/School@2x 1.png`}
//                     alt="School"
//                   /> */}
//             <p className={styles.name}>university</p>
//             <h2 className={styles.title}>MIT</h2>
//           </div>
//           <div className={styles.iconsContainer}>
//             <button
//               className={styles.editButtons}
//               onClick={this.handleOpenModal}
//             >
//               <HiPencilAlt />
//             </button>
//             <button className={styles.editButtons}>
//               <HiTrash />
//             </button>
//           </div>
//         </Paper>
//         <Paper className={styles.paperDescription}>
//           Experience, a concentration of knowledge and the ability to avoid most
//           recruiting mistakes. We know what most local and foreign companies
//           want and we can give it to you. And we are constantly improving our
//           programming courses, adding something new there. You can see the
//           success stories of our alumni for yourself to see the effectiveness of
//           our teaching methodology. Yes, we will start with the basics and the
//           most basic information. We know that most people come to us with zero
//           knowledge.
//         </Paper>
//       </section>
//     );
//   }
// }

// export default University;
