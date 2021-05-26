import { Component } from "react";
import PropTypes from "prop-types";

export default class UserList extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };
  render() {
    const { users, isLoading } = this.props;
    if (isLoading) {
      return <h1>loading~</h1>;
    }
    if (users.length) {
      console.log(this.props, "userlist");

      return (
        <div className="row">
          {users.map((item) => {
            return (
              <div className="card" key={item.id}>
                {/* id:item.id,login:item.login,avatar_url:item.avatar_url,html_url:item.html_url */}
                <a href={item.html_url} target="_blank" rel="noreferrer">
                  <img
                    src={item.avatar_url}
                    style={{ width: "100%" }}
                    alt={item.login}
                  />
                </a>
                <p className="card-text">{item.login}</p>
              </div>
            );
          })}
        </div>
      );
    }
    if (!isLoading && !users.length) {
      return <h1>search user list</h1>;
    }
  }
}
