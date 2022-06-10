import { useState, useEffect } from "react";
import Search from "../Search/Search";
import ListCard from "../EntertemainList/ListCard";
import EntertaimentLayout from "../Layout/EntertaimentLayout";
import { fetchTvSeriesRecommended, apiKey } from "../../API";
import useFetch from "../../hooks/useFetch";
import Recommended from "../Recommended/Recommended";

const TvSeries = () => {
  const [tvSeriesRecommended, setTvSeriesRecommended] = useState([]);
  const [searchTvSeries, setSearchTvSeries] = useState("");
  const { data, isLoading } = useFetch(
    searchTvSeries,
    `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-US&page=1&query=${searchTvSeries}`
  );

  useEffect(() => {
    fetchTvSeriesRecommended().then((response) => {
      const { success, data } = response;
      success ? setTvSeriesRecommended(data) : console.log(data);
    });
  }, []);

  return (
    <section
      className="grid animate__animated animate__fadeIn"
      aria-label="Tv Series"
    >
      <EntertaimentLayout>
        <main className="container main_area">
          <Search
            searchTerm={searchTvSeries}
            handleSearchTerm={setSearchTvSeries}
          />

          {!searchTvSeries ? (
            <Recommended title={"TV series"}>
              <ListCard
                data={tvSeriesRecommended}
                type="recommended"
                media="tv"
              />
            </Recommended>
          ) : (
            <section className="search_found animate__animated animate__fadeIn">
              {!isLoading && (
                <Recommended
                  title={`Found ${data.results.length} results for ‘${searchTvSeries}’`}
                >
                  <ListCard data={data.results} type="search" media="tv" />
                </Recommended>
              )}
            </section>
          )}
        </main>
      </EntertaimentLayout>
    </section>
  );
};

export default TvSeries;
