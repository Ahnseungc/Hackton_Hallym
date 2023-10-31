"use client";
import dynamic from "next/dynamic";

type Props = {};

const DynamicAppWithNoSSR = dynamic(() => import("@components/Chat"), {
  ssr: false,
  loading: () => <p>...</p>,
});

function Chat({}: Props) {
  return (
    <div>
      <DynamicAppWithNoSSR />
    </div>
  );
}

export default Chat;
