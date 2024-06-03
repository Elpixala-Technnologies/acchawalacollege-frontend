import Wrapper from "@/components/Wrapper";
import TextWithLineBreak from "@/utils/TextWithLineBreak";
import Image from "next/image";
import Link from "next/link";

export default function Section6({ data }: any) {
  return (
    <section className="my-5 w-full">
      <div className="relative mx-auto max-w-screen-2xl">
        <Image
          src={data?.bgImg}
          alt="bg"
          width={2880}
          height={768}
          className="max-h-[368px] w-full object-cover max-md:h-[568px]"
        />
        <Wrapper>
          <div className="flex-center absolute left-0 top-0 h-full w-full flex-col gap-5 bg-blue-950/70 p-5">
            <h1 className="text-wrap text-center font-medium text-white max-md:text-lg md:text-4xl">
              <TextWithLineBreak text={data?.title} />
            </h1>
            <p className="text-wrap text-center text-white max-md:text-sm">
              <TextWithLineBreak text={data?.text1} />
            </p>
            <Link href={data?.button?.href} className="button4 rounded-lg">
              <button>{data?.button?.text}</button>
            </Link>
          </div>
        </Wrapper>
      </div>
    </section>
  );
}
