import useSWR from 'swr';
import axios from "axios";
import {GetServerSideProps, NextPage} from "next";
import {processEnv} from "@next/env";

interface HomeProps {
  name: string;
}

const Index: NextPage<HomeProps> = ({name}) => {
  const fetcher = async (url: string) => await axios.get(url).then((res) => res.data);

  const {data, error, isLoading} = useSWR('/api/hello', fetcher)

  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>

  return (<div>
    <h2>selamlar nasılsınız? --- from swr fetcher {data.name}</h2>
    <h3>from init props -- {name}</h3>
  </div>);
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log('ENVENEN', process.env.ENV)
  try {
    const { data } = await axios.get<HomeProps>(
      `http://localhost:3000/api/hello`,
    );
    console.log('NAME', data);
    return { props: { name: data.name } };
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: process.env.NEXT_PUBLIC_HOMEPAGE_URL,
      },
      props: {},
    };
  }
}

export default Index;