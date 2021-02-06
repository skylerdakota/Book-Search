import React, { component } from 'react';
import { Container } from 'react-bootstrap';
import Jumbotron from "../../components/Jumbotron";
import SavedBooks from "../components/SavedBooks/SavedBooks";
import API from "../../utils/API";

class Saved extends React{
    state = {
        savedBooks: []
    }

    componentDidMount = () => {
        this.getBooks();
    }

    getSavedBooks = () => {
        API.getBooks()
        .then(res => {
            this.setState({
                savedBooks: res.data
            })
            console.log(this.state.savedBooks);
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
                        {this.state.savedBooks.length ? (
                    <SavedBooks
                        books={this.state.savedBooks}
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