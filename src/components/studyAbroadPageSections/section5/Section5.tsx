import React from "react";

import Link from "next/link";
import TextWithLineBreak from "@/utils/TextWithLineBreak";
import Wrapper from "@/components/Wrapper";

export default function Section5({ data }: any) {
    return (
        <section className="my-5 w-full bg-blue-950 py-10 text-white">
            <Wrapper className="flex items-center justify-between">
                {data?.text && (
                    <h2 className="text-lg font-medium">
                        <TextWithLineBreak text={data?.text} />
                    </h2>
                )}
                {data?.buttons && data?.buttons?.button1 && (
                    <Link
                        className="flex-center rounded border border-blue-950 bg-white px-5 py-3 text-sm font-bold text-blue-950 transition-all duration-300 hover:bg-gray-100 active:scale-90"
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
