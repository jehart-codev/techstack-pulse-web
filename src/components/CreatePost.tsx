import React from "react";

import Modal from "./common/Modal";

type ModalProps = { isVisible: boolean; toggleModal: () => void };

const CreatePostModal = ({ isVisible, toggleModal }: ModalProps) => {
  const handleClose = () => toggleModal();

  return (
    <Modal isVisible={isVisible} onClose={handleClose}>
      Article Preview
    </Modal>
  );
};

export default CreatePostModal;
