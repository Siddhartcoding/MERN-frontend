import { FaPlus } from "react-icons/fa";

type Productsprops = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: () => void;
};

const server = "sdggertst";

const ProductCard = ({
  productId,
  price,
  name,
  photo,
  stock,
  handler,
}: Productsprops) => {
  return (
    <div className="product-cart">
      <img src={photo} alt={name} />
      <p>{name}</p>
      <span>{price}</span>

      <div>
        <button onClick={() => handler()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
