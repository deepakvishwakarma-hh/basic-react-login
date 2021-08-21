import React from 'react'
import "../L-Component/room.css"
import Aside from '../L-Component/Aside'
export default function Home() {
    return (
        <div>
            <div className="wrapper">
                <Aside />
                <div className="main">

                    <div className="main_wrapper">
                        <header>
                            <div className="searchbar"><input type="text" placeholder=" Search here..." />
                                <button><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg></button></div>
                        </header>
                        <div className="main-wrapper_div_0">
                            <h3>Collection</h3>
                        </div>
                        <div className="main-wrapper_div_2">
                            <ul style={{ listStyle: 'none' }}>
                                <li>
                                    <div className="dropdown">
                                        <button onClick={() => {
                                            document.getElementById("showdiv").style.display = "block";

                                        }
                                        }><p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                                                </svg>
                                                Lorem ipsum dolor sit amet.
                                            </p></button>
                                        <div id="showdiv">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, deserunt consequatur illo corrupti accusantium et adipisci, veritatis quis corporis amet laudantium omnis maxime. Quidem, soluta perspiciatis! Repellendus sapiente vitae porro suscipit explicabo illo quae quia, fugit nulla iusto! Modi quia facilis doloremque error exercitationem? Debitis hic rerum laborum corporis nihil modi adipisci autem voluptatem optio, voluptate nam ipsam corrupti dolorem quaerat unde tenetur voluptatibus dolor, harum rem reiciendis assumenda tempora ex pariatur. Deleniti magni, fugit delectus nostrum voluptas nisi. Neque accusantium quae optio reiciendis cupiditate excepturi dolore sequi rerum iusto fugiat quaerat iure illo facilis, inventore architecto qui? Vero, sed.
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
