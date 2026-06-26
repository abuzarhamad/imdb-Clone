import Image from "next/image";
import React from "react";

async function Page({ params }) {

    const { id } = await params;

    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
    );

    const movie = await res.json();

    return (
        <div className="w-full">
            <div className="p-4 md:pt-8 flex flex-col md:flex-row max-w-6xl mx-auto md:space-x-5">

                <Image
                    src={
                        movie.backdrop_path || movie.poster_path
                            ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`
                            : "/fallback.jpg"
                    }
                    width={500}
                    height={300}
                    className="rounded-lg"
                    alt={movie.title || movie.name}
                />

                <div className="p-2">

                    <h2 className="text-lg mb-3 font-bold">
                        {movie.title || movie.name}
                    </h2>

                    <p className="text-lg mb-3">
                        {movie.overview}
                    </p>

                    <p className="mb-3">
                        <span className="font-semibold mr-2">
                            Released Date:
                        </span>
                        {movie.release_date || movie.first_air_date}
                    </p>

                    <p className="mb-3">
                        <span className="font-semibold mr-2">
                            Rating:
                        </span>
                        {movie.vote_average}/10
                    </p>

                </div>
            </div>
        </div>
    );
}

export default Page;