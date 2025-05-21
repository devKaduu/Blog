import { HomeTemplate } from "@/templates/home";

import { allPosts } from "contentlayer/generated";

export default function Home() {
  console.log(allPosts);
  return <HomeTemplate />;
}
