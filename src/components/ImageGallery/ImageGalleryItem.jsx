import { Component } from 'react';
import './ImageGalleryItem.css';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };
  render() {
    const { webformatURL, largeImageURL, tags } = this.props;
    return (
      <li className="ImageGalleryItem">
        <img
          className="ImageGalleryItem-image"
          src={webformatURL}
          alt={tags}
          loading="lazy"
          onClick={this.toggleModal}
        />

        {this.state.isModalOpen && (
          <Modal
            img={largeImageURL}
            tags={tags}
            closeModal={this.toggleModal}
          />
        )}
      </li>
    );
  }
}
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
export { ImageGalleryItem };
