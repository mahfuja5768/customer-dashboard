import Cards from "./components/Cards";
import MealsList from "./components/MealsList";
import Nav from "./components/Nav";

const Home = ({ toggleAction, toggle }) => {
  return (
    <div className=" px-3 ">
      <Nav toggleAction={toggleAction} toggle={toggle}/>
      <Cards />
      <MealsList />
    </div>
  );
};

export default Home;
