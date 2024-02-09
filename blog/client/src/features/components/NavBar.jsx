import { useState } from "react"
import PostCreate from "./PostCreate"
import { Link } from "react-router-dom"
import { useThemeContext } from "../context/theme/ThemeProvider"

const Navbar = () => {

    const [expand, setExpand] = useState(false)
    const { theme, setColorTheme } = useThemeContext();
    const handleOpen = () => {
        setExpand(
            prevValue => !prevValue
        )
    }
    return (
        <nav
            className="nav-bar-container"
            id={theme}
        >
            {expand &&
                <section
                    className="open-create-container"
                    style={{cursor:'default',zIndex:'8'}}
                    >
                    <PostCreate />
                </section>}
            <Link to="/">
                <h1 
                id={theme}
                className="nav-title">
                    blog
                </h1>
            </Link>
            <article
                onClick={handleOpen}
                className="figure-create-container">
                <h2 className="btn-create-post-title">Create Post</h2>
            </article>
            <picture
                className="theme-icon"
                onClick={setColorTheme}
                >
                <img
                    src={theme==="dark"?"icon-sun.svg":"icon-moon.svg"}
                    alt="" />
            </picture>

        </nav>
    )
}
export default Navbar