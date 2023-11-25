// components/Search.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Container,
  FormControl,
  Button,
  ListGroup,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import causes from "../../CausesList.json";

const Search: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };

  const handleSuggestionClick = (selectedCause: string) => {
    setSearchTerm(selectedCause);
    navigate(`/search/${selectedCause}`);
  };

  const updateSuggestions = (input: string) => {
    const filteredSuggestions = causes.causes.filter((cause) =>
      cause.toLowerCase().includes(input.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSearchTerm(inputValue);
    updateSuggestions(inputValue);
  };

  return (
    <Container>
      <Form onSubmit={handleSearch} className="mb-3">
        <div className="input-group">
          <FormControl
            placeholder="Search for a cause..."
            aria-label="Search for a cause..."
            aria-describedby="search-addon"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <div className="input-group-append">
            <Button variant="outline-secondary" type="submit">
              Search
            </Button>
          </div>
        </div>
        {suggestions.length > 0 && (
          <ListGroup className="mt-2">
            {suggestions.map((cause) => (
              <ListGroup.Item
                key={cause}
                action
                onClick={() => handleSuggestionClick(cause)}
              >
                {cause}
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Form>
      {/* Additional components for displaying search results */}
      {/* For example, you can use CharityList component */}
      {/* <CharityList charities={searchResults} /> */}
    </Container>
  );
};

export default Search;
