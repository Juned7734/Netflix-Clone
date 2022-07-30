import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Navbar from './Navbar';
function App() {
  return (

  <div className="App">
      <Navbar/>
      <Banner />
      <Row title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} largeRow  />
      <Row title="Trending Now" fetchURL={requests.fetchTrending}  />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Horor Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Documentries" fetchURL={requests.fetchDocumentaries} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
    </div>
  );
}

export default App;
