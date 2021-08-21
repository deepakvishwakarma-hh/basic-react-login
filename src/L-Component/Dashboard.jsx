import React from 'react';
import "../SCSS/style.css";
import Document from '../X_Component/Document';
import { useLocation } from "react-router-dom"
// In props value.storage name's data flowed.
export default function Dashboard(props) {
    const currLocation = useLocation();
    return (
        <div>
            <div className="Dashboard_wrapper">
                <header>
                    <h1>Dashboard</h1>
                </header>
                <div className="document_wrapper">
                    {
                        // rendering data

                        props.data.listOfImages.map((value) => {
                            return (
                                <Document image={value.image} name={value.name} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}