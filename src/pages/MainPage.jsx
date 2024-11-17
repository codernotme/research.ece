const MainPage = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-blue-600 text-white py-6 text-center">
        <h1 className="text-3xl font-bold">Welcome to the ECE Department</h1>
        <p className="text-lg">Innovating the future, one circuit at a time</p>
      </header>

      <main className="p-6">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p>
            The Electronics and Communication Engineering (ECE) department is dedicated to excellence in education and research. Our programs focus on cutting-edge technology, preparing students for a bright future.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-300 shadow-md p-4">Faculty Highlights</div>
          <div className="bg-blue-400 shadow-md p-4">Research Projects</div>
          <div className="bg-blue-500 shadow-md p-4">Upcoming Events</div>
        </section>
      </main>
    </div>
  );
};

export default MainPage;
