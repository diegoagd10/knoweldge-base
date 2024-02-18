import './Filters.css'
import { useId, useContext } from 'react'
import { useCategories } from '../hooks/useCategories'
import { FiltersContext } from '../context/filters'

export function Filters () {
  const { categories } = useCategories()
  const { filters, setFilters } = useContext(FiltersContext)

  // Genera un id uniquo para el input que no se reperira en ningun otro input
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    const newMinPrice = event.target.value
    setFilters(prevState => ({
      ...prevState,
      minPrice: newMinPrice
    }))
  }

  const handleChangeCategory = (event) => {
    const newCategory = event.target.value
    setFilters(prevState => ({
      ...prevState,
      category: newCategory
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Price</label>
        <input onChange={handleChangeMinPrice} value={filters.minPrice} type='range' id={minPriceFilterId} min='0' max='1000' />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select onChange={handleChangeCategory} id={categoryFilterId}>
          {
            categories.map(({ value, name }) => (
              <option key={value} value={value}>{name}</option>
            ))
          }
        </select>
      </div>
    </section>
  )
}
