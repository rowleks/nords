import Close from "../svg/Close";

interface CartModalProps {
  onClose: () => void;
}

export default function CartModal({ onClose }: CartModalProps) {
  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/60"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-black/30 flex items-center justify-center w-full h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cart-details">
          <div className="flex justify-between items-cente px-8 py-6 border-b-1 border-[#e6e6e6]">
            <h5 className="mb-0 text-[2rem]">Your Cart</h5>
            <div onClick={onClose} className="cursor-pointer">
              <Close />
            </div>
          </div>
          <div className="py-24 flex items-center justify-center">
            <span>Your cart is currently empty.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
