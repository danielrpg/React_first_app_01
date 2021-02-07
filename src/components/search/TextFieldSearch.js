import React from 'react';

export class TextFieldSearch extends React.Component {
    render() {
        // let textFieldStyle = {
        //     padding: 5,
        //     margin: 10,
        //     border: "5 dashed",
        //     backgroundColor: "#FFF000"
        // }

        return (
            <>
                <input 
                    type="text" 
                    placeholder="Please enter item..."
                    style={this.props.textFieldStyle} 
                />
            </>
        );
    }
}
