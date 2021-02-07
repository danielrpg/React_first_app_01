import React from 'react';
import itemList from '../../shared/Item';
import NewItemComponent from './NewItemComponent';

class ItemListComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            list: itemList
        }
        // console.log(this.state);
        this.deleteItem = this.deleteItem.bind(this);
        this.modifyItem = this.modifyItem.bind(this);
    }

    deleteItem(id) {
        const isNotId = item => item.id !== id;
        const updatedList = this.state.list.filter(isNotId);
        this.setState({ list: updatedList }); 
    }

    modifyItem(id) {

    }

    render() {
        return  <> 
                 <NewItemComponent list={this.state.list} />
                {
                    this.state.list.map(item => {
                      return (
                          <div key={item.id}>
                              Title: {item.title} <br />
                              Author: {item.author} <br />
                              Rate: {item.rate} <br />
                              <button 
                                onClick={() => this.deleteItem(item.id)}
                              >
                                  Delete Item
                              </button>
                              <button
                               onClick={() => this.modifyItem(item.id)}
                               >
                                   Modify Item
                               </button>
                          </div>
                      );  
                    })
                    // itemList.map(item => <div key={item.id}> {item.title} </div>)
                }
        </>;
    }

}

export default ItemListComponent;