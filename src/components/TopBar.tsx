import { Link } from "react-router-dom";
import "../App.css";
const TopBar = () => {
  return (
    <div className="bg-blue-600 p-4 flex items-center shadow-lg">
      <h1 className="text-white text-xl font-bold centered">
        The Goobers Wiki
      </h1>
      <p className="gone">.</p>
      <div className="ml-auto flex space-x-4 centered">
        <Link
          to="/"
          className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200 fakebutton"
        >
          Main Page
        </Link>
        <Link
          to="/sotd"
          className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200 fakebutton"
        >
          Song of the Day
        </Link>
        <Link
          to="/members"
          className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200 fakebutton"
        >
          Members
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
