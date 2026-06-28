import profile from "../assets/profile.jpeg";

function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-500 p-4">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm Aline
        </h1>
        <p className="text-gray-600 text-lg mb-4">
          Frontend Developer
        </p>
        <a
  href="/Aline_Uwababyeyi_CV.pdf"
  download
  className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
  Download CV
</a>
      </div>
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          src={profile}
          alt="Profile"
          className="w-64 h-64 object-cover rounded-full shadow-xl border-4 border-white"/>
      </div>
    </section>
  );
}

export default Hero;