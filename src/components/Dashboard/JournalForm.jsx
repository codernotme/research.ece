const JournalForm = () => {
  return (
    <div className="min-h-screen p-10 bg-white flex justify-center items-center">
      <div className="w-full max-w-3xl bg-gray-50 p-8 rounded-md shadow-md">
        <h1 className="text-3xl mb-6 text-teal-700">Journal Publication</h1>
        <form className="space-y-6">
          {/* Type (Radio Buttons) */}
          <div>
            <label className="block mb-2 text-gray-700 font-semibold">Type:</label>
            <div className="flex items-center gap-6">
              <label className="flex items-center text-gray-700 font-semibold">
                <input type="radio" name="type" className="mr-2" /> In SCI Journals
              </label>
              <label className="flex items-center text-gray-700 font-semibold">
                <input type="radio" name="type" className="mr-2" /> In Scopus Indexed Journals
              </label>
            </div>
          </div>

          {/* Title of the Paper */}
          <input
            type="text"
            placeholder="Title of the Paper"
            className="w-full p-3 border bg-gray-700 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          {/* Author(s) */}
          <input
            type="text"
            placeholder="Author(s)"
            className="w-full p-3 border bg-gray-700 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          {/* First/Sole Author Radio Buttons */}
          <div>
            <label className="block mb-2 text-gray-700 font-semibold">
              Are you the First/Sole Author / Main Supervisor?
            </label>
            <div className="flex items-center gap-6">
              <label className="flex items-center text-gray-700 font-semibold">
                <input type="radio" name="isFirstAuthor" className="mr-2" /> Yes
              </label>
              <label className="flex items-center text-gray-700 font-semibold">
                <input type="radio" name="isFirstAuthor" className="mr-2" /> No
              </label>
            </div>
          </div>

          {/* Number of Co-authors */}
          <div>
            <label className="block mb-2 text-gray-700 font-semibold">No. of Co-authors:</label>
            <select className="w-full p-3 border text-gray-400  bg-gray-700 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>Select</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Name of the Journal */}
          <input
            type="text"
            placeholder="Name of the Journal"
            className="w-full p-3 border bg-gray-700 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          {/* Paid or Unpaid */}
          <div>
            <label className="block mb-2 text-gray-700 font-semibold">Paid Journal or Unpaid:</label>
            <div className="flex items-center gap-6">
              <label className="flex items-center text-gray-700 font-semibold">
                <input type="radio" name="paidStatus" className="mr-2" /> Paid
              </label>
              <label className="flex items-center text-gray-700 font-semibold">
                <input type="radio" name="paidStatus" className="mr-2" /> Unpaid
              </label>
            </div>
          </div>

          {/* Volume */}
          <input
            type="text"
            placeholder="Volume"
            className="w-full p-3 border bg-gray-700 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          {/* Year Dropdown */}
          <div>
            <label className="block mb-2 text-gray-700 font-semibold">Year:</label>
            <select className="w-full p-3 border text-gray-400 bg-gray-700 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500">
              <option>Select</option>
              <option>2023</option>
              <option>2024</option>
              {/* Add more years as needed */}
            </select>
          </div>

          {/* Pages */}
          <input
            type="text"
            placeholder="Pages"
            className="w-full p-3 border bg-gray-700 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          {/* Buttons */}
          <div className="flex justify-between">
            <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Save
            </button>
            <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
              Next
            </button>
          </div>
        </form>
        <p className="mt-6 text-red-500">
          Note: Please Save your details by clicking on Save Button before proceeding to the next page.
        </p>
      </div>
    </div>
  );
};

export default JournalForm;
