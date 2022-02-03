import React from 'react'

class ContactNav extends React.Component{
    render(){
        return(
            <div className='ContactNav'>
                <form>
                    <input type='text' placeholder='Search' />
                    <button>Add Contact</button>
                    <button>Export Contacts</button>
                </form>
            </div>
        )
    }
}

export default ContactNav
