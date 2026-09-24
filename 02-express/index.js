import express from "express";
import {movies} from "./data.js";

const app = express();

app.use(express.json()); 

// app.use((req, res, next) => {
//   console.log(req.method, req.url);
//   next();
// });




app.get("/", (req,res)=>{
    res.send("Movie Api is running")
});

app.get("/movies", (req,res)=>{
    res.json(movies)
});

app.get("/movies/:id", (req,res)=>{

    const id = Number(req.params.id);

    // res.send(movies[id-1]);
    // for(let movie of movies){
    //     if(movie.id === id){
    //         res.json(movie);
    //         return;
    //     }
    // }
    // res.send({Message : "Movie not found"});
    
    const s_movie = movies.find((movie) => movie.id === id); 
    if(s_movie){
        res.json(s_movie);
    }
    else{
        res.json({Message : "Movie is not found"})
    }
 
})

app.get("/movie", (req,res) =>{
    // const genre = req.query.genre;
    // const language = req.query.language;
    // const rating = req.query.rating;
    // const releaseYear = req.query.releaseYear;
    // const availableOnOTT = req.query.availableOnOTT;

    const {genre, language, rating, releaseYear, availableOnOTT} = req.query;

    let fil_movies = movies;

    if(genre){
        fil_movies = fil_movies.filter((movie)=> movie.genre == genre);
    }
    if(language){
        fil_movies = fil_movies.filter((movie)=> movie.language == language);
    }
    if(rating){
        fil_movies = fil_movies.filter((movie)=> movie.rating == rating);
    }
    if(releaseYear){
        fil_movies = fil_movie.filter((movie)=>movie.releaseYear == releaseYear);
    }
    if(availableOnOTT){
        fil_movies = fil_movie.filter((movie)=>movie.availableOnOTT == availableOnOTT);
    }

    res.json(fil_movies);
})

app.get("/movie", (req,res)=>{
    let {search} = req.query;
    
    let filtered_movie = movies;

    if(search){
        filtered_movie = filtered_movie.filter((movie)=>movie.title.toLowerCase().includes(search.toLowerCase()));
        res.send(filtered_movie);
    }
    else{
        res.send({Message : "Movie Not found"})
    }
    
})

app.post("/movies", (req,res)=>{

    movies.push(req.body);
    
    res.send({
      message: "Movie created successfully",
      movie: {
        id: 51,
        title: "Dangal",
        genre: "sports",
        language: "hindi",
        rating: 4.7,
        releaseYear: 2016,
        duration: 161,
        availableOnOTT: true,
      },
    });
})

app.patch("/movies/:id", (req,res)=>{

    const id = Number(req.params.id);

    const update_movie = movies.find((movie)=>movie.id === id);

    const updated_movie = Object.assign(update_movie, req.body);

    movies.splice(id, 1, updated_movie);

    res.send({message : "Movie Updated successfully", ...updated_movie});


})

app.use((req,res,next) => {

    const role = req.headers.role;

    if(role === "admin"){
        next();
    }
    else{
        res.status(403).json({message : "Only admin can delete movies"});
    }
})

app.delete("movies/:id", (req,res)=>{
     
    const id = parseInt(req.params.id);

    const idx = movies.findIndex(movie=>movie.id===id);

    if(idx  !== -1){

        const del_movie = movies.splice(idx, 1);

        res.send({ message: "Movie deleted successfully", movie : del_movie[0]});
    }

    else{
        res.send("Movie not found");
    }
    
})

app.listen(3000, ()=>{
    console.log("Server is listening");

})
