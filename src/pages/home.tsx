import { Link } from 'react-router'

const Home = () => {
    return (
        <>
            <h1>Hello, World!</h1>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/terms">Terms</Link>
                </li>
            </ul>
        </>
    )
}

export default Home