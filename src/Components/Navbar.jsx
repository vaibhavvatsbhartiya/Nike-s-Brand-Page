import "../App.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="/images/brand_logo.png" alt="Brand Logo" />
        </div>
        <ul>
          <li className="nav1" >home</li>
          <li className="nav2">about</li>
          <li className="nav3">location</li>
          <li className="nav4">contact</li>
        </ul>
        <button className="btn" >sign up/in</button>
      </div>
    </>
  );
}

export default Navbar;
