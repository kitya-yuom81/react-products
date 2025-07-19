export default function About() {
  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-green-500 to-lime-500 text-white text-center py-20 shadow-lg">
        <h1 className="text-5xl font-extrabold uppercase tracking-wider">About Our Store</h1>
        <p className="text-lg mt-4 font-light">Your trusted destination for quality and style</p>
      </header>

      {/* Mission & Values */}
      <section className="text-center py-16 px-4 bg-gray-50">
        <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our mission is to deliver top-quality lifestyle products and an outstanding shopping
          experience with integrity, style, and care.
        </p>
        <div className="flex justify-center space-x-10 mt-10">
          <div className="transition transform hover:scale-110">
            <h3 className="text-2xl font-bold text-green-600">500+</h3>
            <p className="text-gray-700">Products</p>
          </div>
          <div className="transition transform hover:scale-110">
            <h3 className="text-2xl font-bold text-green-600">10 Years</h3>
            <p className="text-gray-700">Of Retail Experience</p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-white py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Shop By Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {['Men', 'Women', 'Accessories', 'Shoes'].map((category) => (
            <div
              key={category}
              className="p-6 bg-green-100 hover:bg-green-200 text-center rounded-xl shadow-md transition-colors cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-gray-800">{category}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Why Shop With Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { title: 'Fast Shipping', desc: 'Quick and reliable delivery to your doorstep' },
            { title: 'Secure Payment', desc: 'Your data is safe with end-to-end encryption' },
            { title: 'Easy Returns', desc: 'Not satisfied? Hassle-free returns within 30 days' },
            { title: '24/7 Support', desc: 'Customer service that actually helps' }
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-green-600">{feature.title}</h3>
              <p className="text-gray-700 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-green-500 text-white text-center py-16 px-4">
        <h2 className="text-3xl font-bold mb-10">What Our Customers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {['Amazing service and quality!', 'I love the fast delivery.', 'Great products at great prices!'].map(
            (feedback, index) => (
              <div
                key={index}
                className="bg-green-600 p-6 rounded-lg shadow-lg hover:bg-green-400 transition"
              >
                <p className="italic">"{feedback}"</p>
                <h3 className="mt-4 font-bold">- Customer {index + 1}</h3>
              </div>
            )
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="text-center py-16 px-4">
        <h2 className="text-3xl font-bold mb-10">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              q: 'How do I place an order?',
              a: 'Simply browse products, add to cart, and checkout securely.'
            },
            {
              q: 'Do you offer international shipping?',
              a: 'Yes, we ship globally with tracking and insurance.'
            },
            {
              q: 'Can I return items?',
              a: 'Absolutely, within 30 days of receiving your order.'
            }
          ].map((faq, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-md hover:shadow-lg transition text-left"
            >
              <h3 className="text-xl font-semibold">{faq.q}</h3>
              <p className="text-gray-700 mt-2 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-600 text-white text-center py-8">
        <p className="text-sm">&copy; 2025 Binary Boats ⛵ - All rights reserved</p>
      </footer>
    </div>
  );
}
