import { useState } from "react/cjs/react.development";
import "./App.css";
import Movielist from "./components/Movielist";
import "bootstrap/dist/css/bootstrap.min.css";
import Addmovie from "./components/Addmovie";
import { Filter } from "./components/Filter";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Details from "./components/Details";


function App() {
  const [movie, setmovie] = useState([
    {
      id: Math.random(),
      title: "La Casa De Papel",
      desc: "Professor, plan the best heist ever",
      poster:
        "https://imgr.cineserie.com/2017/04/1481703.jpg?imgeng=/f_jpg/cmpr_0/w_666/h_999/m_cropbox&ver=1",
      rating: 3,
      trailer: "https://www.youtube.com/embed/htqXL94Rza4",
    },
    {
      id: Math.random(),
      title: "Fast & Furious 9 ",
      desc: "Dominic Toretto and the team come together to stop a world-shattering plot headed by Toretto's brother, Jakob.",
      poster:
        "https://media.services.cinergy.ch/media/box1600/d9fdf11eeee914bf4ccf4e2410130e08aff7e120.jpg",
      rating: 4,
      trailer: "https://www.youtube.com/embed/_qyw6LC5pnE",
    },
    {
      id: Math.random(),
      title: "Venom 2 ",
      desc: "Brock struggles to adjust to life as the host of the alien symbiote Venom, while serial killer Cletus Kasady (Harrelson) escapes from prison after becoming the host of Carnage",
      poster:
        "https://fr.web.img2.acsta.net/pictures/21/09/01/11/19/0900123.jpg",
      rating: 4,
      trailer:"https://www.youtube.com/embed/-FmWuCgJmxo",
    },
    {
      id: Math.random(),
      title: "Spider-Man:No Way Home",
      desc: "It’s the third movie starring Tom Holland as the spider-boy, and this time, his secret is out. Everyone found that Peter Parker was Spider-Man in 2019",
      poster:
        "https://image.jeuxvideo.com/medias-md/163925/1639250642-3390-artwork.jpg",
      rating: 5,
      trailer:"https://www.youtube.com/embed/JfVOs4VSpmA",
    },
  ]);
  const [text, settext] = useState("");
  const [rating, setrating] = useState(1);

  const handleAdd = (newmovie) => setmovie([newmovie, ...movie]);

  const handleText = (e) => settext(e.target.value);

  const handleRating = (x) => setrating(x);

  const handleedit = (i, editedMovie) =>
    setmovie([...movie.map((el) => (el.id === i ? editedMovie : el))]);

  return (
    <div className="App" style={{ backgroundColor: "white" }}>
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <>
                  <Filter
                    handleRating={handleRating}
                    rating={rating}
                    text={text}
                    handletext={handleText}
                  />

                  <Movielist
                    edit={handleedit}
                    film={movie.filter(
                      (el) =>
                        el.title.toLowerCase().includes(text.toLowerCase()) &&
                        el.rating >= rating
                    )}
                  />
                </>
              )}
            />

            <Route
              exact
              path="/Addmovie"
              render={() => <Addmovie add={handleAdd} />}
            />

            <Route
              exact
              path="/Details/:id"
              render={(props) => <Details detail={movie} {...props} />}
            />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
