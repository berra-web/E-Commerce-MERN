import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from '../components/auth';
import { itemTotal } from "./cartHelpers";
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { wishlistTotal } from "./wishListHelpers";

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ff9900" };
    } else {
        return { color: "#ffffff" };
    }
};

const Menu = ({ history }) => (
    <div>
        <Navbar className="mb-5" bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand>Sneackers</Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">


                        <Link
                            className="nav-link"
                            style={isActive(history, "/")}
                            to="/"
                        >
                            Home
                        </Link>



                        <Link
                            className="nav-link"
                            style={isActive(history, "/shop")}
                            to="/shop"
                        >
                            Shop
                        </Link>


                        <Link
                            className="nav-link"
                            style={isActive(history, "/WishList")}
                            to="/WishList"
                        >
                            Wishlist{" "}
                            <sup>
                                <small className="cart-badge">{wishlistTotal()}</small>
                            </sup>
                        </Link>



                        <Link
                            className="nav-link"
                            style={isActive(history, "/cart")}
                            to="/cart"
                        >
                            Cart{" "}
                            <sup>
                                <small className="cart-badge">{itemTotal()}</small>
                            </sup>
                        </Link>


                        {isAuthenticated() && isAuthenticated().user.role === 0 && (

                            <Link
                                className="nav-link"
                                style={isActive(history, "/user/dashboard")}
                                to="/user/dashboard"
                            >
                                Dashboard
                            </Link>

                        )}

                        {isAuthenticated() && isAuthenticated().user.role === 1 && (

                            <Link
                                className="nav-link"
                                style={isActive(history, "/admin/dashboard")}
                                to="/admin/dashboard"
                            >
                                Dashboard
                            </Link>

                        )}

                        {!isAuthenticated() && (
                            <Fragment>

                                <Link
                                    className="nav-link"
                                    style={isActive(history, "/signin")}
                                    to="/signin"
                                >
                                    Signin
                                </Link>

                                <Link
                                    className="nav-link"
                                    style={isActive(history, "/signup")}
                                    to="/signup"
                                >
                                    Signup
                                </Link>

                            </Fragment>
                        )}

                        {isAuthenticated() && (

                            <span
                                className="nav-link"
                                style={{ cursor: "pointer", color: "#ffffff" }}
                                onClick={() =>
                                    signout(() => {
                                        history.push("/");
                                    })
                                }
                            >
                                Signout
                            </span>

                        )}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
);

export default withRouter(Menu);


