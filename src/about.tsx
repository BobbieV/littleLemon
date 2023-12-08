


function About() {


  return (
    <>
        <header id="about" /*style={{width: '100%', height: '100%', background: '#999999'}}*/>
            <section className="aboutTextWrapper">
            <h1 className="title" style={{/*width: '100%', height: '100%',*/ color: '#F4CE14', fontSize: 40, fontFamily: 'Markazi Text', fontWeight: '400', wordWrap: 'break-word'}}>Little Lemon</h1>
            <h2 className="h2text text" style={{/*width: '100%', height: '100%',*/ color: 'white', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Chicago</h2>
            <p className="text aboutPText" style={{/*width: '100%', height: '100%',*/ color: 'white', fontSize: 18, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Little Lemon Mediterranean is a family-owned restaurant in the heart of Chicago, serving delicious and authentic Mediterranean cuisine. Come visit us and taste the difference of homemade food made with love.</p>
            </section>
            <section className="heroImageWrapper">
            <img src="https://github.com/BobbieV/littleLemon/blob/main/src/assets/images/LittleLemonChef.jpeg?raw=true" className="aboutImage" /*style={{width: '100%', height: '100%'}}*/></img>
        </section>
        </header>
    </>
  )
}

export default About;