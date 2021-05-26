import { Component } from "react";
import PropTypes from 'prop-types';

export default class Search extends Component {
  static propTypes = {
    setSearch:PropTypes.func.isRequired
  }
  state = {
    searchName: "",
  };
  handleChange = (e) => {
    if (!e.target.value.trim()) {
      alert("请输入要搜索的内容");
      return;
    }
    this.setState({
      searchName: e.target.value.trim(),
    });
  };
  search = () => {
    this.props.setSearch(this.state.searchName)
    
    
  };
  render() {
    console.log('search')
    return (
      <div>
        <section className="jumbotron">
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <div>
            <input
              type="text"
              placeholder="enter the name you search"
              onChange={this.handleChange}
            />
            <button onClick={this.search}>Search</button>
          </div>
        </section>
      </div>
    );
  }
}
