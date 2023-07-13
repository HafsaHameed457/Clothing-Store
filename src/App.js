import "./App.css";
import CategoryDesk from "./components/category-desk/category-desk";
const categories = [
  {
    id: 1,
    title: "Hats",
    imgUrl: "https://i.ibb.co/cvpntL1/hats.png",
  },
  {
    id: 2,
    title: "Jackets",
    imgUrl: "https://i.ibb.co/px2tCc3/jackets.png",
  },
  {
    id: 3,
    title: "Sneakers",
    imgUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
  },
  {
    id: 4,
    title: "Womens",
    imgUrl: "https://i.ibb.co/GCCdy8t/womens.png",
  },
  {
    id: 4,
    title: "Mens",
    imgUrl: "https://i.ibb.co/R70vBrQ/womens.png",
  },
];
const App = () => {
  return (
    <div>
      <CategoryDesk categories={categories} />
    </div>
  );
};

export default App;
