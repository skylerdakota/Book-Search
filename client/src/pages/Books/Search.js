import React from 'react'
import API from "../utils/API";
import Nav from "../../components/Nav";
import Container from 'react-bootstrap'
import Jumbotron from "../../components/Jumbotron";
import { Input, FormBtn } from "../../components/Form";
import Results from "../../components/Results";


class Search extends React.Component {

    state = {
        books: [],
        searchTerm: ""
    };

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault(); 
        this.getBook();
    };

    getBook = () => {
        const title = this.state.searchTerm.replace(/ /g,"%20").toLowerCase()
        console.log(title); 
        API.getBook(title)
        .then(res => {
            this.setState({
            books: res.data.items
        })}).catch(err => console.log(err)); 
    };

    saveBook = bookData => {
        API.saveBook({
            _id: bookData.id,
            title: bookData.title,
            authors: bookData.authors,
            description: bookData.description,
            image: bookData.image,
            link: bookData.link
        }).then(console.log("Success!"))
        .catch(err => console.log(err))
    };

    render(){
    return (
   <div>
     <Nav />
     <Container>
          <Jumbotron>
          <h1>Google Book Search</h1>
          <h6>Search for and save books you like!</h6>
        </Jumbotron>
        <form>
          <Input
            onChange={handleInputChange}
            name="search"
            placeholder="Title (required)"
            value={this.state.search}
          />
          <FormBtn
            onClick={handleFormSubmit}
          >
            Search
          </FormBtn>
        </form>
        {this.state.books.length ? (
        <Results 
            books={this.state.books}
            save={this.saveBook}
        />
        ) : (
          <div>
              <hr/>
          <p>No results to display</p>
          </div>
      )};
     </Container>
   </div>
    );
  }
}

export default Search;
