import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import articles from '../data/articles.json';

class Articles extends React.Component {
  state = {
    searchTerm: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ searchTerm: value });
  };
  render() {
    let filterArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(this.state.searchTerm)
    );
    return (
      <>
        <input
          placeholder="Search"
          className="Search"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        ></input>
        <ul className="articles">
          {filterArticles.map((article) => (
            <li>
              <Link to={'articles/' + article.slug}>
                <h3>{article.title}</h3>
              </Link>
              <small>{article.author}</small>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
export default withRouter(Articles);
