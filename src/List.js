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
    return items.map((item) => <li key={item.key}>{item.data}</li>);
  }
}

export default List;
