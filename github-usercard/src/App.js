import React from 'react';
import './App.css';
import UserCard from "./UserCard";
import styled from "styled-components";


const Title = styled.h1`
  font-size: 3em;
  text-decoration: underline;
  margin-left: 35%;
`;

const Div = styled.div`
  background-image: url("https://www.whiteheadassoc.com/wp-content/uploads/2018/09/iStock-998993038.jpg");
  height: 750px;
`;

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      userInfo: {},
      followers: []
    }
  }

  componentDidMount() {
    fetch("https://api.github.com/users/jhoyt200931")
      .then(res => res.json())
        .then((json) => {
          this.setState({
            userInfo: json
          })
          console.log("User Info: ", this.state.userInfo)
        })
          .catch(err => {
            console.log(err);
          });
    fetch("https://api.github.com/users/jhoyt200931/followers")
      .then(res => res.json())
          .then((json) => {
            this.setState({
              followers: json
            })
            console.log("Followers: ",this.state.followers)
          })
            .catch(err => {
              console.log(err);
            });
  }

  render() {
  return (
    <Div>
      <Title>Github Usercards</Title>
      <UserCard userInfo={this.state.userInfo} />
      {this.state.followers.map(follower => {
        return <UserCard key={follower.id} userInfo={follower}/>
      })}
    </Div>
  );
  }
}

export default App;
