import { Component } from 'react'

class AddContact extends Component{
    render(){
        return(
            <div className='AddContact'>
            <form> 
                <label for='name'>name</label>
                    <input name='name' id='name' placeholder='enter name' ref={this.props.name} type='text' />
                <label for='street'>street</label>
                    <input name='street' id='street' placeholder='enter street' ref={this.props.street} type='text'/>
                <label for='city'>city</label>
                    <input name='city' id='city' placeholder='enter city' ref={this.props.city }type='text'/>
                <label for='email'>email</label>
                    <input name='email' id='email' placeholder='enter email' ref={this.props.email }type='text' />
                <button onClick={this.props.formSubmit}>Add Contact</button>
            </form>
            </div>
        )
    }
}

export default AddContact
