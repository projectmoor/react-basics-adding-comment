import React from 'react'

// comment input box component
export default class CMTBox extends React.Component {

  render() {
    return <div>
      <label>User:</label><br />
      <input type="text" ref="user" /><br />
      <label>Comment:</label><br />
      <textarea cols="30" rows="4" ref="content"></textarea><br />

      <input type="button" value="submit" onClick={this.postComment} />
    </div>
  }

  postComment = () => {
    // 1. get new input data
    // 2. get data array from localStorage
    // 3. adding new data to array - unshift 
    // 4. save new data array to localStorage
    var cmtInfo = { user: this.refs.user.value, content: this.refs.content.value }
    var list = JSON.parse(localStorage.getItem('cmts') || '[]')
    list.unshift(cmtInfo)
    localStorage.setItem('cmts', JSON.stringify(list))

    this.refs.user.value = this.refs.content.value = ''

    this.props.reload()
  }
}