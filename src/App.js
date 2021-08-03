import { useState} from 'react';
import './App.css';
import { Search } from './component/Search';
import {movieData} from "./Data";
import AddMovie from './component/Add';
import { MovieList} from './component/MovieList';

function App() {
  const [movies, setMovies]= useState(movieData);
  const [ searchTitle,setSearchTitle]= useState("");
  const [searchRating, setSearchRating]= useState(0);
  const [visible, setVisibility] = useState(false);
  const handleClose = () => setVisibility(false);

  return (
    <div className="App">
      <div>
  <Search setSearchRating={setSearchRating} searchRating={setSearchRating} setSearchTitle ={setSearchTitle} />
  < MovieList movies= {movies} searchTitle={searchTitle} searchRating={searchRating} />
    </div>
    <div className="add">
    <button className= "btn-add" onClick={() => 
    setVisibility(!visible)
    }> Add Movie </button>
  
  { visible? 
  <AddMovie movies={movies} setMovies={setMovies} visible={visible} handleClose={handleClose}/> : null
  }
  </div>
  
  </div>
  );
}
 
export default App;
