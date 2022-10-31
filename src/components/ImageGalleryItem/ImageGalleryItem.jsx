import React, { Component } from 'react';
import { Modal } from '../Modal/Modal';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
    largeImg: '',
    imgTags: '',
  };

  toggleModal = evt => {
    this.setState(state => ({ showModal: !state.showModal }));

    const targetId = Number(evt.target.id);
    const imgObj = this.props.value.find(image => image.id === targetId);
    const largeImg = imgObj.largeImageURL;
    const imgTags = imgObj.tags;

    this.setState({ largeImg, imgTags });
  };

  render() {
    const { value, imgText } = this.props;
    const { showModal } = this.state;

    return (
      <>
        {showModal && (
          <Modal value={this.state} />
        )}
        {value.map(image => (
          <li key={image.id} className={css.galleryItem}>
            <img
              className={css.imageGalleryItem}
              src={image.webformatURL}
              alt={imgText}
              onClick={this.toggleModal}
              id={image.id}
            />
          </li>
        ))}
      </>
    );
  }
}

