import React, {Component} from 'react';

class Form extends Component {
  render() {
    return (
      <div className="jumbotron">
        <form>
          <input type="text" onChange={this.props.onChange} value={this.props.defaultValue}/>
        </form>
      </div>
    )
  }
}

export default Form
