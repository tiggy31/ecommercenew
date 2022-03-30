import React from 'react'
import './main-section.styles.scss'
import { withRouter } from 'react-router-dom'
import AREA from '../../assets/AREA.jpg'


const mainSection = ({history}) => {
  return(
      <div className= "main-section-container">
          <div className="main-section-middle">
              <div className = "ms-m-image">
                  <img src={AREA} alt= "ssense-dress"/>
              </div>
              <div className = "ms-m-description">
                  <h2>
                      FOR THE BEST IN YOU
                  </h2>

                 <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur magni quaerat odio expedita? Quos animi sunt, quidem non officia sed asperiores eum quaerat beatae suscipit, ut, debitis voluptatibus ab! Quas!
                 </p>
                 <button className="button is-black" id = 'shop-now' onClick={() => history.push('/product/1')}>
                       Perfect Dress
                 </button>
              </div>
          </div>
      </div>
  )
}

export default withRouter(mainSection)