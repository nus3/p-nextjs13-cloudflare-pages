import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { HelloResponse } from "./api/hello";

const sleep = (waitTime: number) =>
  new Promise((resolve) => setTimeout(resolve, waitTime));

export const getServerSideProps: GetServerSideProps<{
  data: HelloResponse;
}> = async () => {
  await sleep(3000);

  const data: HelloResponse = { name: "nus3" };
  return { props: { data } };
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const Home: NextPage<Props> = ({ data }) => {
  return <h1>Hello {data.name}!!</h1>;
};

export default Home;
