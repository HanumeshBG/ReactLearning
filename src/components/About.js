import User from "./User";
import UserClass from "./UserClass";
import React from 'react';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count2: 2
        };
    }

    componentDidMount(){
    }

    render() {
        return (
            <div>
                <h1>About Page</h1>
                <p>This is About Page for food ordering..</p>
                <UserClass name={"Hanumesh"} location={"Bangalore"} />
            </div>
        );
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About Page</h1>
//             <p>This is About Page for food ordering..</p>
//             <UserClass name={"Hanumesh"} location={"Bangalore"} />
//         </div>
//     )
// }

export default About;