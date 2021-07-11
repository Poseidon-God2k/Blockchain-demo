
import{  Link } from "react-router-dom"
const Header= () =>{
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Blockchain demo</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
        
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/hash" className="nav-link">Hash</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/block" className="nav-link">Block</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/blockchain" className="nav-link">Blockchain</Link>
                        </li>
                        <li className="nav-item">
                                <Link to="/coinbase" className="nav-link">Coinbase</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;