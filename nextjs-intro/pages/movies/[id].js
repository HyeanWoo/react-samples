import { useRouter } from "next/router";

export default function MoviesID() {
  const router = useRouter();
  console.log(router);
  return "detail page";
}
