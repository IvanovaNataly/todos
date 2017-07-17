import React from 'react';
import {connect} from 'react-redux';
import {clearErrors} from './actions';

class Error extends React.Component {

    render () {
        return(
                <ul className='error-content'>
                    {this.props.errors.map((error, i) => <li key={i} className="error-item" onClick={ this.props.clearErrors }>{error}</li>)}
                </ul>
        )
    }
}

function mapStateToProps(state) {
   return {
        errors: state.errors
   } 
}

function mapDispatchToProps(dispatch) {
   return {
        clearErrors: () => dispatch( clearErrors() )
   } 
}

export default connect(mapStateToProps, mapDispatchToProps)(Error)