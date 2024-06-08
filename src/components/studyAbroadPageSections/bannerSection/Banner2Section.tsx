import Wrapper from "@/components/Wrapper";
import Image from "next/image";

export default function Banner2Section({ data }: any) {
  return (
    <section className="my-16 w-full">
      <Wrapper>
        {/* Title */}
        {data?.title && (
          <h1 className="title1 mb-2">
            {data?.title?.t1 && (
              <span className="text-blue-950/70">{data?.title?.t1}</span>
            )}{" "}
            {data?.title?.t2 && (
              <span className="text-blue-950">{data?.title?.t2}</span>
            )}{" "}
            {data?.title?.t3 && (
              <span className="text-blue-500">{data?.title?.t3}</span>
            )}
          </h1>
        )}
        {data?.text && <p className="mb-5">{data?.text}</p>}
        <div className="grid grid-cols-14 gap-4">
            <div className="col-span-10 grid grid-cols- gap-4">
            <Image width="800" height="800" src={data?.img?.[0]} alt="banner" className="col-span-12 min-h-[400px] w-full rounded-2xl object-cover max-md:hidden" />
            <Image width="800" height="800" src={data?.img?.[0]} alt="banner" className="col-span-12 min-h-[400px] w-full rounded-2xl object-cover max-md:hidden" />
            </div>
            <div className="col-span-4">
                
            </div>
        </div>
      </Wrapper>
    </section>
  );
}
