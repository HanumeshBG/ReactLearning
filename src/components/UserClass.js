import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    async componentDidMount(){
        // used to make API calls or fetch data
    }

    componentDidUpdate(prevProps, prevState) {
        // used to compare previous props/state with current props/state
        // can be used to trigger side effects based on changes
    }

    componentWillUnmount() {
        // used to clean up resources, like event listeners or timers
    }

    render() {
        const { name, location } = this.state 
         return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: hanumesh@gmail.com</h4>
            </div>
        )
    }
}

export default UserClass;