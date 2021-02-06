import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'

function SavedBooks(props){
    console.log(props)
    return(
        props.books.map((book) => (
            <Card key={book.id}>
                <Card.Header>
                <h2>{book.title}</h2>
                <p>{book.authors && book.authors.length > 1 ? book.authors.join(" & ") : book.authors}</p>
                </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col>
                                <img className="img-fluid" alt="Book thumbnail" src={book.image ? book.image:
                                        "https://img.icons8.com/cute-clipart/64/000000/no-image.png"}/>
                                        <br/>
                                <a href={book.link} target="_blank" rel="noreferrer" >
                                <Button variant="success" className="px-2 mt-2"></Button>
                                    </a>
                                <Button variant="success" className="px-2 ml-1 mt-2"></Button>
                            </Col>
                            <Col>
                                <p>{book.description}</p>
                            </Col>
                        </Row>           
                    </Card.Body>
            </Card>
        ))
    )
}
export default SavedBooks