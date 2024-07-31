import { FaFilm } from "react-icons/fa";
import { GrDevice } from "react-icons/gr";
import { GoDotFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { BookMark_Comp } from "./BookMark_Comp";

export const ResultofSearch = ({ data, error, searchString }) => {
  const navigate = useNavigate();

  const getReleaseYear = (item) => {
    return item.type === "Movie"
      ? (item.releaseDate && item.releaseDate.split("-")[0]) || "N/A"
      : (item.firstAirDate && item.firstAirDate.split("-")[0]) || "N/A";
  };

  const highlightMatch = (title) => {
    const index = title.toLowerCase().indexOf(searchString.toLowerCase());

    const before = title.slice(0, index);
    const match = title.slice(index, index + searchString.length);
    const after = title.slice(index + searchString.length);
    return (
      <>
        {before}
        <span className="text-app-red">{match}</span>
        {after}
      </>
    );
  };

  return (
    <>
      {error ? (
        <h2 className="place-self-start text-2xl font-light sm:text-4xl">
          {error}
        </h2>
      ) : (
        <>
          <h2 className="mb-10 place-self-start text-2xl font-light sm:text-4xl">{`Found ${data.length} results for '${searchString}'`}</h2>
          <div className="grid grid-cols-1 gap-8 place-self-center sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {data.map((item) => (
              <div className="w-64 md:w-72 lg:w-64 xl:w-64 " key={item._id}>
                <div className="relative w-full rounded-lg">
                  <img
                    src={item.bannerUrl || item.posterUrl}
                    onError={(e) => {
                      e.currentTarget.src = "/placeHolder.png";
                    }}
                    alt={item.title}
                    loading="eager"
                    className="aspect-video w-full cursor-pointer rounded-lg object-fill transition-opacity duration-300 group-hover:opacity-50"
                    onClick={() => {
                      navigate(
                        `${item.type === "Movie" ? "/movies" : "/tvshows"}/${
                          item._id
                        }`
                      );
                    }}
                  />
                  <BookMark_Comp id={item._id} />
                </div>
                <div>
                  <div className="flex w-full items-center gap-4 text-app-icons">
                    <span>{getReleaseYear(item)}</span>
                    <GoDotFill className="h-3 w-3" />
                    {item.type === "Movie" ? (
                      <FaFilm className="inline-block h-4 w-4" />
                    ) : (
                      <GrDevice className="inline-block h-4 w-4" />
                    )}
                  </div>
                </div>
                <h2 className="tracking-wide">
                  {item.title.length > 30
                    ? highlightMatch(item.title.slice(0, 30) + "...")
                    : highlightMatch(item.title)}
                </h2>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};
