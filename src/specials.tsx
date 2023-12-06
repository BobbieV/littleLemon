


function Specials() {


  return (
    <>
        <header id="#specials" style={{/*width: 1440, height: 800,*/ background: '#EDEFEE'}}>
          <section className="topWrapper">
            <h1 className="h1Specials" style={{/*width: 465, height: 92,*/ color: '#333333', fontSize: 3, fontFamily: 'Markazi Text', fontWeight: '500', wordWrap: 'break-word'}}>This week's specials!</h1>
            <button className="buttonOM" style={{/*width: 200, height: 75,*/ textAlign: 'center', color: '#333333', fontSize: 28, fontFamily: 'Markazi Text', fontWeight: '500', wordWrap: 'break-word'}}>Online Menu</button>
            </section>
            <section className="bottomWrapper">
              <article className="menuItem greekSalad">
                <img className="menuItemImage imgGreekSalad" src="https://github.com/BobbieV/littleLemon/blob/main/src/assets/images/greek salad.jpg?raw=true" style={{width: 301, height: 230, borderTopLeftRadius: 25, borderTopRightRadius: 25}}></img>
                <hgroup className="labelGroup">
                  <h2 className="label labelGreekSalad" style={{/*width: 300, height: 45,*/ color: '#333333', fontSize: 30, fontFamily: 'Markazi Text', fontWeight: '500', wordWrap: 'break-word'}}>Greek Salad</h2>
                  <h2 className="price priceGreekSalad" style={{/*width: 107, height: 50,*/ textAlign: 'right', color: '#EE9972', fontSize: 30, fontFamily: 'Markazi Text', fontWeight: '400', wordWrap: 'break-word'}}>$12.95</h2>
                  </hgroup>
                <p className="description descriptionGreekSalad" style={{/*width: 220, height: 220,*/ color: 'black', fontSize: 24, fontFamily: 'Karla', fontWeight: '400', wordWrap: 'break-word'}}>Our classic Greek salad features fresh romaine lettuce, juicy tomatoes, crisp cucumbers, tangy feta cheese, and kalamata olives, all drizzled with a zesty lemon vinaigrette.</p>
                </article>
            <article className="menuItem bruschetta">
                <img className="menuItemImage imgBruschetta" src="https://github.com/BobbieV/littleLemon/blob/90e6980f8559c03500120c4b290dd6482b8a16c9/src/assets/images/bruschetta.png?raw=true" style={{width: 301, height: 230, borderTopLeftRadius: 25, borderTopRightRadius: 25}}></img>
                <hgroup className="labelGroup">
                  <h2 className="label labelBruschetta" style={{/*width: 300, height: 45,*/ color: '#333333', fontSize: 30, fontFamily: 'Markazi Text', fontWeight: '500', wordWrap: 'break-word'}}>Bruschetta</h2>
                  <h2 className="price priceBruschetta" style={{/*width: 107, height: 50,*/ textAlign: 'right', color: '#EE9972', fontSize: 30, fontFamily: 'Markazi Text', fontWeight: '400', wordWrap: 'break-word'}}>$5.99</h2>
                </hgroup>
                <p className="description descriptionBruschetta" style={{/*width: 220, height: 220,*/ color: 'black', fontSize: 24, fontFamily: 'Karla', fontWeight: '400', wordWrap: 'break-word'}}>Our version of the classic Italian appetizer consisting of grilled bread rubbed with garlic and topped with fresh tomatoes, basil, and olive oil.</p>
                </article>
            <article className="menuItem lemonDessert">
                <img className="menuItemImage imageLemonDessert" src="https://github.com/BobbieV/littleLemon/blob/main/src/assets/images/lemon dessert.jpg?raw=true" style={{/*width: 301, height: 230,*/ borderTopLeftRadius: 25, borderTopRightRadius: 25}}></img>
                <hgroup className="labelGroup">
                  <h2 className="label labelLemonDessert" style={{/*width: '100%', height: '100%',*/ color: '#333333', fontSize: 30, fontFamily: 'Markazi Text', fontWeight: '500', wordWrap: 'break-word'}}>Lemon Dessert</h2>
                  <h2 className="price priceLemonDessert" style={{/*width: 107, height: 50,*/ textAlign: 'right', color: '#EE9972', fontSize: 30, fontFamily: 'Markazi Text', fontWeight: '400', wordWrap: 'break-word'}}>$5.00</h2>
                </hgroup>
                <p className="description descriptionLemonDessert" style={{/*width: '100%', height: '100%',*/ color: 'black', fontSize: 24, fontFamily: 'Karla', fontWeight: '400', wordWrap: 'break-word'}}>This zesty and refreshing dessert will awaken your taste buds with its tangy lemon flavor and smooth, creamy texture. Perfect for any sweet tooth!</p>
                </article>
            </section>
        </header>
    </>
  )
}

export default Specials;