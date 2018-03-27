import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { errorSelector } from './reducers';


class Error extends PureComponent {
  
  render() {
    const { error } = this.props;
    if(!error) return null;
   

    const errorMessage = error.message || error.error || error.toString();

    return (
      <div className="error">
        {errorMessage}
      </div>
    );
  }
}

export default connect(
  state => ({ error: errorSelector(state) }),
  null
)(Error);