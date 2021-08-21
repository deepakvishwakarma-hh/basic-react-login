import React, { useState } from 'react'
import { UserInformation } from '../Data/UserData'
import { useHistory } from "react-router-dom";
import "../SCSS/style.css"
import Room from "./Room";

export default function Login(props) {
    const [state, setstate] = useState("")
    const [roomdata, setroomdata] = useState("")
    const [roomAppreance, setroomAppreance] = useState({ display: "none" })


    const history = useHistory()
    const IdentifyUser = () => {
        UserInformation.map((value) => {
            if (value.uii === state.userId && value.passcode === state.userPass) {
                // history.push("/dashboard")
                // props.setToDashboard(value.storage)
                document.getElementById("login").style.display = "none"
                setroomdata(value.storage)
                setroomAppreance({ display: "block" })
                console.log(roomdata)
            } return null;
        })

    }

    return (
        <>
            <div className="login-page" id="login">
                <div className="center-div">
                    <div className="column-left">
                        <img src="space.png" alt="logo" className="logo_img" />
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
                                <input type="text" name="passcode" id="Passcode" onChange={(event) => {
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

            {/* code for room */}

            <div id="room" style={roomAppreance}>
                <Room data={roomdata} />
            </div>
        </>
    )
}
