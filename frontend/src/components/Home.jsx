import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { getProducts } from './apiCore';
import { Col} from 'react-bootstrap'

import Product from './Card';




export default function Home(url,item) {
    const [productsBySell, setProductsBySell] = useState([]);
    const [, setProductsByArrival] = useState([]);
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
