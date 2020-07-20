import React from 'react';
import { Modal } from 'antd';
const ModalDev = props => {
  return (
    <Modal tittle={props.name} visble={true}>
      <p>Hola</p>
    </Modal>
  );
};
export default ModalDev;
