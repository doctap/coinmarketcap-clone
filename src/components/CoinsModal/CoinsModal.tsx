'use client'

import { ClientPortal } from '../ClientPortal/ClientPortal'
import { Modal } from '@/shared'
import { useCallback, useState } from 'react'

export const CoinsModal = () => {
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
