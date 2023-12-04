


function Header() {


  return (
    <>
      <header id="header" style={{/*width: 1440, height: 440,*/ background: '#495E57'}}>
          <main className="headerBackground">
            <section className="textWrapper"><h1 className="title" style={{/*width: 341, height: 131, textAlign: 'center',*/ color: '#F4CE14', /*fontSize: 72,*/ fontFamily: 'Markazi Text', fontWeight: '400', wordWrap: 'break-word'}}>Little Lemon</h1>
              <h2 className="h2text text" style={{/*textAlign: 'center',*/ color: '#EDEFEE', /*fontSize: 40,*/ fontFamily: 'Karla', fontWeight: '400', wordWrap: 'break-word'}}>Chicago</h2>
              <p className="text ptext" style={{/*width: 486, height: 143,*/ color: '#EDEFEE', /*fontSize: 32,*/ fontFamily: 'Karla', fontWeight: '400', wordWrap: 'break-word'}}>We are a family-owned Mediterranean restaurant, focused on traditional recipes, served with a modern twist.</p>
              <div className="reserveATableWrapper">
                <button className="reserveATable" style={{/*width: 299, height: 99,*/ textAlign: 'center', color: '#333333', /*fontSize: 32,*/ fontFamily: 'Markazi Text', fontWeight: '400', wordWrap: 'break-word'}}>Reserve a Table</button>
              </div>
            </section>
            <section className="heroImageWrapper">
            <img src="https://github.com/BobbieV/littleLemon/blob/main/src/assets/images/Hero%20Image.png?raw=true" className="heroImage" style={{/*width: 400, height: 400,*/ borderRadius: 25}}></img>
        </section>
        </main>
        </header>
    </>
  )
}

export default Header;
