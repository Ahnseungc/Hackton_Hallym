import Link from "next/link";
import useSWR from "swr";

import CharProductItem from "@components/ChartProductItem";
import fetcher from "@hooks/fetcher";

const CharList = () => {
  const { data, error } = useSWR(
    "https://d1xx291z7z5z7p.cloudfront.net/product",
    fetcher
  );
  if (error) return <div>failed to loading</div>;
  if (!data) return <div>loading...</div>;
  console.log(data);

  return (
    <div>
      {data.map((e: any, index: any) => {
        return (
          <>
            <Link
              href={`/priceinquiry/${e.id}`}
              key={index}
              style={{ color: "black", textDecoration: "none" }}
            >
              <CharProductItem
                PImage={e.image}
                PName={e.name}
                PPrice={e.originalPrice}
              />
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default CharList;
