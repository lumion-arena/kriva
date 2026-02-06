import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>KRIVA</h1>
      <p>Design Your Own T-Shirt</p>

      <Link to="/login">
        <button>Login</button>
      </Link>

      <br /><br />

      <Link to="/designer">
        <button>Start Designing</button>
      </Link>
    </div>
  );
}

export default Home;
