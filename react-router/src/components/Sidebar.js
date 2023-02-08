import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink to="/" exact>
            <i class="fa-solid fa-house" aria-hidden="true"></i>
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/articles">
            <i class="fa-solid fa-newspaper" aria-hidden="true"></i>
            <span>Articles</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/people">
            <i class="fa-solid fa-user" aria-hidden="true"></i>
            <span>People</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/books">
            <i class="fa-solid fa-book" aria-hidden="true"></i>
            <span>Books</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/help">
            <i class="fa-sharp fa-solid fa-circle-info" aria-hidden="true"></i>
            <span>Help & Support</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
