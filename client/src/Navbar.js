import React from 'react'
import { Link } from 'react-router-dom'
import { withContext } from './AppContext'

function Navbar(props) {
    return (
        <span className="navbar">
            {!props.token ? (
                <React.Fragment>
                    <div>
                        <Link to='/signup'>Sign Up</Link>
                    </div>
                    <div>
                        <Link to='/'>Log In</Link>
                    </div>
                </React.Fragment>
                )  :  (
                <React.Fragment>
                    <div>
                        <Link to='/home'>Home</Link>
                        <Link to='/men'>Men</Link>
                        <Link to='/woman'>Women</Link>
                        <Link to='/cart'>Shopping Cart</Link>
                    </div>
                    <div>
                        <button onClick={() => props.logout()}>Logout</button>
                    </div>
                </React.Fragment>
            )}
        </span>
    )
}

export default withContext(Navbar)