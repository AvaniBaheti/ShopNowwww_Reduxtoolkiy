import React, { useState } from 'react'
import "./style.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardsData from "./CardData";


const Home = () => {
    const [cartData, setCartData] = useState(CardsData);



    // add to cart 
    const send = (e) => {

    }
    return (
        <>
            <section className='iteam_section mt-4 container'>
                <h2 className='px-4' style={{ fontWeight: 400, fontFamily: 'cursive', backgroundColor:'white',  color:'black' }}>Indore Restaurants</h2>
                <div className='row mt-2 d-flex justify-content-around align-items-center'>
                    {
                        cartData.map((element, index) => {
                            return (
                                <>
                                    <Card style={{ width: "22rem", border: "none" }} className='hove mb-4'>
                                        <Card.Img variant='top' className='cd' src={element.imgdata} />

                                        <div className="card_body">
                                            <div className="upper_data d-flex justify-content-between align-items-center" style={{ fontFamily: 'cursive' }}>
                                                <h4 style={{ fontFamily: 'cursive' }} className='mt-2'>{element.dish}</h4>
                                                <span style={{ fontFamily: 'cursive' }}>{element.rating}&nbsp;★</span>
                                            </div>

                                            <div className="lower_data d-flex justify-content-between " style={{ fontFamily: 'cursive' }}>
                                                <h5 style={{ fontFamily: 'cursive' }}>{element.address}</h5>
                                                <span style={{ fontFamily: 'cursive' }}>₹ {element.price}</span>
                                            </div>
                                            <div className="extra"></div>

                                            <div className="last_data d-flex justify-content-between align-items-center">
                                                <img src={element.arrimg} className='limg' alt="" />
                                                <Button style={{ width: "150px", background: "#ff3054db", border: "none", fontFamily: 'cursive' }} variant='outline-light'
                                                    className='mt-2 mb-2'
                                                    onClick={() => send(element)}
                                                >Add In Box</Button>
                                                <img src={element.delimg} className='laimg' alt="" />

                                            </div>
                                        </div>
                                    </Card>
                                </>
                            )
                        })
                    }

                </div>
            </section>
        </>
    )
}

export default Home