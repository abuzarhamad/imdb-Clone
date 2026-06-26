import Results from "@/components/Results";

export default async function Page({ params }) {
  const { searchTerm } = await params;

  
  console.log("searchTerm:", searchTerm);

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${encodeURIComponent(searchTerm)}&language=en-US&page=1&include_adult=false`
  );

  const data = await res.json();

  return <Results results={data.results} />;
}