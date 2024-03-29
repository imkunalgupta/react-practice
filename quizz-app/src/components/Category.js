import React, { Component } from 'react';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = { categories: null };
  }
  componentDidMount() {
    fetch('https://opentdb.com/api_category.php')
      .then((res) => res.json())
      .then((categories) => {
        console.log(categories.trivia_categories);
        this.setState({ categories: categories.trivia_categories });
      });
  }
  render() {
    return (
      <>
        {this.state.categories ? (
          <section className="categories-sec sec-padding">
            <h2 className="sec-heading">Select Categories</h2>
            <div className="container flex fw categories-div">
              {this.state.categories.map((category) => {
                return (
                  <button
                    onClick={(event) => {
                      this.props.handleAddCategory(event, category);
                    }}
                    className={
                      this.props.category === category
                        ? 'btn btn-sec'
                        : 'bn btn-pri'
                    }
                    key={category.id}
                  >
                    {category.name}
                  </button>
                );
              })}
            </div>
          </section>
        ) : (
          ''
        )}
      </>
    );
  }
}
export default Category;
