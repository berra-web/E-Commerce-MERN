import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { read, listRelated } from './apiCore';
// import Card from './Card';
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem, Form } from 'react-bootstrap'
import ShowImage from './ShowImage';

const Product = props => {
    const [product, setProduct] = useState({});
    const [relatedProduct, setRelatedProduct] = useState([]);
    const [error, setError] = useState(false);

    const loadSingleProduct = productId => {
        read(productId).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProduct(data);
                // fetch related products
                listRelated(data._id).then(data => {
                    if (data.error) {
                        setError(data.error);
                    } else {
                        setRelatedProduct(data);
                    }
                });
            }
        });
    };

    useEffect(() => {
        const productId = props.match.params.productId;
        loadSingleProduct(productId);
    }, [props]);

    return (
        <Layout
            title={product && product.name}
            description={product && product.description && product.description.substring(0, 100)}
            className="container-fluid"
        >
    

                <Row>
                <Col md={6}>
                    
            <ShowImage item={product} url="product" />
          </Col>
          <Col md={3}>
            <ListGroup>
              <ListGroupItem>
                <h2>{product.name}</h2>
              </ListGroupItem>
              
              <ListGroupItem>
                Price: ${product.price}
              </ListGroupItem>
              <ListGroupItem>
                description: {product.description}
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroupItem>
                  <Row>
                    <Col>
                      Price:
                    
                    </Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>

                </ListGroupItem>
              
                
                

              </ListGroup>
            </Card>
          </Col>
          </Row>
            {/* </div> */}
        </Layout>
    );
};

export default Product;
