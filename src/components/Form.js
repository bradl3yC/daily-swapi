import React, {Component} from 'react';

class Form extends Component {
  render() {
    return (
      <div className="jumbotron">
        <form onSubmit={this.props.onSubmit}>
          <input type="text" name="pilot" onChange={this.props.onChange} value={this.props.defaultValue}/>
          <button type="submit" value="Submit">Submit</button>
        </form>
        <h4>{this.props.pilot && <span> Welcome, {this.props.pilot}! </span>}</h4>
      </div>
    )
  }
}

export default Form
