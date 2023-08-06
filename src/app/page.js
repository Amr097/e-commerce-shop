import { React } from "react";
import axios from "axios";

import MyApp from "@/MyApp/MyApp";

// const getGeoData = async () => {
//   let data = await axios.get(process.env.NEXT_PUBLIC_IP_REGISTRY_URL);

//   return data;
// };

export default async function Home() {
  // const geo = await getGeoData();
  // console.log(geo.data.location.country);

  return <MyApp />;
}
