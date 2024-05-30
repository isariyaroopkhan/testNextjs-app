import React from 'react'

type Props = {}

export default async function Home({ }: Props) {
  const key = process.env.NEXT_PUBLIC_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=643839bd098675576fce2ab7f6d4f1f0`;
  const data = await fetch(url);
  const res = await data.json();

  return (
    <div>page
      <ul>
        {res.results.map((movie : any)=> {
          <li key={movie.id}>{movie.title}</li>
        })}
      </ul>

      {/* <div>
        debug : {JSON.stringify(res)}
      </div> */}
    </div>
  )
}