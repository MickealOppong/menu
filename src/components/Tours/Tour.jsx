
import Img from "./Img";
import Info from "./Info";
const Tour = ({ data }) => {
  return <article className="tour-container">
    {
      data.map((item) => {
        const { img, price, description, location, country, city, id, title } = item;
        return <div key={id} className="tour">
          <Img img={img} />
          <Info title={title} price={price} description={description} country={country} city={city} />
        </div>
      })
    }

  </article>
}
export default Tour;