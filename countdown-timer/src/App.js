import './App.css';
import CardComponent from './CardComponent';
import { useEffect, useState } from 'react';

function App() {

  const [laptop, setLaptop] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);


  let laptops = 'http://localhost:3000/laptops'

  useEffect(() => {
    fetch(laptops)
      .then(res => res.json())
      .then(
        (result) => {
          setLaptop(result);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (

      <div>
        <div>

          <nav class="navbar navbar-expand-lg navbar-light bg-primary">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Laptops</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page">CountDown Timer</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="row body-div container-fluid">
          {
            laptop.map(item => (
              <CardComponent
                title={item.title}
                processor={item.processor}
                hardDrive={item.hardDrive}
                urlToImage={item.urlToImage}
                ram={item.ram}
                date = {item.date}
              />

            ))
          }
        </div>
      </div>
    )
  }

}

export default App;
