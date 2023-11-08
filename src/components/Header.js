import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ContextProvider } from "../contexts/BooksContext";

const Header = () => {
  const { booksArr, favoriteBooksArr } = useContext(ContextProvider);

  const lengthOfFavorites = favoriteBooksArr.length;
  const lengthOfRead = booksArr.filter(({ read }) => read).length;

  const getActive = ({ isActive }) =>
    isActive
      ? {
          color: "red",
          fontWeight: "650",
        }
      : {};

  return (
    <div
      className="links"
      style={{ display: "flex", justifyContent: "space-around", gap: "1rem" }}
    >
      <NavLink to="/" style={getActive} className="nav-link">
        All Books
      </NavLink>
      <div>
        <NavLink to="/favorites" style={getActive} className="nav-link">
          Favorites
        </NavLink>
        {lengthOfFavorites > 0 ? ` (${lengthOfFavorites})` : null}
      </div>
      <div>
        <NavLink to="/read" style={getActive} className="nav-link">
          Read
        </NavLink>
        {lengthOfRead > 0 ? ` (${lengthOfRead})` : null}
      </div>
      <NavLink to="/profile" style={getActive} className="nav-link">
        Profile
      </NavLink>
    </div>
  );
};

export default Header;
