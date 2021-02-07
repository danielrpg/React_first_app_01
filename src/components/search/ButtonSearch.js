import React from 'react';

export class ButtonSearch extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <>
                <button type="submit" style={this.props.buttonStyle}>{this.props.nameButton}</button>
            </>    
        );
    }

}
