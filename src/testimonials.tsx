



function Testimonials() {


  return (
    <>
        <header id="testimonials" style={{background: '#495E57'}}>
          <h1 className="h1Testimonials" style={{textAlign: 'center', color: '#F4CE14', fontSize: 32, fontFamily: 'Markazi Text', fontWeight: '500', wordWrap: 'break-word'}}>Testimonials</h1>
          <section className="testimonialContainersWrapper">
            <section className="testimonialContainer testimonial1" style={{background: '#EDEFEE', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 25}}>
              <img className="testimonialUserImage testimonialUserImage1 testimonialUserImageJoan" alt="a round profile image icon with a blonde woman and a small white dog" src="https://github.com/BobbieV/littleLemon/blob/88e414dfd6b3636026a90dc465f15aaafc032289/src/assets/images/'Joan'%20Female%20Profile%20Pic%2075%20x%2075px.png?raw=true"></img>
              <hgroup className="h2TestimonialText">
              <h2 className="rating rating1" style={{color: 'black', fontSize: 18, fontFamily: 'Markazi Text', fontWeight: '500', wordWrap: 'break-word'}}>Rating 9/10</h2>
                <h2 className="name name1" style={{color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Joan</h2>
              </hgroup>
              <p className="userFeedback userFeedback1" style={{color: 'black', fontSize: 18, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>The food was outstanding and the atmosphere was lovely. The service was great too, but it was a little pricey. Overall, a fantastic experience.</p>
             </section>
            <section className="testimonialContainer testimonial2" style={{background: '#EDEFEE', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 25}}>
            <img className="testimonialUserImage testimonialUserImage2 testimonialUserImageDiane" alt=" a round profile image icon with a brunette woman in front of a greenery background" src="https://github.com/BobbieV/littleLemon/blob/88e414dfd6b3636026a90dc465f15aaafc032289/src/assets/images/'Diane'%20Female%20Profile%20Pic%2075%20x%2075px.png?raw=true"></img>
              <hgroup className="h2TestimonialText">
                <h2 className="rating rating2" style={{color: 'black', fontSize: 18, fontFamily: 'Markazi Text', fontWeight: '500', wordWrap: 'break-word'}}>10/10</h2>
                <h2 className="name name2" style={{color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Diane</h2>
              </hgroup>
              <p className="userFeedback userFeedback2" style={{color: 'black', fontSize: 18, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Everything was perfect! The food was absolutely delicious, the service was top-notch, and the atmosphere was wonderful. Highly recommend this restaurant.</p>
            </section>
            <section className="testimonialContainer testimonial3" style={{background: '#EDEFEE', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 25}}>
            <img className="testimonialUserImage testimonialUserImage3 testimonialUserImageDavid" alt="a round profile image icon with a man and a small white dog" src="https://github.com/BobbieV/littleLemon/blob/88e414dfd6b3636026a90dc465f15aaafc032289/src/assets/images/'David'%20Male%20Profile%20Pic%2075%20x%2075px.png?raw=true"></img>
              <hgroup className="h2TestimonialText">
                <h2 className="rating rating3" style={{color: 'black', fontSize: 18, fontFamily: 'Markazi Text', fontWeight: '500', wordWrap: 'break-word'}}>9/10</h2>
                <h2 className="name name3" style={{color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>David</h2>
              </hgroup>
              <p className="userFeedback userFeedback3" style={{color: 'black', fontSize: 18, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>The food was great, but the service was a bit slow. The atmosphere was nice, but a little noisy. Still, a solid choice for a night out.</p>
            </section>
            <section className="testimonialContainer testimonial4" style={{background: '#EDEFEE', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 25}}>
            <img className="testimonialUserImage testimonialUserImage4 testimonialUserImageJenna" alt="a round profile image icon with a brunette woman wearing a grey hat" src="https://github.com/BobbieV/littleLemon/blob/88e414dfd6b3636026a90dc465f15aaafc032289/src/assets/images/'Jenna'%20Female%20Profile%20Pic%2075%20x%2075px.png?raw=true"></img>
              <hgroup className="h2TestimonialText">
                <h2 className="rating rating4" style={{color: 'black', fontSize: 18, fontFamily: 'Markazi Text', fontWeight: '500', wordWrap: 'break-word'}}>8/10</h2>
                <h2 className="name name4" style={{color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Jenna</h2>
              </hgroup>
              <p className="userFeedback userFeedback4" style={{color: 'black', fontSize: 18, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>The food was good, but nothing stood out as exceptional. The service was okay, but a little inattentive. The atmosphere was cozy, but a bit cramped.</p>
            </section>
            </section>
            </header>
    </>
  )
}

export default Testimonials;
