


function Specials() {


  return (
    <>
        <header id="#specials" style={{background: '#EDEFEE'}}>
          <section className="topWrapper">
            <h1 className="h1Specials" style={{color: '#333333', fontSize: 30, fontFamily: 'Markazi Text', fontWeight: '500', wordWrap: 'break-word'}}>This week's specials!</h1>
            <button className="buttonOM" style={{textAlign: 'center', color: '#333333', fontFamily: 'Markazi Text', fontWeight: '500', wordWrap: 'break-word'}} onClick={() => alert('This feature is coming soon!')}>Online Menu</button>
            </section>
            <section className="bottomWrapper">
              <article className="menuItem greekSalad">
                <img className="menuItemImage imgGreekSalad" src="https://github.com/BobbieV/littleLemon/blob/main/src/assets/images/greeksalad.jpg?raw=true" alt="a fork in a greek salad" style={{borderTopLeftRadius: 25, borderTopRightRadius: 25}}></img>
                <hgroup className="labelGroup">
                  <h2 className="label labelGreekSalad" style={{color: '#333333', fontSize: 30, fontFamily: 'Markazi Text', fontWeight: '500', wordWrap: 'break-word'}}>Greek Salad</h2>
                  <h2 className="price priceGreekSalad" style={{textAlign: 'right', color: '#EE9972', fontSize: 30, fontFamily: 'Markazi Text', fontWeight: '400', wordWrap: 'break-word'}}>$12.95</h2>
                  </hgroup>
                <p className="description descriptionGreekSalad" style={{color: 'black', fontSize: 24, fontFamily: 'Karla', fontWeight: '400', wordWrap: 'break-word'}}>Our classic Greek salad features fresh romaine lettuce, juicy tomatoes, crisp cucumbers, tangy feta cheese, and kalamata olives, all drizzled with a zesty lemon vinaigrette.</p>
                </article>
            <article className="menuItem bruschetta">
                <img className="menuItemImage imgBruschetta" src="https://github.com/BobbieV/littleLemon/blob/90e6980f8559c03500120c4b290dd6482b8a16c9/src/assets/images/bruschetta.png?raw=true" alt="a close-up of a tray of bruschetta" style={{borderTopLeftRadius: 25, borderTopRightRadius: 25}}></img>
                <hgroup className="labelGroup">
                  <h2 className="label labelBruschetta" style={{color: '#333333', fontSize: 30, fontFamily: 'Markazi Text', fontWeight: '500', wordWrap: 'break-word'}}>Bruschetta</h2>
                  <h2 className="price priceBruschetta" style={{textAlign: 'right', color: '#EE9972', fontSize: 30, fontFamily: 'Markazi Text', fontWeight: '400', wordWrap: 'break-word'}}>$5.99</h2>
                </hgroup>
                <p className="description descriptionBruschetta" style={{color: 'black', fontSize: 24, fontFamily: 'Karla', fontWeight: '400', wordWrap: 'break-word'}}>Our version of the classic Italian appetizer consisting of grilled bread rubbed with garlic and topped with fresh tomatoes, basil, and olive oil.</p>
                </article>
            <article className="menuItem lemonDessert">
                <img className="menuItemImage imageLemonDessert" src="https://github.com/BobbieV/littleLemon/blob/main/src/assets/images/lemon dessert.jpg?raw=true" alt="a fork lying in front of a lemon dessert with lemons in the distance" style={{borderTopLeftRadius: 25, borderTopRightRadius: 25}}></img>
                <hgroup className="labelGroup">
                  <h2 className="label labelLemonDessert" style={{color: '#333333', fontSize: 30, fontFamily: 'Markazi Text', fontWeight: '500', wordWrap: 'break-word'}}>Lemon Dessert</h2>
                  <h2 className="price priceLemonDessert" style={{textAlign: 'right', color: '#EE9972', fontSize: 30, fontFamily: 'Markazi Text', fontWeight: '400', wordWrap: 'break-word'}}>$5.00</h2>
                </hgroup>
                <p className="description descriptionLemonDessert" style={{color: 'black', fontSize: 24, fontFamily: 'Karla', fontWeight: '400', wordWrap: 'break-word'}}>This zesty and refreshing dessert will awaken your taste buds with its tangy lemon flavor and smooth, creamy texture. Perfect for any sweet tooth!</p>
                </article>
            </section>
        </header>
    </>
  )
}

export default Specials;