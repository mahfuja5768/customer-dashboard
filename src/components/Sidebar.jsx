import Logo from '../assets/cs-logo.jpg'
const Sidebar = () => {
  return (
    <div className="bg-white sidebar p-2">
      <div className="m-2">
        <img src={Logo} alt="Logo" height={100} width={120} />
      </div>
      <hr className="text-dark" />
      <div className="list-group list-group-flush">
        <a href="" className="list-group-item py-2 ">
          <i className="bi bi-speedometer2 me-3 fs-5"></i>
          <span>Dashboard</span>
        </a>
        <a href="" className="list-group-item py-2">
          <i className="bi bi-house me-3 fs-5"></i>
          <span>Home</span>
        </a>
        <a href="" className="list-group-item py-2">
          <i className="bi bi-cash me-3 fs-5"></i>
          <span>Total Balance</span>
        </a>
        <a href="" className="list-group-item py-2">
          <i className="bi bi-cart-plus me-3 fs-5"></i>
          <span>Total order meals</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
