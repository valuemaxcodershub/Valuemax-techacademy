import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-md shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg bold font-semibold admin dark:text-white">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            &#x2715; {/* Unicode for a cross (X) */}
          </button>
        </div>
        <div className="dark:text-white">
          {children}
        </div>
      </div>
    </div>,
    document.getElementById('modal-root') // Create a div with id="modal-root" in your index.html
  );
};

export default Modal;