import TextWithLineBreak from "@/utils/TextWithLineBreak";
import Image from "next/image";
import Link from "next/link";

export default function Section6({ data, sData }: any) {
  return (
    <section className="my-5 w-full">
      <div className="relative mx-auto max-w-screen-2xl">
        <Image
          src={sData?.bgImg?.data?.url}
          alt="bg"
          width={2880}
          height={768}
          className="max-h-[368px] w-full object-cover max-md:h-[480px]"
        />
          <div className="flex-center absolute left-0 top-0 h-full w-full flex-col gap-5 bg-blue-950/70 px-5">
            {sData?.title && (
              <>
                <h1 className="text-wrap text-center font-medium text-white max-md:hidden max-md:text-lg md:text-4xl">
                  <TextWithLineBreak text={sData?.title} />
                </h1>
                <h1 className="text-wrap text-center font-medium text-white max-md:text-lg md:hidden md:text-4xl">
                  {sData?.title}
                </h1>
              </>
            )}
            {sData?.text1 && <p className="text-wrap text-center text-white max-md:text-sm">
              <TextWithLineBreak text={sData?.text1} />
            </p>}
            {sData?.button && <Link href={sData?.button?.href || "#"} className="button4 rounded-lg">
              <button>{sData?.button?.text}</button>
            </Link>}
          </div>
      </div>
    </section>
  );
}
