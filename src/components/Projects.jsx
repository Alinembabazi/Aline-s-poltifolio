function Projects() {
  return (
    <section className="p-10 bg-gray-100">

      <h2 className="text-3xl font-bold text-center mb-10">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white p-6 shadow rounded">
          <h3 className="text-xl font-semibold mb-2">
            Hospital Management System
          </h3>

          <p className="text-gray-600">
            Python Tkinter system used to manage hospital data.
          </p>
        </div>

        <div className="bg-white p-6 shadow rounded">
          <h3 className="text-xl font-semibold mb-2">
            Tech Conference System
          </h3>

          <p className="text-gray-600">
            Event registration system built with React.
          </p>
        </div>

        <div className="bg-white p-6 shadow rounded">
          <h3 className="text-xl font-semibold mb-2">
            Portfolio Website
          </h3>

          <p className="text-gray-600">
            Personal portfolio built with React and Tailwind.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Projects;