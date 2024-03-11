const Sidebar = () => {
  return (
    <div className="bg-white sidebar p-2">
      <div className="m-2">
        <i className="bi bi-bootstrap-fill me-3 fs-4"></i>
        <span className="brand-name fs-4">Muna</span>
      </div>
      <hr className="text-dark" />
      <div className="list-group list-group-flush">
        <a href="" className="list-group-item py-2 ">
          <i className="bi bi-speedometer2 me-3 fs-5"></i>
          <span className="fs-5">Dashboard</span>
        </a>
        <a href="" className="list-group-item py-2">
          <i className="bi bi-house me-3 fs-5"></i>
          <span className="fs-5">Home</span>
        </a>
        <a href="" className="list-group-item py-2">
          <i className="bi bi-house me-3 fs-5"></i>
          <span className="fs-5">Total Balance</span>
        </a>
        <a href="" className="list-group-item py-2">
          <i className="bi bi-house me-3 fs-5"></i>
          <span className="fs-5">Total order meals</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
