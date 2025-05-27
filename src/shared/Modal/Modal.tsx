'use client'

import { createContext, PropsWithChildren, useContext, MouseEvent, useRef, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';

export const ModalContext = createContext<{ onClose: () => void; ariaLabelledby: string } | null>(null)

export const Modal = ({
  children,
  isOpen,
  onClose,
  ariaLabelledby
}: PropsWithChildren & { isOpen: boolean; onClose: () => void; ariaLabelledby: string }) => {

  const overlayRef = useRef<HTMLDivElement>(null)
  const handleOverlayClose = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === overlayRef.current) {
      onClose()
    }
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    if (isOpen) {
      document.addEventListener('keydown', onKey);
    }

    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null

  return (
    <ModalContext.Provider value={{ onClose, ariaLabelledby }}>
      <div
        ref={overlayRef}
        onClick={handleOverlayClose}
        className='fixed flex items-center justify-center top-0 right-0 left-0 bottom-0 bg-overlay'
        role='dialog'
        aria-modal='true'
        aria-labelledby={ariaLabelledby}
      >
        <div className='bg-background p-24 rounded-lg'>
          {children}
        </div>
      </div>
    </ModalContext.Provider>
  )
}

const ModalHeader = ({ title }: { title: string }) => {
  const ctx = useContext(ModalContext)
  if (!ctx) {
    throw new Error("Modal components must be used within a <Modal />")
  }

  return (
    <header className='relative flex justify-between'>
      <h3 id={ctx.ariaLabelledby}>{title}</h3>
      <button
        className='absolute -top-15 -right-15 h-30 w-30 flex items-center justify-center'
        onClick={ctx.onClose}
        type='button'
        aria-label='Close modal'
      >
        <IoClose size={20} />
      </button>
    </header>
  )
}

const ModalBody = ({ children }: PropsWithChildren) => {
  return (
    <section>
      {children}
    </section>
  )
}

const ModalFooter = ({ children }: PropsWithChildren) => {
  return (
    <footer>
      {children}
    </footer>
  )
}

Modal.displayName = 'Modal'
Modal.Header = ModalHeader
Modal.Body = ModalBody
Modal.Footer = ModalFooter
