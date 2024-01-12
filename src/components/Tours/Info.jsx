const Info = ({ title, description, price, city, country }) => {
  return <div className="tour-info">
    <p className="tour-title">{title}</p>
    <p className="tour-description"> {description}</p>
    <div className="location">
      <span><i className="fa fa-map"></i></span>
      <span className="location">{city}, {country}.</span>
    </div>
    <p className="price">&#36;{price}</p>
  </div>

}

export default Info;