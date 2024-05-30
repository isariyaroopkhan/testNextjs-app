import { getServerSideProps } from 'next/dist/build/templates/pages'
import React from 'react'

type Props = {}

export default async function About({ }: Props) {

    const result = await fetch("https://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=songs")
    const data = await result.json()
    await delay(1000)

    return (
        <div>
            About
        </div>
    )
}

function delay(timeout: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  }