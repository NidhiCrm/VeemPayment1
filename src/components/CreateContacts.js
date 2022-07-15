import React from "react";

class CreateContacts extends React.Component {
    state = {
        name: "",
        email: "",
    };

    create = (e) => {
        e.preventDefault();
        if(this.state.email === "" && this.state.name === ""){
            alert("All fields are empty");
            return;
        }

        console.log(this.state);
        fetch("https://sandbox-api.veem.com/veem/v1.1/contacts", {
            method: "POST",
            mode: "no-cors",
            headers: {
                Accept: "application/json",
                "x-rapidapi-host": "https://sandbox-api.veem.com",
                "Content-Type": "application/json",
                Authorization: " Bearer 654d9531-8d7e-4180-a64e-f8ddc87dccf6",
            },
            body: JSON.stringify({
                email: "sinha.nidhi02@gmail.com",
                firstName: "Nid",
                lastName: "S",
                isoCountryCode: "us",
                phoneDialCode: "+1",
                phoneNumber: "9379015288"
            })
        })
            .then((response) => response.json())
            .then((response) => {
                if(response.id) {
                    console.log(response);
                    console.log(response.id);
                } else {
                    var msg = response.error.message;
                }
            }).catch((err) => {
                console.log(err);
            });
    }
    render() {
        return (
            <div className="ui main">
                <h2> Get Details </h2>
                <form className="ui form" onSubmit={this.create}>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" 
                                name="email" 
                                placeholder="Email" 
                                value={this.state.email}
                                onChange={ (e) => this.setState({email: e.target.value})}/>
                    </div>
                    <br/>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" 
                                name="name" 
                                placeholder="Name" 
                                value={this.state.name}
                                onChange={ (e) => this.setState({name: e.target.value})}/>
                    </div>
                    <button className="ui button blue">Create Contact</button>
                </form>
            </div>
        )
    }
}

export default CreateContacts;