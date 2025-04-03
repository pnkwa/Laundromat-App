import { useState } from 'react'
import Modal from 'react-modal'
import Button from './Button'

interface ModalButtonProps {
  className?: string
  ButtonClassName?: string
  HeaderClassName?: string
  buttonLeftClassname?: string
  buttonRightClassname?: string
  modalHeader?: string
  buttonLeft?: string
  buttonRight?: string
  ButtonName?: string
  modalContentChildren?: React.ReactNode
}

export const ModalButton: React.FC<ModalButtonProps> = ({
  className = '',
  ButtonClassName = '',
  HeaderClassName = '',
  buttonLeftClassname = '',
  buttonRightClassname = '',
  ButtonName = 'Open Modal',
  modalContentChildren = 'I am a modal',
  modalHeader = 'Modal Heading',
  buttonLeft = 'Close',
  buttonRight = 'Save',
}) => {
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  function changeContent() {
    alert('Content will change here!')
  }

  return (
    <div className={className}>
      <Button
        text={ButtonName}
        onClick={openModal}
        className={`py-2 px-4 rounded ${ButtonClassName}`}
      />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9998]" // Ensures the background overlay covers everything
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            padding: '2rem',
            borderRadius: '10px',
            backgroundColor: 'white',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            zIndex: 9999, // Ensures the modal is on top of everything
          },
        }}
        contentLabel="ModalButton Modal"
      >
        <h2 className={`text-xl font-bold text-gray-800 ${HeaderClassName}`}>
          {modalHeader}
        </h2>
        <div className="mt-2 text-gray-600">{modalContentChildren}</div>
        <div className="mt-4 flex justify-center">
          <Button
            text={buttonLeft}
            onClick={closeModal}
            className={`py-1 px-3 rounded hover:bg-gray-700 mx-2 ${buttonLeftClassname}`}
          />
          <Button
            text={buttonRight}
            onClick={changeContent}
            className={`py-1 px-3 rounded hover:bg-blue-700 mx-2 ${buttonRightClassname}`}
          />
        </div>
      </Modal>
    </div>
  )
}

export default ModalButton
