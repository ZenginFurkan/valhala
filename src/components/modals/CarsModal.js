import React from 'react'
import { Modal, ModalBody } from 'reactstrap'
import CarsForm from '../forms/carsForm/CarsForm'

export default function CarsModal() {
  return (
    <Modal >
        <ModalBody>
            <CarsForm/>
        </ModalBody>
    </Modal>
  )
}
