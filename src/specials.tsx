


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
                <img className="menuItemImage imgGreekSalad" src="https://github.com/BobbieV/littleLemon/blob/main/src/assets/images/greek salad.jpg"></img>
                <h2 className="label labelGreekSalad">Greek Salad</h2>
                <h2 className="price priceGreekSalad">$12.95</h2>
                <p className="description descriptionGreekSalad"></p>
                </article>
            <article className="menuItem bruschetta">
                <img className="menuItemImage imgBruschetta"></img>
                <h2 className="label labelBruschetta">Bruschetta</h2>
                <h2 className="price priceBruschetta">$5.99</h2>
                <p className="description descriptionBruschetta"></p>
                </article>
            <article className="menuItem lemonDessert ">
                <img className="menuItemImage imageLemonDessert"></img>
                <h2 className="label labelLemonDessert">Lemon Dessert</h2>
                <h2 className="price priceLemonDessert">$5.00</h2>
                <p className="description descriptionLemonDessert"></p>
                </article>
            </section>
        </header>
    </>
  )
}

export default Specials;