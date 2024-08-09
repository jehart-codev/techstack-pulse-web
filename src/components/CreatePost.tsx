import Modal from "./common/Modal";
import Input from "./common/Input";
import Button from "./common/Button";

type ModalProps = { isVisible: boolean; toggleModal: () => void };

const CreatePostModal = ({ isVisible, toggleModal }: ModalProps) => {
  const handleClose = () => toggleModal();

  return (
    <Modal isVisible={isVisible} onClose={handleClose}>
      <div className="flex justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-2xl text-[#3d3d3d] font-semibold mb-3">
            Article Preview
          </h3>
          <img
            className="w-full max-w-[388px] h-[220px] rounded-lg"
            src="https://placehold.co/388x220?text=Include+a+high-quality+image+in+your+story"
            alt="Article Preview Image"
          />

          <div className="preview-input-group my-3">
            <Input
              type="ghost"
              title=""
              value="Sample Title"
              onChange={() => {}}
            />
            <Input
              type="ghost"
              title=""
              value=""
              placeholder="Write a preview subtitle..."
              onChange={() => {}}
            />
          </div>

          <small className="text-xs text-[#6d6d6d] leading-4">
            <span className="font-bold">Note</span>: Changes here will affect
            how your article appears in the Article Board — not the contents of
            the story itself.
          </small>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-normal">
            Posting to: <span className="font-semibold">[User Name]</span>
          </h3>
          <p className="text-[#3d3d3d] text-sm my-2">
            Add or change category (up to 3) so readers know what your story is
            about
          </p>
          <Input
            title=""
            value=""
            placeholder="Add category..."
            onChange={() => {}}
          />

          <div className="flex justify-end items-center gap-2 mt-3">
            <Button type="ghost" onClick={() => {}} label="Cancel" />
            <Button
              type="primary"
              onClick={() => {}}
              label="Post article now"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CreatePostModal;
