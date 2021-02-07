import React from 'react';

class NewItemComponent extends React.Component {

    constructor(props) {
        super(props);

        this.createItem = this.createItem.bind(this);
        this.onTextChange = this.onTextChange.bind(this);

        this.state = {
            list: this.props.list,
            item: {
                title: '',
                author: '',
                rate: 1
            }
        }
       // console.log(this.state);
    }

    createItem() {
        console.log(`Create Item`);
    }

    onTextChange(event) {
        console.log( event.target.value );
        const title = event.target.value;
        console.log(title);
        const item = this.state.item;
        console.log(item);
        item.title = title;
        this.setState({ item: item });
        console.log(this.state);
    }

    render() {
        return (
            <form>
              <h1> New Item </h1>
              <label> Title</label> <input type="text" onChange={ this.onTextChange } /> <br />
              <label> Author </label> <input type="text" /> <br />
              <label> Rate </label> <input type="range" min="1" max="5" /> <br />
              <button 
                type="button"
                onClick={() => this.createItem()}
              > 
              Create Item 
              </button>
            </form>
        );
    }
}

export default NewItemComponent;