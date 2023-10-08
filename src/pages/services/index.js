import React from 'react'
import services from './data.json';
import './services.css'

const Services = () => {

    return (
        <>
            <div className='page-content'>
                <h6>Services</h6>
                <div className='card-view'>

                    {services.data.map((item, index) => (
                        // console.log(item)
                        <div key={index}>

                            <div className='card'>
                                <img src={item.backgroundImage} alt={`BAckground ${item.title}`} />
                                <div className='card-text'>
                                    <img src={item.icon} alt="icon" ></img>
                                    <h3>{item.title}</h3>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Services