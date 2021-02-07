import React from 'react';
import { TextFieldSearch } from './TextFieldSearch';
import { ButtonSearch } from './ButtonSearch';

class SearchComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let textFieldStyle = {
            padding: 5,
            margin: 10,
            border: "5 dashed",
            backgroundColor: "#FFF000"
        }

        // let buttonStyle = {
        //     padding: 5,
        //     margin: 10,
        //     border: "5 dashed",
        //     backgroundColor: "#FFF000"
        // }
        return (
            <>
                <TextFieldSearch textFieldStyle={textFieldStyle} />
                <ButtonSearch nameButton="Search Item" buttonStyle={this.props.buttonProp}  />
            </>
        );
    }
}

export default SearchComponent;