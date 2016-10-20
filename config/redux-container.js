var containerContent = (containerName) =>{
  return `
import React, {Component} from 'react';

import { connect } from 'react-redux';

class ${containerName} extends Component {
  render() {
    return (

    );
  }
}

function mapStateToProps (state) {
  return {
    prop: state.prop
  };
}

export default connect(mapStateToProps)(${containerName});
`
}

exports.containerContent = containerContent;