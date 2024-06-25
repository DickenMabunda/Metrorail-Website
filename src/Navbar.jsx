import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-1">
          <img className="img-1" src="/img-2.jpeg"></img>
          <span className="title-1">Metrorail Prasa</span>
        </div>
        <div className="navbar-2">
          <ul className="title-2">
            <li className="list-item">
              <Link to="/" className="link-a">
                Home
              </Link>
            </li>
            <li className="list-item">
              <a href="#timetables" className="link-a">
                Timetables
              </a>
            </li>
            <li className="list-item">
              <Link to="" className="link-a">
                About 
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
