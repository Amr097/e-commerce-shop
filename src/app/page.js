import { React } from "react";

import MyApp from "@/MyApp/MyApp";

export const metadata = {
  title: "Nostra",
  description: "Online shopping service for all your needs",
  icons: {
    icon: "/images/favicon.svg",
  },
};

// const getGeoData = async () => {
//   let data = await axios.get(process.env.NEXT_PUBLIC_IP_REGISTRY_URL);

//   return data;
// };

export default async function Home() {
  // const geo = await getGeoData();
  // console.log(geo.data.location.country);

  return <MyApp />;
}
