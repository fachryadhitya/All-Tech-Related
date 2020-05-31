import React from "react";
import {ReactComponent as Check} from './check.svg'

const List = ({ list, onRemoveItem }) =>
  list.map((item) => (
    <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
  ));

const Item = ({ item, onRemoveItem }) => (
  <div className="item">
    <span style={{ width: "40%" }}>
      <a href={item.url}>{item.title}</a>
    </span>
    <br></br>
    <span style={{ width: "30%" }}>Author: {item.author}</span> <br></br>
    <span style={{ width: "30%" }}>Comments: {item.num_comments}</span>{" "}
    <br></br>
    <span style={{ width: "30%" }}>Points: {item.points}</span> <br></br>
    <span style={{ width: "30%" }}>
      <button
        className="button button_small"
        type="button"
        onClick={() => onRemoveItem(item)}
      >
        <Check height="18px" width="18px" />
      </button>
    </span>{" "}
    <hr></hr>
  </div>
);

export default List;
