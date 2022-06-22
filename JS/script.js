
let numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');

let personalMovieDB = {
    conut: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let lastFilm1 = prompt('Один из последних просмотренных фильмов?', '');
let score1 = +prompt('На сколько его оцените?', '0');
let lastFilm2 = prompt('Один из последних просмотренных фильмов?', '');
let score2 = +prompt('На сколько его оцените?', '0');

personalMovieDB.movies[lastFilm1] = score1;
personalMovieDB.movies[lastFilm2] = score2;

console.log(personalMovieDB.movies[lastFilm1]);
console.log(personalMovieDB.movies[lastFilm2]);