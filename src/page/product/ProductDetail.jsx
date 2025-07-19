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
        const result = await getData(`/products/${id}`);
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
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-10">
        {/* Main Info */}
        <div className="md:flex gap-10">
          {/* Image */}
          <div className="flex-shrink-0 w-full md:w-96 mb-6 md:mb-0">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-64 md:h-96 object-cover rounded-xl"
            />
            <div className="mt-4 grid grid-cols-3 gap-2">
              {product.images?.slice(0, 3).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Product ${index + 1}`}
                  className="h-20 w-full object-cover rounded-lg border"
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-between w-full space-y-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">{product.title}</h1>
              <p className="text-gray-600 text-base mt-2">{product.description}</p>

              <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4 mt-4">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                  {product.category}
                </span>
                <span>Brand: <span className="font-semibold">{product.brand}</span></span>
                <span>Stock: <span className="font-semibold text-green-600">{product.stock}</span></span>
                <span>MOQ: <span className="font-semibold">{product.minimumOrderQuantity}</span></span>
              </div>

              {product.discountPercentage && (
                <p className="text-red-600 font-semibold mt-2">
                  🔻 {product.discountPercentage}% OFF
                </p>
              )}

              <p className="text-xl font-bold text-blue-700 mt-4">
                Price: ${product.price}
              </p>

              <div className="flex items-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`h-5 w-5 ${i < fullStars ? "text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-500">({product.rating?.toFixed(2)})</span>
              </div>
            </div>

            <div className="mt-6 space-y-2 text-sm text-gray-600">
              <p><span className="font-semibold">Warranty:</span> {product.warrantyInformation}</p>
              <p><span className="font-semibold">Shipping:</span> {product.shippingInformation}</p>
            </div>

            <button className="w-full md:w-fit bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow mt-4">
              Buy Now
            </button>
          </div>
        </div>

        {/* Reviews Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Customer Reviews</h2>
          <div className="space-y-4">
            {product.reviews?.slice(0, 3).map((review, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-xl border">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-700">{review.reviewerName}</h4>
                  <span className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</span>
                </div>
                <p className="text-gray-600 italic">"{review.comment}"</p>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`h-4 w-4 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
