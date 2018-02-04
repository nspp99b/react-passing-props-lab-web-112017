import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }

  componentWillMount() {
    this.fetchFilters();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filterArray => this.setState({ filters: filterArray }));
  }

  componentDidMount() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruitArray => this.setState({ fruit: fruitArray }));
  }

  updateFilterCallback = (event) => {
    this.setState({
      currentFilter: event.target.value
    })
  }

  render() {
    return (
      <FruitBasket
        fruit={this.state.fruit}
        filters={this.state.filters}
        currentFilter={this.state.currentFilter}
        updateFilterCallback={this.updateFilterCallback}
        />
    )
  }
}

export default App;
