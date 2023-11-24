


function Specials() {


  return (
    <>
        <header id="#specialsWrapper">
          <section className="topWrapper">
            <h1 className="h1Specials">This week's specials!</h1>
            <button className="buttonOM">Online Menu</button>
            </section>
            <section className="bottomWrapper">
              <article className="menuItem greekSalad">
                <img className="menuItemImage imgGreekSalad" src="https://github.com/BobbieV/littleLemon/blob/main/src/assets/images/greek salad.jpg?raw=true"></img>
                <hgroup className="label">
                  <h2 className="labelGreekSalad">Greek Salad</h2>
                  <h2 className="price priceGreekSalad">$12.95</h2>
                  </hgroup>
                <p className="description descriptionGreekSalad"></p>
                </article>
            <article className="menuItem bruschetta">
                <img className="menuItemImage imgBruschetta" src="https://github.com/BobbieV/littleLemon/blob/90e6980f8559c03500120c4b290dd6482b8a16c9/src/assets/images/bruschetta.png?raw=true"></img>
                <hgroup className="label">
                  <h2 className="labelBruschetta">Bruschetta</h2>
                  <h2 className="price priceBruschetta">$5.99</h2>
                </hgroup>
                <p className="description descriptionBruschetta"></p>
                </article>
            <article className="menuItem lemonDessert ">
                <img className="menuItemImage imageLemonDessert" src="https://github.com/BobbieV/littleLemon/blob/main/src/assets/images/lemon dessert.jpg?raw=true"></img>
                <hgroup className="label">
                  <h2 className="labelLemonDessert">Lemon Dessert</h2>
                  <h2 className="price priceLemonDessert">$5.00</h2>
                </hgroup>
                <p className="description descriptionLemonDessert"></p>
                </article>
            </section>
        </header>
    </>
  )
}

export default Specials;