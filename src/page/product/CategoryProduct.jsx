import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getData } from "../../api/api";
import CardProduct from "../../components/card/card-product";

export default function CategoryProducts() {
  const { categorySlug } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData(`/products/category/${categorySlug}`).then((data) => {
      setProducts(data.products);
    });
  }, [categorySlug]);

  return (
    <main className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center capitalize">
          Products in "{categorySlug.replace("-", " ")}"
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="flex justify-center">
              <CardProduct
                image={product.thumbnail}
                description={product.description}
                star={Math.round(product.rating)}
                rating={product.rating}
                price={product.price}
                id={product.id}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
