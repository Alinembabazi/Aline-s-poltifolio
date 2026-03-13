function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Aline Portfolio</h1>

      <ul className="flex gap-6">
        <li className="hover:text-gray-400 cursor-pointer">Home</li>
        <li className="hover:text-gray-400 cursor-pointer">About</li>
        <li className="hover:text-gray-400 cursor-pointer">Projects</li>
        <li className="hover:text-gray-400 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;