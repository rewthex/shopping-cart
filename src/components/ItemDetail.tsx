import Modal from "react-modal";
import { InventoryItem } from "../store/inventory-slice";

Modal.setAppElement("#root");

type ItemDetailProps = {
  item: InventoryItem;
  onClose: () => void;
  isOpen: boolean;
};

export default function ItemDetail({ isOpen, item, onClose }: ItemDetailProps) {
  const { id, image, title, price, description, category, rating } = item;
  console.log(image, id, title, price, description, category, rating);

  return (
    <Modal
      isOpen={isOpen}
      className="item-detail-modal"
      overlayClassName="modal-backdrop"
    >
      <main>hi</main>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
}
