import './logo.png'

function Logo() {
    return (
        <><div>
            <img src={require('./logo.png')} className="AppLogo" alt="logo"></img>
            </div></>
    )
}

export default Logo