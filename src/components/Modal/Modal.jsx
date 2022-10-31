// import * as basicLightbox from 'basiclightbox';
import React, {Component} from 'react';
// import {createPortal} from 'react-dom'
import css from './Modal.module.css';

// const modalRoot = document.querySelector('#modal-root')

export class Modal extends Component {

componentDidMount() {
  // console.log('didMount');
  // console.log(this.props.value);
}

componentWillUnmount() {
  // console.log('willMount');
}

render() {
  const { largeImg, imgTags } = this.props.value;
  console.log(largeImg);
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <img src={largeImg} alt={imgTags}/>
      </div>
    </div>
  );
}

}








// export const Modal = largeImage => {
//   // instance.show()
//   return 
//   (const instance = basicLightbox.create(
//     <div className={css.overlay}>
//       <div className={css.modal}>
//         <img src={largeImage} alt="" />
//       </div>
//     </div>
//   ))
// };
    
  

// instance.show(largeImage);