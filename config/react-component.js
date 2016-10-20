var componentContent = (componentName) =>{
  return `
import React, {Component, PropTypes} from 'react';

class ${componentName} extends Component {
  render () {
    return (
      <div>
        
      </div>
    );
  }
}

${componentName}.propTypes = {

}

export default ${componentName}
`
}

exports.componentContent = componentContent;

