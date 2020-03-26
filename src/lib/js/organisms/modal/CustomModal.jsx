// @flow
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import ilusSuccess from '@_src_/lib/img/illustrations/modal-success.png';
import ilusError from '@_src_/lib/img/illustrations/modal-error.png';
import classnames from 'classnames';
import * as React from 'react';
import { boolean } from 'yup';

export type Props = {
  /** Header of the modal */
  header: string,
  /** Text inside the modal. */
  children: React.Node,
  /** If isError true, it will show Error modal. */
  isError?: boolean,
  /** If isSuccess true, it will show Success modal. */
  isSuccess?: boolean,
  /** Changes the background color of the modal (therefore the font's one too). */
  color: 'white' | 'dark',

  /** Should the modal be visible? */
  show?: boolean,

  /** onClose callback */
  onClose?: Function,

};

export const CustomModal = ({
  header, children, isError, isSuccess, color, onClose, show,
}: Props) => (
  <Modal
    className='modal'
    dialogClassName='modal-container'
    keyboard
    centered
    show={show}
    onHide={onClose}
  >
    <Modal.Header className={classnames('modal-header', `header-${color}`)} closeButton>
      <Modal.Title>{header}</Modal.Title>
    </Modal.Header>
    <Modal.Body className={classnames('modal-body', `body-${color}`)}>
      <div>
        <Image
          src={isError ? ilusError : isSuccess ? ilusSuccess : null}
          fluid
        />
      </div>
      <h6 className={classnames('modal-message', `type-${color}`)}>
        { isError ? 'Error' : null }
        { isSuccess ? 'Success' : null }
      </h6>
      {children}
    </Modal.Body>
  </Modal>
);

CustomModal.defaultProps = {
  onClose: () => {},
  isError: false,
  isSuccess: true,
  show: false,
};

export default CustomModal;
