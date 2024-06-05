import React from "react";
// import User from "./User";
// import UserClass from "./UserClass";
import UserClass2 from "./UserClass2";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }
  componentDidMount() {
    // console.log("parent Component Did Mount");
  }
  render() {
    // console.log("Parent Render");
    return (
      <>
        <UserClass2
          name="Dashvanth"
          location="Banglore"
          contact="Dashvanthrajhc23@gmail.com"
        />
      </>
    );
  }
}

/* Multiple Children
  -Parent Constructor
  -Parent Render
    - Child 1 Constructor
    - Child 1 Render
    - Child 2 Constructor
    - Child 2 Render
      -Child 1 Component Did Mount
      -Child 2 Component Did Mount
  -Parent Component Did Mount
*/

// const About = () => {
//   return (
//     <div>
//       {/* <UserClass
//         name="Ananya"
//         location="Mysore"
//         contact="Ananyahc01@gmail.com"
//       /> */}
//       <User
//         name="dashvanth"
//         Location="Banglore"
//         contact="dashvanthrajhc23@gmail.com"
//       />

//       <UserClass2
//         name="priya lokesh"
//         location="Banglore"
//         contact="priyalokesh23@gmail.com"
//       />
//     </div>
//   );
// };
export default About;
