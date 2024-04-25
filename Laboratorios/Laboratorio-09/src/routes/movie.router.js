const express = require("express");
const router = express.Router();

const {
    createMovie,
    getMovies,
    getOneMovie,
    updateMovie,
    toggleMovieFavorite,
    deleteOneMovie, 
} = require("../controllers/movie.controller");

const {
    idInParams,
    createMovieValidator,
    updateMovieValidator,
} = require("../validators/movie.validator");

const { runValidation } = require("../middlewares/validator.middleware");
router.post("/", createMovieValidator, runValidation, createMovie);
router.get("/", getMovies);
router.get("/:id", idInParams, runValidation, getOneMovie);
router.put("/:id", idInParams, updateMovieValidator, runValidation, updateMovie);
router.patch("/favorite/:id", idInParams, runValidation, toggleMovieFavorite);
router.delete("/:id", runValidation,deleteOneMovie);


module.exports = router;