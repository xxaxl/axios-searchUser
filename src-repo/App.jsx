import { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  state = {
    isLoading:false,
    repo:{}
  }
  componentDidMount () {
    this.setState({
      isLoading:true
    })
    axios({
      method:'GET',
      url:'https://api.github.com/search/repositories?q=r&sort=stars'
    })
    .then((response)=>{

      const { name,html_url } = response.data.items[0]
      this.setState({
        isLoading:false,
        repo:{
          name,html_url
        }
      })
    })
    .catch((error)=>{
      console.log(error)
      this.setState({
        isLoading:false,
      })
      alert('网络错误')
    })
  }
  render () {
    const { isLoading,repo } = this.state
    if (isLoading) {
      return <h1>loading~</h1>
    }
    return <h1>The most popular depo <a href={repo.html_url}>{repo.name}</a></h1>
    
  }
}