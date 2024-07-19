import React, { Component } from 'react';
import { createRef } from 'react';

import styles from './Modal.module.css';

export class Modal extends Component {
  modalRef = createRef();
  modalContentRef = createRef();

  componentDidMount() {
    document.body.addEventListener('mousedown', this.handleClickOutside);
    document.body.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.body.removeEventListener('mousedown', this.handleClickOutside);
    document.body.removeEventListener('keydown', this.handleKeyDown);
  }

  componentDidUpdate() {
    console.log(this.props);

    if (!this.modalRef?.current) {
      return;
    }

    if (this.props.isVisible) {
      this.modalRef.current.showModal();
    } else {
      this.modalRef.current.close();
    }
  }

  handleModalClose = () => {
    this.modalRef.current.close();
  };

  handleKeyDown = event => {
    // console.log(event.key);
    if (event.key === 'Escape') {
      this.handleModalClose();
    }
  };

  handleClickOutside = event => {
    // console.log(event.target);
    if (
      this.modalContentRef.current &&
      !this.modalContentRef.current.contains(event.target)
    ) {
      this.handleModalClose();
    }
  };

  render() {
    const { isVisible } = this.props;

    if (!isVisible) {
      return;
    }

    return (
      <dialog id="modal" className={styles.modalClassName} ref={this.modalRef}>
        <div ref={this.modalContentRef}>
          <h1>This is a modal.</h1>
          <button id="closeModal" onClick={this.handleModalClose}>
            Close modal
          </button>
        </div>
      </dialog>
    );
  }
}

export default Modal;
