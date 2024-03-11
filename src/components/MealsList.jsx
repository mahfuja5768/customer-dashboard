const MealsList = () => {
  return (
    <table className="table caption-top rounded mt-2">
      <caption className=" fs-4">Last Week Orders</caption>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Meal</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Rice and Chicken Vuna</td>
          <td>6</td>
          <td>9$</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Khicuri and Beef Vuna</td>
          <td>3</td>
          <td>5$</td>
        </tr>
        <tr>
          <th scope="row">3</th>

          <td>Sea Fish Curry</td>
          <td>5</td>
          <td>7$</td>
        </tr>
        <tr>
          <th scope="row">4</th>

          <td>Chicken Biriyani</td>
          <td>9</td>
          <td>12$</td>
        </tr>
      </tbody>
    </table>
  );
};

export default MealsList;
