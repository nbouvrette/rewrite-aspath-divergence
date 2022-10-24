import type { NextPage } from "next";
import { useRouter } from "next/router";

const Page: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <div id="router-aspath">Router.asPath: {router.asPath}</div>
    </>
  );
};

export default Page;
