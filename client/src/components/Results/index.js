import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'

function Results(props){
    console.log(props)

    return(
        props.books.map((book) => (
            <Card key={book.id}>
                <Card.Header>
                <h3>{book.volumeInfo.title}</h3>
                <p className="lead">{book.volumeInfo.authors && book.volumeInfo.authors.length > 1 ? book.volumeInfo.authors.join(" & ") : book.volumeInfo.authors}</p>
                </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col>
                                <img className="img-fluid" alt="Book thumbnail" src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail :
                                        "https://img.icons8.com/cute-clipart/64/000000/no-image.png"}/>
                                        <br/>
                                    <a href={book.volumeInfo.previewLink} rel="noreferrer" >
                                    <Button variant="success" className="px-2 mt-2"></Button>
                                    </a>
                                    <Button variant="success" className="px-2 ml-1 mt-2" onClick={props.save}></Button>       
                            </Col>
                            <Col>
                                <p>{book.volumeInfo.description}</p>
                            </Col>
                        </Row>           
                    </Card.Body>
            </Card>
        ))
    )
}
export default Results