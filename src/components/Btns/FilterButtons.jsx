const FilterButtons = ({ categories, handleClick }) => {
  return <div className="btns">
    {
      categories.map((category, index) => {
        return <button className={`${category} btn`} data-id={category} key={index} onClick={(e) => handleClick(e.currentTarget.dataset.id)}>{category}
        </button>
      })
    }
  </div>
}

export default FilterButtons;