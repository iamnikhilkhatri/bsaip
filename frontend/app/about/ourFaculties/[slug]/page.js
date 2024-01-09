
import React from "react";
import { Language } from "../../../../components/UniversalComponents/languageAndContact/Language";
import { TopArea } from "../../../../components/UniversalComponents/toparea/TopArea";
import { EachFaculties } from "../../../../components/AboutComponents/Faculties/EachFaculties";
import { Register } from "../../../../components/UniversalComponents/register/Register";
import { Footer } from "../../../../components/UniversalComponents/footer/Footer";
import API_URLS from "@/api/api";
import axios from "axios";

const Slug = (props) => {
  console.log("nk", props.data);
  return (
    <div>
      <Language />
      <TopArea />
      <EachFaculties />
      <Register />
      <Footer />
    </div>
  );
};

export async function getStaticPaths() {
  try {
    const result = await axios.get(`${API_URLS.faculties}`);
    console.log(result.data.data);
    const data = result.data.data;

    const paths = data.map((item) => ({
      params: {
        slug: item?.attributes?.slug,
      },
    }));

    console.log("nikhil: ", paths);

    return { paths, fallback: false };
  } catch (error) {
    console.error(error);
    return { paths: [], fallback: false };
  }
}

export async function getStaticProps({ params }) {
  const apiUrl = `${API_URLS.faculties}?filters[slug]=${params.slug}&populate=*`;

  try {
    const response = await fetch(apiUrl);
    const result = await response.json();
    const data = result.data.data;

    return {
      props: { data },
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
}
export default Slug;
