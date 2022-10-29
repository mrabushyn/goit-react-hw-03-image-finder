import React, {Component}  from 'react';
import css from './ImageGalleryItem.module.css';


export class ImageGalleryItem extends Component {
  render() {
    const images = this.props.value;
    console.log(images);
    return images.map(image => (
      <li key={image.id} className={css.galleryItem}>
        <img className={css.imageGalleryItem} src={image.webformatURL} alt="" />
      </li>
    ));
  }
}


