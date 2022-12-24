import React from 'react'
import CardCol from './CardCol'

const Menu = ({menuItem}) => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6 mx-auto ml-16">
            {
                menuItem.map((item) =>{
                    return (                      
                        <CardCol
                        key={item._id}
                        id={item._id} 
                        image={item.image}
                        title={item.title} 
                        description={item.headline} 
                        catogery= {item.type}
                        author= {item.user.name}
                        />
                    )
                }
                
            )}
        </div>
    )
}

export default Menu;

// <div className="">
// <img src={item.image} alt=""/>
// <h2>{item.title}</h2>
// <p>{item.description}</p>
// </div>                    