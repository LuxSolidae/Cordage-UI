// @flow

import * as React from 'react';
import className from 'classnames';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export type Props = {
  header: String,
  infoType: String,
  info: String
}

const Modalc = ({header, infoType, info}) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Open Modal
      </Button>

      <Modal
          className='modal'
          keyboard
          centered
          show={show}
          onHide={handleClose}
        >
        <Modal.Header className='modal-header' closeButton>
          <Modal.Title>{header}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body'>
          <h3 className='modal-infotype'>{infoType}</h3>
          {info}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Modalc;
