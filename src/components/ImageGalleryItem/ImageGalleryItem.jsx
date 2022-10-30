// import { Modal } from 'components/Modal/Modal';
import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  showLargeImage = evt => {
    console.log(evt.currentTarget.id);
    // instance.show();
  };

  render() {
    const { value, imgText } = this.props;
    return value.map(image => (
      <li key={image.id} className={css.galleryItem}>
        <img
          className={css.imageGalleryItem}
          src={image.webformatURL}
          alt={imgText}
          id={image.id}
          onClick={this.showLargeImage}
        />
      </li>
    ));
  }
}
