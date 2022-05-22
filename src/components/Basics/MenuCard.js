import React from 'react'

const menuCard = ({menuData}) => {
  

  return (
    <>
      <section className='main-card--container'>
        {menuData.map((currEle)=> {

            const {id, category, name, image} = currEle;
            
          return (
            <>
              <div className='card-container' key={id}>
                <div className='card'>
                  <div className='card-body'>
                    <span className='card-number card-circle subtle'>{id}</span>
                    <span className='card-author subtle'>{category}</span>
                    <h2 className='card-title'>{name}</h2>
                    <span className='card-description subtle'>
                      I love maggi really...sgfdggfgregerg ergjnerg 
                      arfgerghe rg ergfhnergf edrfhergf erfgbnerjuge
                      slerjglrjgearfgef
                      rgjelorjgeolrgjeogeegeg.
                    </span>
                    <div className='card-read'>Read</div>
                  </div>
                  <img src={image} alt='images' className='card-media'/>

                  <span className='card-tag subtle'>Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section> 
    </>
  )
}

export default menuCard