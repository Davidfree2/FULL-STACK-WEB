import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './Routes/Homepage/Homepage'
import ContactsPage from './Routes/ContactsPage/ContactsPage'
import SignUpInPage from './Routes/SignUpInPage/SignUpInPage'
import './index.css'

ReactDOM.render(
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Homepage />} />
            <Route path='/contacts' element={<ContactsPage />} />
            <Route path='/logInSignUp' element={<SignUpInPage />} />
    </Routes>
    </BrowserRouter>,
    document.getElementById('root')
)
