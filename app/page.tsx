import dynamic from "next/dynamic";

import ItemList from "@components/ItemList";

const DynamicAppWithNoSSRModal = dynamic(() => import("@components/ItemAdd"), {
  ssr: false,
  loading: () => <p>...</p>,
});

function Home() {
  return (
    <div>
      <ItemList />
      <DynamicAppWithNoSSRModal />
    </div>
  );
}

export default Home;
