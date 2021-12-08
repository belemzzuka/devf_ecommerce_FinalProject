import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';

export default function Home() {
    const [ producto,setProducto ] = useState([]);

    useEffect(() => {
        axios.get(`https://ecomerce-master.herokuapp.com/api/v1/item`)
        .then((response) => {
            console.log(response.data);
        if(response.status === 200){
            setProducto(response.data);
        }
        }).catch((error) => {
            console.log(error)
        })
    },[])

    return (

        <Container>
            <h1>Home</h1>
            <Row className="g-4">
            {Array.from(producto).map((item, idx) => {
                return(
                    <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body>
                            <Card.Title>{item.product_name}</Card.Title>
                            <Card.Text>
                                {item.description}
                                <h4>${item.price}</h4>
                            </Card.Text>
                            <a class="btn btn-primary" href="#" role="button">Comprar</a>
                        </Card.Body>
                    </Card>
                    </Col>
            )
            })}
            </Row>
        </Container>
    )
}
