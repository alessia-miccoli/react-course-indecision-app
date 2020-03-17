import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selected}
    contentLabel="Selected Option"
    onRequestClose={props.closeModal}
    ariaHideApp={false}
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Selected Option</h3>
    {props.selected &&<p className="modal__body">{props.selected}</p>}
    <button className="button" onClick={props.closeModal}>Okay</button>
  </Modal>
);

export default OptionModal;