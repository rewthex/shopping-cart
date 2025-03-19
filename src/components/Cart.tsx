import Modal from "react-modal";

Modal.setAppElement("#root");

type CartProps = {
  onClose: () => void;
  isOpen: boolean;
};

export default function Cart({ isOpen, onClose }: CartProps) {
  return (
    <Modal
      isOpen={isOpen}
      className="cart-modal"
      overlayClassName="modal-backdrop"
    >
      <button className="close-cart" onClick={onClose}>
        X
      </button>
    </Modal>
  );
}
