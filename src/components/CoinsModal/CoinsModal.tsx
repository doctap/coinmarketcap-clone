'use client'

import ClientPortal from '../ClientPortal/ClientPortal'
import Modal from '../Modal/Modal'
import { useCallback, useState } from 'react'

const CoinsModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModalClose = useCallback(() => setIsModalOpen(prev => !prev), [])

  return (
    <ClientPortal selector='modal-portal'>
      <Modal ariaLabelledby='modal-title' isOpen={isModalOpen} onClose={handleModalClose}>
        <Modal.Header title='Modal' />
        <Modal.Body></Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </ClientPortal>
  )
}

export default CoinsModal
