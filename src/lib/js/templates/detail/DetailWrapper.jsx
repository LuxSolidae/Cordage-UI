import * as React from 'react';
import { Modal as BootstrapModal} from 'react-bootstrap';

export type Props = {
  children: React.Node,
  onClose: Function,
  show?: Boolean
}

export const DetailWrapper = ({ children, onClose, show }: Props) => (
  <BootstrapModal
    className='detail'
    show={show}
    onHide={onClose}
    animation
    centered>

    <BootstrapModal.Header closeButton>

    </BootstrapModal.Header>
        { children }
  </BootstrapModal>
);

export default DetailWrapper;

