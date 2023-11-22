


function Header() {


  return (
    <>
        <header id="header">
            <section className="textWrapper"><h1 className="title">Little Lemon</h1>
            <h2 className="h2text text">Chicago</h2>
            <p className="text ptext">We are a family-owned Mediterranean restaurant, focused on traditional recipes, served with a modern twist.</p>
            <div className="reserveATableWrapper">
            <button className="reserveATable">Reserve a Table</button>
            </div>
            </section>
            <section className="heroImageWrapper">
            <img src="https://github.com/BobbieV/littleLemon/blob/main/src/assets/images/Hero%20Image.png?raw=true" className="heroImage"></img>
        </section>
        </header>
    </>
  )
}

export default Header;
