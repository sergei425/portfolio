import { useState } from "react";
import { Portfolio } from './components/portfolio/index';
import "./App.css";




const filters = ["All", "Websites", "Flayers", "Business Cards"];

// eslint-disable-next-line no-unused-vars
const portfolio = [
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
    category: "Business Cards",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
    category: "Websites",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
    category: "Websites",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
    category: "Websites",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
    category: "Business Cards",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
    category: "Websites",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
    category: "Websites",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
    category: "Business Cards",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
    category: "Websites",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
    category: "Flayers",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
    category: "Websites",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
    category: "Business Cards",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
    category: "Websites",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
    category: "Websites",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
    category: "Business Cards",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
    category: "Websites",
  },
  {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
    category: "Flayers",
  },
];

function App() {
  const [filter, setFilter] = useState("All");

  const onSelectFilter = (value) => {
    setFilter(value);
  };

  const getFilteredPortfolio = (filter, arr) => {
    if (filter === 'All') {
      return arr
    }
    return arr.filter(el => el.category === filter)
  }

  const newPortfolio = getFilteredPortfolio(filter, portfolio)

  return (
    <div className="App">
      <Portfolio filters={filters} portfolio={newPortfolio} filter={filter} onSelectFilter={onSelectFilter}/>
    </div>
  );
}

export default App;
