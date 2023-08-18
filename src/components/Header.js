import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
const Header = () => {
    const {carts} = useSelector((state) => state.allCart);
    return (
        <>

            <Navbar bg="primary" data-bs-theme="dark" style={{ height: "60px" }}>
            <Container>
                <NavLink to="/" className="text-decoration-none text-light mx-2">
                    <h3 className='text-light' style={{fontFamily:'cursive'}}>Shop</h3>
                </NavLink>
                    <NavLink to="/cart" className="text-decoration-none text-light mx-2">
                    <div id='ex4'>
                        <span className='p1 fa-stack fa-2x has-badge' data-count={carts.length}>
                            <i class="fa-solid fa-cart-shopping"></i>
                        </span>
                    </div>
                    </NavLink>
                   
                </Container>

            </Navbar>
        </>
    )
}
export default Header