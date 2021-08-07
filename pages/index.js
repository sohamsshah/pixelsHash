import Head from 'next/head'
import Images from "../components/Images/Images"
import Link from "next/link"

export default function Home(props) {
  return (
    <>
      <div>
        <Images data={props.data} />
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const data = await fetch(
    "https://api.unsplash.com/search/photos?client_id=ZHDOvMwb905FFU0Ouxa5d1dvHIY4J1E_RlmVlA4GIh0&query=code&page=1&per_page=20/800x800"
  ).then((response) => response.json());
  return {
    props: { data }
  };
};
