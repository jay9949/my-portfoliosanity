import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "uwiv6lbz",
  dataset: "production",
  useCdn: false,
  apiVersion: "2021-08-31",
});

export const fetchDataFromSanity = async () => {
  try {
    const query = `*[_type == 'header']{
      _id,
      label,
      link,
  }`;

    const data = await sanityClient.fetch(query);

    return data;
  } catch (error) {
    throw error;
  }
};

export default sanityClient;
