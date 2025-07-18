import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

export default function CardProduct({ image, description, star, rating, price, id }) {
  return (
    <Link to={`/products/${id}`} className="w-full max-w-sm h-full">
      <div className="bg-white shadow-md rounded-lg h-full flex flex-col justify-between p-5 dark:bg-gray-800 dark:border-gray-700">
        {/* Product Image */}
        <img
          className="rounded-lg max-h-48 w-full object-contain mb-4"
          src={image}
          alt="product"
        />

        <div className="flex-1 flex flex-col justify-between">
          {/* Product Description */}
          <h3 className="text-gray-900 font-semibold text-base mb-3 dark:text-white line-clamp-3">
            {description}
          </h3>

          {/* Rating */}
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={`w-4 h-4 ${
                  index < star ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
              {rating}
            </span>
          </div>

          {/* Price and Button */}
          <div className="flex items-center justify-between mt-auto pt-2">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              ${price}
            </span>
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
