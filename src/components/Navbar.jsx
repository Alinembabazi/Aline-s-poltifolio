function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-6 flex justify-between items-center fixed w-full">
      <h1 className="text-2xl font-bold">Aline Portfolio</h1>

      <div className="flex gap-6 text-2xl">
        <a href="#home" className="hover:text-gray-400 cursor-pointer">Home</a>
        <a href="#about" className="hover:text-gray-400 cursor-pointer">About</a>
        <a href="Projects.jsx" className="hover:text-gray-400 cursor-pointer">Projects</a>
        <a href="#contact" className="hover:text-gray-400 cursor-pointer">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;