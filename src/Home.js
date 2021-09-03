import React, {useState, useEffect} from 'react'

const Home = () => {

    const [characters, setCharacters] = useState(null)
    const [comics, setComics] = useState(null)


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Home</h1>
                    
                </div>
            </div>
        </div>
    )
}

export default Home;