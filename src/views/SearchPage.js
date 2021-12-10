import React from 'react'
//import Search from '../components/Navbar/SearchBar'
import { Card, Row, Col, Container } from 'react-bootstrap';
import { Link, useLocation, Switch, Route, useParams, BrowserRouter as Router } from 'react-router-dom'
import { useProductContext } from '../context/productContext';


export default function SearchPage() {
  let resultadosBusqueda = [];
  //console.log(resultadoFinales);
  const contextProduct = useProductContext ();
  const search = useLocation().search;
  const filtro = new URLSearchParams(search).get('filtro');
  console.log(filtro)
  resultadosBusqueda = contextProduct.producto.filter(item => item.product_name.toLowerCase().includes(filtro));
  console.log(resultadosBusqueda);



  
  return (
    <Router>
    <Container>
    <h1>Home</h1>
    <Row className="g-4">
    {Array.from(resultadosBusqueda).map((item, idx) => {
        return(
            <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  
                    <Card.Title><Link to={`/item/${item._id}`}>
                      {item.product_name}
                      </Link></Card.Title>
                    <Card.Text>
                        {item.description}
                        <h3>$ {item.price}</h3>
                    </Card.Text>
                    <a class="btn btn-primary" href="#" role="button">Comprar</a>
                </Card.Body>
            </Card>
            </Col>
        )
    })}
    </Row>
    <Switch>
          <Route path="/item/:id" children={<Child />} />
        </Switch>
    </Container>
    </Router>
  )
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}
