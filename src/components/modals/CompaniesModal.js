import React from 'react'
import { Modal, ModalBody } from 'reactstrap'
import CompaniesForm from '../forms/companiesForm/CompaniesForm'

export default function CompaniesModal({isOpen,toggle}) {
  return (
    <Modal isOpen={isOpen} toggle={toggle} >
      <ModalBody>
        <CompaniesForm />
      </ModalBody>
    </Modal>
  )
}
