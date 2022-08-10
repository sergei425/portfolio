import { Toolbar } from './../toolbar/index';

export function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio__control">
      <Toolbar
  // filters={}
  // selected={}
  onSelectFilter={(filter) => {console.log(filter);}}/>

      </div>
      <div className="portfolio__content">
      
      </div>
    </div>
  )
}