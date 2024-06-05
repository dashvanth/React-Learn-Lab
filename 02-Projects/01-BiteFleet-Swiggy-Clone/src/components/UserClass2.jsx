import React from "react";

class UserClass2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // count: 0,
      // count1: 1,
      // count3: 2,

      userInfo: {
        name: "dummy",
        location: "default",
      },
    };

    // console.log(this.props.name + "Child Constructor");
  }
  async componentDidMount() {
    // this.timer = setInterval(() => {
    //   console.log("Hey dashvanth set interval");
    // }, 1000);
    // console.log(this.props.name + "child component did mount");

    const response = await fetch("https://api.github.com/users/dashvanth");
    // console.log(response);
    const data = await response.json();
    console.log(data);

    this.setState({
      userInfo: data,
    });
  }
  componentWillUnmount() {
    // clearInterval(this.timer);
  }
  render() {
    // console.log(this.props.name + "Child Render");
    const { name, location, avatar_url } = this.state.userInfo;
    // const { name, location, contact } = this.props;
    // const { count, count1 } = this.state;
    const increaseCount = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };
    return (
      <>
        <div id="user-card">
          <img src={avatar_url} alt="" />
          <h1>Name : {name}</h1>
          <h2>Location : {location}</h2>
          {/* <h3>Contact : {contact}</h3> */}
        </div>
      </>
    );
  }
}
export default UserClass2;
