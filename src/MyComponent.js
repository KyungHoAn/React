import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component{
    render(){
        const {name, favoriteNumber, children} = this.props;
        return(
            <div>
                Hi, my name is {name}. <br/>
                children value is {children}.
                <br/>
                i like number {favoriteNumber}.
            </div>
        );
    }
}

MyComponent.defaultProps ={
    name:'basic name'
};

MyComponent.propTypes = {
    name : PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
}

export default MyComponent;