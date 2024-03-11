const Cards = () => {
  return (
    <div className="container-fluid">
      <div className="row g-3 my-2">
        <div className="col-md-4 p-1">
          <div className="p-3 rounded bg-white shadow-sm d-flex justify-content-around align-itms-center">
            <div>
              <h3>23</h3>
              <p>Total Meals Order</p>
            </div>
            <i className="bi bi-cart-plus p-3 fs-1"></i>
          </div>
        </div>

        <div className="col-md-4 p-1">
          <div className="p-3 rounded bg-white shadow-sm d-flex justify-content-around align-itms-center">
            <div>
              <h3>40$</h3>
              <p>Total Cost</p>
            </div>
            <i className="bi bi-cash-coin p-3 fs-1"></i>
          </div>
        </div>
        <div className="col-md-4 p-1">
          <div className="p-3 rounded bg-white shadow-sm d-flex justify-content-around align-itms-center">
            <div>
              <h3>230$</h3>
              <p>Remaining Balance</p>
            </div>
            <i className="bi bi-cash p-3 fs-1"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
