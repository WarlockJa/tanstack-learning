import data from "./data.json";

export default async function getSearch({ search }: { search: string }) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return data.filter((item) => item.includes(search));
}
