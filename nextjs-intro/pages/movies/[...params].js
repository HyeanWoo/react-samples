import { useRouter } from "next/router";
import Helmet from "../../components/Helmet";

export default function MoviesDetail({ params }) {
  const router = useRouter();
  const [title, id] = params;
  return (
    <div>
      <Helmet title={title} />
      <h4>{title || "Loading..."}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
