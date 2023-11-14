import './App.css'
import Card from 'react-bootstrap/Card'


function Specials() {


  return (
    <>
      <div>
        <header>
            <h1>This week's specials!</h1>
            <button>Online Menu</button>
            <Card>
                <img></img>
                <h2>Greek Salad</h2>
                <h2>$12.95</h2>
                <p></p>
                </Card>
            <Card>
                <img></img>
                <h2>Bruschetta</h2>
                <h2>$5.99</h2>
                <p></p>
                </Card>
            <Card>
                <img></img>
                <h2>Lemon Dessert</h2>
                <h2>$5.00</h2>
                <p></p>
                </Card>
        </header>
        </div>
    </>
  )
}

export default Specials;