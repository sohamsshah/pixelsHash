import Head from 'next/head'
import Images from "../components/images/Images"
import Link from "next/link"

export default function Home(props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <Link href="/about">
        <a>Go to another page</a>
      </Link>
        <Images props={props} />
      </main>
    </div>
  )
}

export const getStaticProps = async () => {

  const data = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=20"
  ).then((response) => response.json());

  return {
      props: { data }
  };
};



