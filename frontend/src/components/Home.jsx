import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { getProducts } from './apiCore';
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Product from './Card';
import { Carousel } from 'react-bootstrap'
import ShowImage from './ShowImage';


export default function Home(url,item) {
    const [productsBySell, setProductsBySell] = useState([]);
    const [productsByArrival, setProductsByArrival] = useState([]);
    const [, setError] = useState(false);

    const loadProductsBySell = () => {
        getProducts('sold').then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProductsBySell(data);
            }
        });
    };

    const loadProductsByArrival = () => {
        getProducts('createdAt').then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProductsByArrival(data);
            }
        });
    };

    useEffect(() => {
        loadProductsBySell()
        loadProductsByArrival()
    }, []);

    return (
        <Layout title='Home Page' description='Node React E-Commerce App'
            className="container-fluid">

            <h2 className="mb-4">New Arrivals</h2>
          <Carousel fade controls={false} indicators interval={3000} pause={false} className='bg-dark'>
          {productsByArrival.map((product, i) => (
            <Carousel.Item key={product.id}>
              <Link to={`/product/${product.id}`}>
                <ShowImage  item={product} url="product" />
                <Carousel.Caption className='carousel-caption'>
                  <h2>
                    {product.name} (${product.price})
                  </h2>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          )
          )}
        
      
        </Carousel>

            {/* <div className="row">
                {productsByArrival.map((product, i) =>
                (
                <Col sm={12} md={6} lg={4} xl={3}>
                    <Product key={i} product={product} />
                    </Col>
                ))}
            </div> */}

            <h2 className="mb-4">Best Sellers</h2>
            <div className="row">
                {productsBySell.map((product, i) =>
                (
                    <Col xs={12} sm={12} md={12} lg={6} xl={4}>
                    <Product key={i} product={product} />
                </Col>
                ))};
            </div>
        </Layout>
    );
};
