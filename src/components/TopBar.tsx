import { Link } from "react-router-dom";
import "../App.css";
const TopBar = () => {
  return (
    <div className="bg-blue-600 p-4 flex items-center shadow-lg">
      <h1 className="text-white text-xl font-bold centered">Kai's Creations</h1>
      <img height={"10px"} />
      <div className="ml-auto flex space-x-4 centered">
        <Link
          to="/"
          className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200 fakebutton"
        >
          Main
        </Link>
        <Link
          to="/info"
          className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200 fakebutton"
        >
          Info
        </Link>
        <Link
          to="/events"
          className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200 fakebutton"
        >
          Events
        </Link>
        <br /> <br />
        <hr />
      </div>
    </div>
  );
};

export default TopBar;
