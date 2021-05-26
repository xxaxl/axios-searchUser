import { Component } from "react";
import Search from './pages/Search'
import UserList from './pages/UserList'
import axios from "axios";

export default class App extends Component {
  state = {
    isLoading:false,
    users:[]
  }
  setSearch = async(searchName) => {
    if (!searchName) {
      alert('请输入要搜索的内容')
      return 
    }
    this.setState({
      isLoading:true
    })
    try {
      // 发送请求
      const users = await axios({
        method: "GET",
        url: `https://api.github.com/search/users?q=${searchName}`,
      });
      this.setState({
        isLoading:false,
        users:users.data.items.map((item)=>({id:item.id,login:item.login,avatar_url:item.avatar_url,html_url:item.html_url}))
      })
      console.log(users)
      // console.log(this.state.users);
    } catch (error) {
      console.log(error)
      this.setState({
        isLoading:false
      })
    }
  }
  render() {
    const { users,isLoading } = this.state
    console.log(this.state,'App')
    return (
      <div className="container">
        <Search setSearch={this.setSearch} />
        <UserList users={users} isLoading={isLoading}/>
      </div>
    );
  }
}
