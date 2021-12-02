import React from 'react'

// comment item component
export default class CMTItem extends React.Component {

  render() {
    return <div style={{ border: '1px solid #ccc', margin: '10px 0' }}>
      <h3>User: {this.props.user}</h3>
      <h5>Comment: {this.props.content}</h5>
    </div>
  }
}