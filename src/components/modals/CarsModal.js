import React from 'react'
import { Modal, ModalBody } from 'reactstrap'
import CarsForm from '../forms/carsForm/CarsForm'

export default function CarsModal({isOpen,toggle}) {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
        <ModalBody>
            <CarsForm/>
        </ModalBody>
    </Modal>
  )
}
