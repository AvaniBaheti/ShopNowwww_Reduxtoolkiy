import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Header = () => {
    return (
        <>

            <Navbar bg="primary" data-bs-theme="dark" style={{ height: "60px" }}>
                <Container>
                    <h4 className='text-light ' style={{fontFamily:'cursive'}}>Shop</h4>
                    <div id='ex4'>
                        <span className='p1 fa-stack fa-2x has-badge' data-count={1}>
                            <i class="fa-solid fa-cart-shopping text-light"></i>
                        </span>
                    </div>

                </Container>

            </Navbar>
        </>
    )
}
export default Header