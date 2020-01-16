import 'rc-tree-select/assets/index.css';
import TreeSelect, { SHOW_PARENT } from 'rc-tree-select';
import React from 'react';
import ReactDOM from 'react-dom';

import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader";

const { TreeNode } = TreeSelect;

class Demo extends React.Component {
  state = {
    value: undefined,
  };

  onChange = value => {
    console.log(value);
    this.setState({ value });
  };

   
  render() {
    const parent = { value:'parent1', title:'title1', key:'key1', children:[]};
    for(let i =2;i<1000;i++){
      const parentX = { value:'parent'+i, title:'title'+i, key:'key'+i};
      parent.children.push(parentX);
    }
    const root = [parent];

    const getTreeNode = ({value, title, key, children}) =>{
       if(children && children.length >0) {
           return (
              <TreeNode value={value} title={title} key={key}>
                  <List
                            className="List"
                            outerElementType="table"
                            innerElementType="tbody"
                            height={150}
                            itemCount={1000}
                            itemSize={35}
                            style={{ display: "block" }}
                            width={300}
                    >
                        { children.map(child=> getTreeNode(child))}
                    </List>
                  
              </TreeNode>
            );
       } else {
           return ( <TreeNode value={value} title={title} key={key}/>)
       }
    }
    const Row = ({ index, style }) => (
        <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
          {parent.children[index].title}
        </div>
      );
    return (
       
        <div height={300} width={500}>
            
            <TreeSelect
                showSearch
                style={{ width: '500px' }}
                value={this.state.value}
                dropdownStyle={{ maxHeight: 400, overflow: 'hidden' }}
                placeholder="Please select"
                allowClear
                treeDefaultExpandAll
                onChange={this.onChange}
                treeCheckable ={true}
            >
                <List
                    className="List"
                    height={150}
                    itemCount={parent.children.length}
                    itemSize={35}
                    width={300}
                >
                    {Row}
                </List>
            </TreeSelect>
        </div>
           
        )
    
  }
}

export default Demo;
          
{/* <TreeNode value="parent 1" title="parent 1" key="0-1">
<TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
  <TreeNode value="leaf1" title="my leaf" key="random" />
  <TreeNode value="leaf2" title="your leaf" key="random1" />
</TreeNode>
<TreeNode value="parent 1-1" title="parent 1-1" key="random2">
  <TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} key="random3" />
</TreeNode>
</TreeNode> */}


