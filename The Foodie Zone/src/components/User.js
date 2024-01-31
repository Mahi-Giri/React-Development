import React from "react";

class User extends React.Component {
    constructor(props) {
        super(props);
        // console.log("constructor");
        this.state = {
            userInfo: {
                name: "user_name",
                location: "location",
                twitter_username: "twitter_username",
                avatar_url: "avatar_url",
            },
        };
    }

    componentDidMount() {
        // console.log("componentDidMount");
        this.getData();
    }

    componentDidUpdate() {
        // console.log("ComponentDidUpdate()");
    }

    componentWillUnmount() {
        // console.log("componentWillUnmount");
    }

    async getData() {
        // console.log("async getData");
        const data = await fetch("https://api.github.com/users/Mahi-Giri");
        const json = await data.json();
        // console.log(json);

        this.setState({
            userInfo: json,
        });
    }

    render() {
        // console.log("render");
        const { name, location, twitter_username, avatar_url } = this.state.userInfo;
        return (
            <div className="userCard">
                <p>{name}</p>
                <p>{location}</p>
                <p>{twitter_username}</p>
                <img src={avatar_url} />
            </div>
        );
    }
}

export default User;
