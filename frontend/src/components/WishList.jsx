import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import { getWishList } from './wishListHelpers';
import Card from './Card';
import { Row, Col, Container } from 'react-bootstrap';


const WishList = () => {
  const [items, setItems] = useState([]);
  const [run, setRun] = useState(false);

  useEffect(() => {
    setItems(getWishList());
  }, [run]);

  const showItems = items => {
    return (
      <div>
        <h2>Your wishlist has {`${items.length}`} items</h2>
        <hr />
        {items.map((product, i) => (
          <Card
            key={i}
            product={product}
            showAddToCartButton={true}
            showAddToWishListButton={false}
            cartUpdate={false}
            showRemoveProductButton={false}
            showRemoveProductButtonWishList={true}
            setRun={setRun}
            run={run}
          />
        ))}
      </div>
    );
  };

  const noItemsMessage = () => (
    <h2>
      Your wishlist is empty. <br /> <Link to="/shop">Add products here!</Link>
    </h2>
  );

  return (
    <Layout
      title="Wishlist"
      description="Manage your favorite items. Add, remove, send to cart or continue shopping."
      className="container-fluid"
    >
      <Container fluid>
      <Row>
        <Col sm={12} md={6} lg={9} xl={6}>{items.length > 0 ? showItems(items) : noItemsMessage()}</Col>


      </Row>
      </Container>
    </Layout>
  );
};

export default WishList;
