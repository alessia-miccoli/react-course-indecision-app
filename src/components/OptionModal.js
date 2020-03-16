import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selected}
    contentLabel="Selected Option"
    onRequestClose={props.closeModal}
    ariaHideApp={false}
  >
    <h3>Selected Option</h3>
    {props.selected &&<p>{props.selected}</p>}
    <button onClick={props.closeModal}>Okay</button>
  </Modal>
);

export default OptionModal;