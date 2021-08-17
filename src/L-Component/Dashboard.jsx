import React from 'react'
import "../SCSS/style.css"
import Document from '../X_Component/Document'
// In props value.storage name's data flowed.
export default function Dashboard(props) {
    return (
        <div>
            <div className="Dashboard_wrapper">
                <header>
                    
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