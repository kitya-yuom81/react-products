// import { useEffect, useState } from "react";
// import CardProduct from "./components/card/card-product";

// export default function App() {
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     fetch("https://dummyjson.com/products/1")
    
//       .then((res) => res.json())
//       .then((data) => {
//         setProduct({
//           image: data.thumbnail,
//           description: data.description,
//           star: Math.round(data.rating),
//           rating: data.rating,
//           price: data.price,
//         });
//       });
//   }, []);

//   return (
//     <div className="p-4">
//       {product && (
//         <CardProduct
//           image={product.image}
//           description={product.description}
//           star={product.star}
//           rating={product.rating}
//           price={product.price}
//         />
//       )}
//     </div>
//   );
// }


// App.jsx

import { useEffect, useState } from "react";
import { Link } from "react-router";
import CardProduct from "./components/card/card-product";
import { getData } from "./api/api";
import axios from "axios";

export default function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  axios 

  useEffect(() => {
    getData(`/products?limit=200`).then((data) => {
      const productData = data.products.map((product) => ({
        image: product.thumbnail,
        description: product.description,
        star: Math.round(product.rating),
        rating: product.rating,
        price: product.price,
        id: product.id,
        category: product.category || "Uncategorized",
      }));

      setProducts(productData);

      const uniqueCategories = [
        "All",
        ...[...new Set(productData.map((p) => p.category))].sort(),
      ];
      setCategories(uniqueCategories);

      // Debug log
      console.log("Total products:", productData.length);
      console.log("Categories:", uniqueCategories);
    });
  }, []);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">Product Grid</h1>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {categories.map((category) =>
            category === "All" ? (
              <button
                key={category}
                onClick={() => setSelectedCategory("All")}
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  selectedCategory === "All"
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-200"
                }`}
              >
                All
              </button>
            ) : (
              <Link
                key={category}
                to={`/products/category/${category}`}
                className="px-4 py-2 rounded-md bg-white text-gray-700 hover:bg-blue-500 hover:text-white font-medium transition-colors capitalize"
              >
                {category}
              </Link>
            )
          )}
        </div>

        {/* Filtered Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((p, index) => (
            <div key={index} className="flex justify-center">
              <CardProduct
                image={p.image}
                description={p.description}
                star={p.star}
                rating={p.rating}
                price={p.price}
                id={p.id}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
