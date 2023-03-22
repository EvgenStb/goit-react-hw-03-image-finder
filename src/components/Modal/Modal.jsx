import React, { Component } from 'react';
import './Modal.css';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeByKey);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeByKey);
  }

  closeByKey = e => {
    if (e.code !== 'Escape') {
      return;
    }
    this.props.closeModal();
  };
  closeByClick = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  render() {
    const { tags, img } = this.props;
    return createPortal(
      <div className="Overlay" onClick={this.closeByClick}>
        <div className="Modal">
          <img src={img} alt={tags} />
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  img: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  tags: PropTypes.string.isRequired,
};
