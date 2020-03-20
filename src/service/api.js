const axios = require("axios");
const constants = require("../constants/config");

module.exports = {
  async getMovieById(movieId) {
    const { data } = await axios.default.get(
      `${constants.MOVIE_BASE_URL}${movieId}${constants.API_KEY}`
    );
    return data;
  },
  async searchMovie(movieName) {
    const { data } = await axios.default.get(
      `${constants.SEARCH_MOVIE}${constants.API_KEY}${constants.QUERY}${movieName}`
    );
    return data;
  },
  async searchMoviesWithPage(movieName, pageNumber = 1) {
    const { data } = await axios.default.get(
      `${constants.SEARCH_MOVIE}${constants.API_KEY}${constants.QUERY}${movieName}${constants.PAGE}${pageNumber}`
    );
    return data;
  },
  async getTrendindMovie() {
    const { data } = await axios.default.get(
      `${constants.TRENDING_MOVIE}${constants.API_KEY}`
    );
    return data;
  },
  async genreSearch(genreList = []) {
    const url = `${constants.GENRE_SEARCH}${genreList}`;

    genreList.map(num => {
      url.concat(num);
      url.concat('%20')
    });

    const { data } = await axios.default.get(url)
    return data;
  },
  async genreSearchWithPage(genreList = [], pageNumber = 1) {
    const url = `${constants.GENRE_SEARCH}${genreList}${constants.PAGE}${pageNumber}`;

    genreList.map(num => {
      url.concat(num);
      url.concat('%20')
    });

    const { data } = await axios.default.get(url)
    return data;
  }
};
