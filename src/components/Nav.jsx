import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";

const Nav = ({ toggleAction, toggle }) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-transparent">
      <button
        className="navbar-toggler d-lg-none cursor-pointer"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="bi bi-justify"></i>
      </button>

      <div
        className="position-absolute pt-4 start-0  collapse navbar-collapse"
        id="collapsibleNavId"
      >
        <ul className="navbar-nav ms-auto mt-2 mt-lg-0 ">
          <li className="nav-item dropdown ">
            <a
              className="nav-link text-black dropdown-toggle"
              href="#"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Muna
            </a>
            <div className="dropdown-menu " aria-labelledby="dropdownId">
              <a className="dropdown-item" href="#">
                Profile
              </a>
              <a className="dropdown-item" href="#">
                Setting
              </a>
              <a className="dropdown-item" href="#">
                Sign out
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div className="position-absolute pt-4 end-0 ">
        {toggle ? (
          <i
            onClick={toggleAction}
            className="cursor-pointer bi d-lg-none bi-x-lg text-black"
          ></i>
        ) : (
          <i
            onClick={toggleAction}
            className="cursor-pointer navbar-brand bi bi-justify-left text-black fs-4"
            href="#"
          ></i>
        )}
      </div>
    </nav>
  );
};

export default Nav;
