import React, {Component}  from 'react';
import css from './ImageGalleryItem.module.css';


export class ImageGalleryItem extends Component {
  render() {
    const { value, imgText } = this.props;
    return value.map(image => (
      <li key={image.id} className={css.galleryItem}>
        <img
          className={css.imageGalleryItem}
          src={image.webformatURL}
          alt={imgText}
        />
      </li>
    ));
  }
}


