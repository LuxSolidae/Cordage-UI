import * as React from 'react';
import { Router } from 'react-router';
import { Modal as BootstrapModal} from 'react-bootstrap';
import { createBrowserHistory } from "history";
import locations from '@_src_/lib/img/icons/locations.svg';

export type Props = {
  children: React.Node,
  onClose: Function,
  show?: Boolean
}

export const DetailWrapper = ({
  children, onClose, show
}: Props) => (
  <BootstrapModal
    show={show}
    onHide={onClose}
    animation
    centered>
    <BootstrapModal.Header closeButton>

    </BootstrapModal.Header>
      <div className="metro d-flex">
        {children}
      </div>
  </BootstrapModal>
);

export default DetailWrapper;

