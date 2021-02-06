import React from 'react';
import { Container } from 'react-bootstrap';
import Jumbotron from "../../components/Jumbotron";
import SavedBooks from "../components/SavedBooks/SavedBooks";
import API from "../../utils/API";

class Saved extends React.Component {
    state = {
        books: []
    }

    componentDidMount = () => {
        this.getSavedBooks();
    }

    getSavedBooks = () => {
        API.getSavedBooks()
        .then(res => {
            this.setState({
                books: res.data
            })
            console.log(this.state.books);
        })
        .catch(err => console.log( err))
    }


    render(){
        return(
            <div>
            <Container>
                <Jumbotron>
                    <h1>Google Book Search</h1>
                    <h6>Your saved books</h6>
                </Jumbotron>
                        {this.state.books.length ? (
                    <SavedBooks
                        books={this.state.books}
                        />
                    ) : (
                    <div>
                        <hr/>
                    <p>No results to display</p>
                    </div>
                )}
            </Container>
            </div>
        )
    }
}
export default Saved