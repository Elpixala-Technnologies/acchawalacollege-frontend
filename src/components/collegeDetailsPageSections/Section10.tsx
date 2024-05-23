import React from "react";
import Wrapper from "../Wrapper";
import Link from "next/link";

export default function Section10({ data }: any) {
  return (
    <section className="my-5 w-full bg-blue-950 py-10 text-white">
      <Wrapper className="flex items-center justify-between">
        {data?.text && <h2 className="text-lg font-medium">{data?.text}</h2>}
        {data?.buttons && data?.buttons?.button1 && (
          <Link
            className="button7"
            href={data?.buttons?.button1?.href}
            target="_blank"
            rel="noreferrer"
            download={true}
          >
            {data?.buttons?.button1?.text}
          </Link>
        )}
      </Wrapper>
    </section>
  );
}
