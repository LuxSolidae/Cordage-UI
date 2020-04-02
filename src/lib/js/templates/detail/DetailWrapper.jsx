import * as React from 'react';
import { Modal as BootstrapModal} from 'react-bootstrap';

export type Props = {
  children: React.Node,
  onClose: Function,
  show?: Boolean
}

export const DetailWrapper = ({ children, onClose, show }: Props) => (
  <BootstrapModal
    dialogClassName='detail-body'
    show={show}
    onHide={onClose}
    animation
    bsPrefix='detail-content'
    centered
    >

      <BootstrapModal.Body className='detail-body'>
        <div className='d-flex'>
          { children }
        </div>
      </BootstrapModal.Body>

  </BootstrapModal>
);

export default DetailWrapper;

