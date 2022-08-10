import { Toolbar } from './../toolbar/index';
import { ProjectList } from './../project-list/index';

export function Portfolio({filters, portfolio, filter, onSelectFilter}) {
  return (
    <div className="portfolio">
      <div className="portfolio__control">
      <Toolbar filters={filters} select={filter}
  onSelectFilter={onSelectFilter}/>

      </div>
      <div className="portfolio__content">
      <ProjectList portfolio={portfolio}/>
      </div>
    </div>
  )
}