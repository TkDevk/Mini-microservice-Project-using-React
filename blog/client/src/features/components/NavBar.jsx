import { useState } from "react"
import PostCreate from "./PostCreate"

const Navbar = () => {
    const [expand, setExpand] = useState(false)

    const handleOpen =()=> {
        setExpand(
            prevValue => !prevValue
        )
    }
    return (
        <nav className="nav-bar-container">
            {expand &&
                <section 
                className="open-create-container">
                    <PostCreate />
                </section>}
            <h1 className="nav-title">blog</h1>
            <figure className="login-icon-container">
                <picture className="login-icon-picture">
                    <img
                        src="right-to-bracket-solid.svg"
                        alt="Login Icon" />
                </picture>
            </figure>
            <article 
            onClick={handleOpen}
            className="figure-create-container">
                Create Post
            </article>
        </nav>
    )
}
export default Navbar