import { Item } from "../item";
import './style.css'

export function ProjectList({portfolio}) {
  return (
    <ul className="project-list">
      {
        portfolio.map((el, i) => <Item key={`${i}_${el.category}`} img={el.img}/>)
      }
    </ul>
  )
}