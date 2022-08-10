export function Item({img}) {
  const alt = img.slice(img.lastIndexOf('/') + 1, img.lastIndexOf('.'))
  return (
    <li className="project-list__item">
      <img src={img} alt={alt} className="project-list__image" />
    </li>
  )
}