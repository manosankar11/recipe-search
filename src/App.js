import './App.css';
import Axios from 'axios';
import { useState } from 'react';
import RecipeTile from './RecipeTile';
import HomePage from './components/Users/HomePage';

const App = () => {
  const [query, setQuery] = useState("")
  const [recipes, setRecipes] = useState([]);
  const [healthLabel, setHealthLabel] = useState("vegan")

  
  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;

  async function getRecipes() {
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  }

  return (
    <div className="app">
      <h1 className="title" >Recipe Search</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <HomePage onChange={(e) => setQuery(e.target.value)} />
        <input type="submit" className="app__submit" value="Search" />
        <select className="app__healthlabel">
          <option onClick={() => setHealthLabel("vegan")}>Vegan</option>
          <option onClick={() => setHealthLabel("vegetarian")}>vegetarian</option>
          <option onClick={() => setHealthLabel("paleo")}>paleo</option>
          <option onClick={() => setHealthLabel("dairy-free")}>dairy-free</option>
          <option onClick={() => setHealthLabel("gluten-free")}>gluten-free</option>
          <option onClick={() => setHealthLabel("wheat-free")}>wheat-free</option>
          <option onClick={() => setHealthLabel("low-sugar")}>low-sugar</option>
          <option onClick={() => setHealthLabel("shellfish-free")}>shellfish-free</option>
          <option onClick={() => setHealthLabel("fish-free")}>fish-free</option>
          <option onClick={() => setHealthLabel("say-free")}>say-free</option>
          <option onClick={() => setHealthLabel("tree-nut-free")}>tree-nut-free</option>
          <option onClick={() => setHealthLabel("peanut-free")}>peanut-free</option>
          <option onClick={() => setHealthLabel("egg-free")}>egg-free</option>
        </select>
      </form>
      <div>
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe} />
        })}
      </div>
    </div>
  );
}

export default App;
