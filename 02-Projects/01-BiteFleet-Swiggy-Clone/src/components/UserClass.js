// import React from "react";
// class UserClass extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//       count2: 1,
//     };
//   }
//   render() {
//     const { count } = this.state;
//     const { count2 } = this.state;
//     const { name, Location, contact } = this.props;
//     return (
//       <div id="user-card">
//         <h1>count : {count} </h1>
//         <button
//           onClick={() => {
//             this.setState({
//               count: this.state.count + 1,
//               count2: this.state.count2 + 2,
//             });
//           }}
//         >
//           increase count
//         </button>
//         <h1>count : {count2} </h1>
//         <h2>Name : {name}</h2>
//         <h3>Location : {Location}</h3>
//         <h4>Contact : {contact}</h4>
//       </div>
//     );
//   }
// }
// export default UserClass;
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, location, contact } = this.props;

    return (
      <>
        <div id="user-card">
          <h1>Name : {name}</h1>
          <h2>Location : {location}</h2>
          <h3>Contact : {contact}</h3>
        </div>
      </>
    );
  }
}
export default UserClass;
