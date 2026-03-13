function Contact() {
  return (
    <section className="p-10 text-center">

      <h2 className="text-3xl font-bold mb-6">
        Contact Me
      </h2>

      <form className="max-w-xl mx-auto flex flex-col gap-4">

        <input
          type="text"
          placeholder="Your Name"
          className="border p-3 rounded"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="border p-3 rounded"
        />

        <textarea
          placeholder="Message"
          className="border p-3 rounded"
        />

        <button className="bg-black text-white p-3 rounded hover:bg-gray-800">
          Send Message
        </button>

      </form>

    </section>
  );
}

export default Contact;