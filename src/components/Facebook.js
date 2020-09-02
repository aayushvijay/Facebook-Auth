import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

export class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: "",
  };

  responseFacebook = (response) => {
    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
    });
    console.log(response);
  };

  componentClicked = () => console.log("Clicked");

  render() {
    let fbcontent;
    if (this.state.isLoggedIn) {
      fbcontent = (
          <div style={{
              width: '400px',
              margin: 'auto',
              background: '#f4f4f4',
              padding: '20px'
          }}>
              <img src={this.state.picture} alt={this.state.name} />
              <h2>Welcome {this.state.name}</h2>
              <h4>E-Mail - {this.state.email}</h4>
          </div>
      );
    } else {
      fbcontent = (
        <FacebookLogin
          appId="638424970131562"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }
    return <div>{fbcontent}</div>;
  }
}

export default Facebook;
