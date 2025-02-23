export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-green-900 via-green-800 to-green-900 bg-opacity-90 backdrop-blur-lg shadow-lg text-white py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Side - Brand Name */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold">MyShop</h2>
          <p className="text-gray-300 text-sm">© {new Date().getFullYear()} MyShop. All rights reserved.</p>
        </div>

        {/* Center - Navigation Links */}
        <nav className="flex space-x-6 text-gray-300">
          <a href="#" className="hover:text-white transition-all">Home</a>
          <a href="#" className="hover:text-white transition-all">Shop</a>
          <a href="#" className="hover:text-white transition-all">About</a>
          <a href="#" className="hover:text-white transition-all">Contact</a>
        </nav>

      </div>
    </footer>
  );
}
