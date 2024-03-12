import { Component } from "react";

class Name extends Component{
    constructor(props){
        console.log("name constructor")
        super(props)
    }
    componentDidMount(){
        console.log("name component did mount")
    }
    componentDidUpdate(){
        console.log("name- component did update")
    }
    render(){
        console.log("name render")
        const name = this.props.name
        return <div>
            <h1>{name}</h1>
        </div>
    }

}

class Location extends Component{
    constructor(props){
        super(props)
        console.log("loc constructor")
    }
    componentDidMount(){
        console.log("loc component did mount")
    }
    componentDidUpdate(){
        console.log("loc- component did update")
    }
    render(){
        console.log("loc render")
        const location = this.props.location
        return <h2>{location}</h2>
    }
}

class User extends Component{
    constructor(){
        console.log("user constructotc")
        super();
        this.state = {
            name: "not rendered",
            location: "not rendered"
        }
    }

    async componentDidMount(){
        console.log("user component did mount")
        const data_raw = await fetch("https://api.github.com/users/ay-maiti")
        const data = await data_raw.json()
        this.setState({
            name:data.name,
            location:data.location
        })
    }

    componentDidUpdate(){
        console.log("user component dis update")
    }
    render(){
        console.log("user render")
        const {name, location} = this.state;
        return <div>
            <Name name={name}/>
            <Location location={location}/>
        </div>
    }
}

export default User;