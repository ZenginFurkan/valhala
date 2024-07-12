import React from "react";
import UsersForm from "../usersForm/UsersForm";
import { Modal, ModalBody } from "reactstrap";

export default function UsersModal({ isOpen, toggleModal }) {
  return (
    <Modal isOpen={isOpen} toggle={toggleModal} size="lg" centered style={{ maxWidth: '60%', width: '60%' }} backdrop="static">
      <ModalBody style={{ padding: 0 }}>
        <div style={{ height: '80vh'}}>
          <UsersForm />
        </div>
      </ModalBody>
    </Modal>
  );
}
