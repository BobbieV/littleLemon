


function About() {


  return (
    <>
        <header id="about">
            <section className="aboutTextWrapper">
            <h1 className="title" style={{color: '#F4CE14', fontSize: 40, fontFamily: 'Markazi Text', fontWeight: '400', wordWrap: 'break-word'}}>Little Lemon</h1>
            <h2 className="h2text text" style={{color: 'white', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Chicago</h2>
            <p className="text aboutPText" style={{color: 'white', fontSize: 18, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Little Lemon Mediterranean is a family-owned restaurant in the heart of Chicago, serving delicious and authentic Mediterranean cuisine. Come visit us and taste the difference of homemade food made with love.</p>
            </section>
            <section className="heroImageWrapper">
            <img src="https://github.com/BobbieV/littleLemon/blob/main/src/assets/images/LittleLemonChef.jpeg?raw=true" alt="The chef of Little Lemon prepares a house salad in front of the restaurant's pizza oven" className="aboutImage"></img>
        </section>
        </header>
    </>
  )
}

export default About;