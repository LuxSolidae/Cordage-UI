// @flow
import * as React from 'react';
import classnames from 'classnames';
import { Modal as BootstrapModal, Image } from 'react-bootstrap';
import { boolean } from 'yup';

import ilusSuccess from '../../../img/illustrations/modal-success.png';
import ilusError from '../../../img/illustrations/modal-error.png';

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

export const NotificationModal = ({
  header, children, isError, isSuccess, color, onClose, show,
}: Props) => (
  <BootstrapModal
    className='modal'
    dialogClassName='modal-container'
    keyboard
    centered
    show={show}
    onHide={onClose}
  >
    <BootstrapModal.Header className={classnames('modal-header', `header-${color}`)} closeButton>
      <BootstrapModal.Title>{header}</BootstrapModal.Title>
    </BootstrapModal.Header>
    <BootstrapModal.Body className={classnames('modal-body', `body-${color}`)}>
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
    </BootstrapModal.Body>
  </BootstrapModal>
);

NotificationModal.defaultProps = {
  onClose: () => {},
  isError: false,
  isSuccess: true,
  show: false,
};

export default NotificationModal;
