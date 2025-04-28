import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

const ConfirmationModal = ({
  isOpen,
  onCancel,
  onConfirm,
  title = "Konfirmasi",
  message = "Apakah Anda yakin ingin melanjutkan?",
  confirmText = "Ya, Lanjutkan",
  cancelText = "Batal"
}) => {
  if (!isOpen) return null
  
  return (
    <div className="fixed inset-0  z-[1000] bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ease-in-out">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4">
        <div className="text-center mb-4">
          <FontAwesomeIcon icon={faExclamationTriangle} className='text-yellow-500 text-4xl mb-3' />
          <h3 className='text-lg font-semibold mb-2'>{title}</h3>
          <p className='text-gray-600'>{ message}</p>
        </div>
        <div className="flex gap-3 justify-end">
          <button onClick={onCancel} className='px-4 py-2 text-gray-600 hover:text-gray-800'>
            {cancelText}
          </button>
          <button onClick={onConfirm} className='px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg'>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  )
}
ConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  title: PropTypes.string,
  message: PropTypes.string,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
}

export default ConfirmationModal;