import toast from "react-hot-toast";
import { ShoppingCart } from "lucide-react";
import { useUserStore } from "../stores/useUserStore";

const ProductCard = ({ product }) => {
  const { user } = useUserStore();
  const handleAddToCart = async () => {
    if (!user) {
      toast.error("Please login to add products to cart", { id: "login" });
      return;
    } else {
        toast.success("Product added to cart", { id: "login" });
    }
    
  };
  return (
    <div className="flex w-full relative flex-col overflow-hidden rounded-lg border border-gray-200 shadow-lg">
      <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20" />
      </div>
      <div className="mt-4 px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-black">
          {product.name}
        </h5>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-black">
              ${product.price}
            </span>
          </p>
        </div>
        <button
          className="flex items-center justify-center py-2.5 px-5 rounded-lg 
          text-center text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-800
          focus:outline-none focus:ring-4 focus:ring-emerald-300"
          onClick={handleAddToCart}
        >
          <ShoppingCart size={22} className="mr-2" />
          Add to cart
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
