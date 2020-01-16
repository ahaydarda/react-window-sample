import React from "react";
import { render } from "react-dom";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import Demo from './Demo.js';
import "./Styles.css";

const Row = ({ index, style }) => (
  <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
    Row {index}
  </div>
);
const App = () => ( <Demo />
  // <AutoSizer>
  //   {({ height, width }) => (
  //     <List
  //       className="List"
  //       height={height}
  //       itemCount={1000}
  //       itemSize={35}
  //       width={width}
  //     >
  //       {Demo}
  //     </List>
  //   )}
  // </AutoSizer>
);


export default App;
