import Availability from './availability.tsx'


function Header() {


  return (
    <>
      <header id="header">
          <main className="headerBackground">
            <section className="textWrapper"><h1 className="title" style={{color: '#F4CE14', fontFamily: 'Markazi Text', fontWeight: '400', wordWrap: 'break-word'}}>Little Lemon</h1>
              <h2 className="h2text text" style={{color: '#EDEFEE', fontFamily: 'Karla', fontWeight: '400', wordWrap: 'break-word'}}>Chicago</h2>
              <p className="text ptext" style={{color: '#EDEFEE', fontFamily: 'Karla', fontWeight: '400', wordWrap: 'break-word'}}>We are a family-owned Mediterranean restaurant, focused on traditional recipes, served with a modern twist.</p>
              <div className="reserveATableWrapper">
                <button className="reserveATable" style={{textAlign: 'center', color: '#333333', fontFamily: 'Markazi Text', fontWeight: '400', wordWrap: 'break-word'}} 
                  onClick={() => {<Availability/>;
}}>Reserve a Table</button>
              </div>
            </section>
            <section className="heroImageWrapper">
            <img src="https://github.com/BobbieV/littleLemon/blob/main/src/assets/images/Hero%20Image.png?raw=true" className="heroImage" style={{borderRadius: 25}}></img>
        </section>
        </main>
        </header>
    </>
  )
}

export default Header;
