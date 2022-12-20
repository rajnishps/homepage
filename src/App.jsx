import face from "./assets/face.svg"
import logo from "./assets/logo.svg"
import "./App.css"

function App() {
  return (
    <>
      <header>
        <a href="/">
          <img className="logo" src={logo} alt="logo" />
        </a>

        <button className="join-btn">Join Us</button>
      </header>
      <section>
        <div className="text-section">
          <div>
            <h1>Welcome to CRX</h1>
            <h2>Now Available, Meet Yorfy NFT Collection ⭐️</h2>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h4>
          </div>
          <div className="stat-blocks">
            <div className="block block-1">
              <p>546</p>
              <h5>NFT Items</h5>
            </div>
            <div className="vl vl-1"></div>
            <div className="block block-2">
              <p>42</p>
              <h5>Owners</h5>
            </div>
            <div className="vl vl-2"></div>
            <div className="block block-3">
              <p>378</p>
              <h5>Items Sold</h5>
            </div>
          </div>
        </div>
        <div className="nft-section">
          <div className="nft-image">
            <img className="face-img" src={face} alt="nft" />
          </div>
          <div className="btn-bg">
            <button className="bottom-btn buy-btn">Buy on OpenSea</button>
            <button className="bottom-btn know-btn">Know More</button>
          </div>
        </div>
        <div className="blur blur-1"></div>
        <div className="blur blur-2"></div>
        <div className="blur blur-3"></div>
      </section>
    </>
  )
}

export default App
