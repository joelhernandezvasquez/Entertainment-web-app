import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import Search from "../Search/Search";
import ListCard from "../EntertemainList/ListCard";
import EntertaimentLayout from "../Layout/EntertaimentLayout";
import { fetchMoviesRecommended, apiKey } from "../../API";
import Recommended from "../Recommended/Recommended";

const Movies = () => {
  const [moviesRecommended, setMoviesRecommended] = useState([]);
  const [movieSearch, handleMovieSearch] = useState("");
  const { data, isLoading } = useFetch( movieSearch,`://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&query=${movieSearch}`);

  useEffect(() => {
    fetchMoviesRecommended().then((response) => {
      const { success, data } = response;
      success ? setMoviesRecommended(data) : console.error(data);
    });
  }, []);

  return (
    <section
      className="grid animate__animated animate__fadeIn"
      aria-label="Movies"
    >
      <EntertaimentLayout>
        <main className="container main_area">
          <Search
            searchTerm={movieSearch}
            handleSearchTerm={handleMovieSearch}
          />

          {!movieSearch ? (
            <Recommended title={"movies"}>
              <ListCard
                data={moviesRecommended}
                type="recommended"
                media="movie"
              />
            </Recommended>
          ) : (
            <section className="search_found animate__animated animate__fadeIn">
              {!isLoading && (
                <Recommended
                  title={`Found ${data.results.length} results for ‘${movieSearch}’`}
                >
                  <ListCard data={data.results} type="search" />
                </Recommended>
              )}
            </section>
          )}
        </main>
      </EntertaimentLayout>
    </section>
  );
};

export default Movies;
