import React, { Component } from "react";

class List extends Component {
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
        <button className="ptm_list__button">
          {item.data}
        </button>
      </li>
    ));
  }
}

export default List;
