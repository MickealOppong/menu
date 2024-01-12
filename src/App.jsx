import { useState } from "react";
import FilterButtons from './components/Btns/FilterButtons';
import Tours from "./components/Tours/Tours";
import HeaderSection from './components/header/HeaderSection';
import { tourList } from './util/data';

const App = () => {
  const [list, setList] = useState(tourList)

  const getCategories = (items) => {
    const categories = new Set(items.map((tour) => tour.category))
    const filteredTours = ['all', ...categories];
    return filteredTours;
  }


  const handleClick = (category) => {
    if (category === 'all') {
      setList(tourList);
      return;
    }
    const newList = tourList.filter((tours) => tours.category === category)
    setList(newList);
  }

  return <section className="tours-container">
    <HeaderSection />
    <FilterButtons categories={getCategories(tourList)} handleClick={handleClick} />
    <Tours data={list} />
  </section>
}
export default App;