import * as React from "react";
import { Modal as BootstrapModal } from "react-bootstrap";
import close from "../../../img/icons/close-icon.svg";

export type Props = {
  children: React.Node,
  onClose: Function,
  show?: Boolean,
};

export const DetailWrapper = ({ children, onClose, show }: Props) => (
  <BootstrapModal
    dialogClassName="detail-container"
    show={show}
    onHide={onClose}
    animation
    centered
  >
    <BootstrapModal.Body bsPrefix="detail-body">
      <div className="d-flex">{children}</div>
    </BootstrapModal.Body>
    <div className="btn-close-container">
      <button className="btn-close" onClick={onClose}>
        <img src={close} alt='Close'></img>
      </button>
    </div>
  </BootstrapModal>
);

DetailWrapper.defaultProps = {
  show: false,
};

export default DetailWrapper;
