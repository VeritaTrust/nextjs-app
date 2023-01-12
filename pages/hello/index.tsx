import useSWR from 'swr';
import axios from "axios";

export default function Index(name: string) {
  const address = `/api/hello`;
  const fetcher = async (url: string) => await axios.get(url).then((res) => res.data);

  const { data, error, isLoading } = useSWR('/api/hello', fetcher)

  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>

  return (<h2>selamlar nasılsınız? --- {data.name}</h2>);
}