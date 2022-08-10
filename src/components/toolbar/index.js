import './style.css'

export function Toolbar({filters, select, onSelectFilter}) {
  return (
    <ul className="toolbar">
      {filters.map((filter, i) => <li key={`${i}_${filter}`}className="toolbar__item">
      <button className={filter === select ? 'active' : null} onClick={() => onSelectFilter(filter)}>
          {filter}
        </button> 
      </li>)}
    </ul>
  )
}