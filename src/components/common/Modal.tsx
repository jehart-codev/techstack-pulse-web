import { createPortal } from "react-dom";
import { XCircle } from "@phosphor-icons/react";

interface ModalProps {
  isVisible: boolean;
  size?: string;
  onClose: () => void;
  children: React.ReactNode;
  withCloseButton?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isVisible,
  size = "sm",
  onClose,
  children,
  withCloseButton = true,
}) => {
  if (!isVisible) return null;

  let modalSize = "max-w-[600px]"; //default
  switch (size) {
    case "sm":
      break;

    case "md":
      modalSize = "max-w-[880px]";
      break;

    default:
      break;
  }

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
      <div
        className={`${modalSize} relative w-full p-8 mx-auto bg-white rounded-3xl shadow-lg`}
      >
        {withCloseButton && (
          <div className="flex items-center justify-end mb-5">
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
              onClick={onClose}
            >
              <XCircle size={26} color="#3d3d3d" />
            </button>
          </div>
        )}
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
