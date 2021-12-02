import React from 'react'
import CMTItem from './CmtItem.jsx'
import CMTBox from './CmtBox.jsx'

// comment list component
export default class CMTList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        { user: 'zs', content: '123' },
        { user: 'ls', content: 'qqq' },
        { user: 'xiaohong', content: 'www' }
      ]
    }
  }

  // load comments before rendering component
  componentWillMount() {
    this.loadCmts()
  }

  render() {
    return <div>
      <h1>Add your comment</h1>
      <CMTBox reload={this.loadCmts}></CMTBox>

      <hr />


      {/* render comment items */}
      {this.state.list.map((item, i) => {
        return <CMTItem key={i} {...item}></CMTItem>
      })}
    </div>
  }

  // get data from localStorage and update this.state.list
  loadCmts = () => {
    var list = JSON.parse(localStorage.getItem('cmts') || '[]')
    this.setState({
      list
    })
  }
}