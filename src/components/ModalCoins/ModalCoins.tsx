'use client'

import ClientPortal from "../ClientPortal/ClientPortal";
import Modal from "../Modal/Modal";
import { useCallback, useState } from "react";

const ModalCoins = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleModalClose = useCallback(() => setIsModalOpen(prev => !prev), [])

  return (
    <ClientPortal selector='modal-portal'>
      <Modal ariaLabelledby="Modal coins" isOpen={isModalOpen} onClose={handleModalClose}>
        <Modal.Header title='Modal' />
        <Modal.Body>
          Modal.Body
        </Modal.Body>
        <Modal.Footer>
          Modal.Footer
        </Modal.Footer>
      </Modal>
    </ClientPortal>
  )
}

export default ModalCoins
