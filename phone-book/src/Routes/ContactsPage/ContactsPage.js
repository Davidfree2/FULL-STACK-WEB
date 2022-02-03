import { Component } from 'react'
import ContactNav from './Components/ContactNav'
import Nav from './Components/Nav'
import Main from './Components/Main'
import AddContact from './Components/AddContact'

class index extends Component{
    constructor(props){
        super(props);
        this.state = {
            fields: null,
        }
        this.submitForm = this.submitForm.bind(this);
        this.signOut = this.signOut.bind(this);
    }


    signOut = async()=>{
        document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    }

    componentDidMount = async()=>{
        const cookieName = document.cookie;
        const cookieNameOnly = cookieName.replace('username=', '');
        const url = 'http://192.168.254.17:8080/getContactInfo';
        const postData = {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({username: cookieNameOnly})
        };
        const fetchData = await fetch(url, postData);
        const data = await fetchData.json();
        console.log(data);
        this.setState({fields: data});
    }

    submitForm = async()=>{
        const cookieName = document.cookie;
        const cookieNameOnly = cookieName.replace('username=', '');
        const nameVal = await this.formName.value;
        const streetVal = await this.formStreet.value;
        const cityVal = await this.formCity.value;
        const emailVal = await this.formEmail.value;
        const url = 'http://192.168.254.17:8080/addContactInfo';
        const postData = {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                username: cookieNameOnly,
                name: nameVal,
                street: streetVal,
                city: cityVal,
                email: emailVal,
            })
        };

        const fetchData = await fetch(url, postData);
        const data = await fetchData.json();
        console.log(data);
    }

    render(){
        if (!document.cookie){
            return <h1>not logged in</h1>;
        }
        else if (this.state.fields == null) {
            return <h1>loading</h1>
        }
        return(
            <div className='ContactsPage'>
                <Nav signOut={this.signOut}/>
                <div className='ContactNavDisplay'>
                    <div className='showHide'>
                    <AddContact name={name=> this.formName = name} street={street=> this.formStreet = street} city={city=> this.formCity = city} email={email=> this.formEmail = email}  formSubmit={this.submitForm} />
                    </div>
                </div>
                <Main content={this.state.fields}/>
            </div>
        )
    }
}

export default index
