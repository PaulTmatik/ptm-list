import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
    };
    this.clickItemHandler = this.clickItemHandler.bind(this);
    this.reciveSelectedItems = this.reciveSelectedItems.bind(this);
    this.selectTo = this.selectTo.bind(this);
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
          onClick={(e) => this.clickItemHandler(e, item)}
        >
          {item.data}
        </button>
      </li>
    ));
  }

  clickItemHandler(e, item) {
    const { onSelect } = this.props;

    if (e.shiftKey)
      this.setState(
        { selected: this.selectTo(item) },
        this.reciveSelectedItems
      );
    else this.setState({ selected: [item] }, this.reciveSelectedItems);
    //console.log(e.shiftKey);
  }

  reciveSelectedItems() {
    const { onSelect } = this.props;
    if (onSelect) onSelect(this.state.selected);
  }

  selectTo(item) {
    const { items } = this.props;
    const { selected } = this.state;
    if (selected.length === 0) return [item];

    const keysItems = items.map((item) => item.key);
    let firstElementIndex = keysItems.indexOf(selected[0].key);
    let secondElementIndex = keysItems.indexOf(item.key);

    if (firstElementIndex > secondElementIndex)
      [secondElementIndex, firstElementIndex] = [
        firstElementIndex,
        secondElementIndex,
      ];

    return secondElementIndex === items.length - 1
      ? items.slice(firstElementIndex)
      : items.slice(firstElementIndex, secondElementIndex + 1);
  }
}

export default List;
