import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { FaStar } from "react-icons/fa";
import { getData } from "../../api/api";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getElementById = async () => {
      try {
        const result = await getData (`/products/${id}`);
        
        setProduct(result);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    getElementById();
  }, [id]);

  const fullStars = Math.round(product.rating || 0);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:flex gap-10">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-64 md:h-96 md:w-96 object-cover rounded-xl"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col justify-between w-full">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">{product.title}</h1>
            <p className="text-gray-600 text-base mt-2 mb-4">{product.description}</p>

            <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4 mb-4">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                {product.category}
              </span>
              <span>Stock: <span className="font-semibold text-green-600">{product.stock}</span></span>
              {product.discountPercentage && (
                <span className="text-red-600 font-medium">
                  🔻 {product.discountPercentage}% OFF
                </span>
              )}
            </div>

            <hr className="my-4" />

            <p className="text-xl font-bold text-blue-700 mb-2">
               Price: ${product.price}
            </p>

            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`h-5 w-5 ${
                    i < fullStars ? "text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-2 text-sm text-gray-500">({product.rating?.toFixed(2)})</span>
            </div>
          </div>

          <div className="mt-6">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
