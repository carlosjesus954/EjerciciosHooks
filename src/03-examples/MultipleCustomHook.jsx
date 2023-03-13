import { useFetch } from "../hooks/useFetch";
import { Loading } from "./Loading";
import { Personajes } from "./Personajes";

export const MultipleCustomHook = () => {
  const { data, isLoading, hasError } = useFetch(
    "https://api.breakingbadquotes.xyz/v1/quotes/3"
  );
  const resetPage = () => {
    window.location.reload();
  };
  return (
    <>
      <h1>Breaking bad quotes</h1>
      <hr />
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {data.map((quote) => (
            <Personajes
              key={quote.quote_id} // agregamos una clave única
              author={quote.author}
              quote={quote.quote}
            />
          ))}
          <button type="reset" className="reset" onClick={resetPage}>
            Reset
          </button>
        </div>
      )}
    </>
  );
};
