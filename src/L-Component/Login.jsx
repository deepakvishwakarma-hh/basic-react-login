import React, { useState } from 'react'
import { UserInformation } from '../Data/UserData'
import { useHistory } from "react-router-dom";
import "../SCSS/style.css"
// import wrapper from "./Wrapper"


export default function Login(props) {
    const [state, setstate] = useState("")

    const history = useHistory()
    const IdentifyUser = () => {
        UserInformation.map((value) => {
            if (value.uii === state.userId && value.passcode === state.userPass) {
                history.push("/dashboard")
                props.setToDashboard(value.storage)
            } return null;
        })

    }

    return (
        <div className="login-page">
            <div className="center-div">
                <div className="column-left">
                    <img src="space.png" alt="logo" className="logo_img"/>
                </div>
                <div className="column-right">
                    <div className="form-wrapper">
                        <h1>Get Access</h1>
                        <div>
                            <h3>User Identity Id</h3>
                            <input type="text" name="user" id="UII" onChange={(event) => {
                                setstate((prevState) => ({
                                    ...prevState,
                                    userId: event.target.value
                                }));
                            }} />
                            <h3>Passcode</h3>
                            <input type="password" name="passcode" id="Passcode" onChange={(event) => {
                                setstate((prevState) => ({
                                    ...prevState,
                                    userPass: event.target.value
                                }));
                            }} />
                            <input type="submit" onClick={IdentifyUser} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
