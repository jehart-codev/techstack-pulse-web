import { XCircle } from "@phosphor-icons/react";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
      <div className="relative w-full max-w-[600px] p-8 mx-auto bg-white rounded-3xl shadow-lg">
        <div className="flex items-center justify-end mb-5">
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
            onClick={onClose}
          >
            <XCircle size={26} color="#3d3d3d" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
