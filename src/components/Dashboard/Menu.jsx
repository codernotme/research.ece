import { useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation(); // Get the current route

  // Menu items with their paths
  const menuItems = [
    { name: "Journal Publication", path: "/dashboard/journal-form" },
    { name: "Thesis Publication", path: "/dashboard/thesis-form" },
    { name: "Book Publication", path: "/dashboard/book-form" },
    { name: "Book/Chapters", path: "/dashboard/book-chapters-form" },
  ];

  return (
    <div className="col-span-2 bg-gray-800 text-white h-full p-4">
      <h3 className="text-xl font-bold my-10">Dashboard</h3>
      <ul>
        {menuItems.map((item) => (
          <li key={item.path} className="mb-4">
            <a
              href={item.path}
              className={`block p-2 rounded ${
                location.pathname === item.path
                  ? "bg-blue-500 text-white" // Highlight active item
                  : "hover:text-blue-400"
              }`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;




// working work done
//left- to add more menu items