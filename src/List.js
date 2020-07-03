import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);
    this.clickItemHandler = this.clickItemHandler.bind(this);
  }
  render() {
    const { items } = this.props;
    return (
      <div className="ptm_list">
        <ul className="ptm_list__items">
          {items !== undefined ? this.renderItems(items) : null}
        </ul>
      </div>
    );
  }

  renderItems(items) {
    return items.map((item) => (
      <li key={item.key} className="ptm_list__item">
        <button
          className="ptm_list__button"
          onClick={() => this.clickItemHandler(item)}
        >
          {item.data}
        </button>
      </li>
    ));
  }

  clickItemHandler(item) {
    const { onSelect } = this.props;
    if (onSelect) onSelect([item]);
  }
}

export default List;
