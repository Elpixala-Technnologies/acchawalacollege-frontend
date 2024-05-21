import Wrapper from "@/components/Wrapper";
import { section6 } from "@/data/homePage";
import TextWithLineBreak from "@/utils/TextWithLineBreack";
import Image from "next/image";
import Link from "next/link";

export default function Section6() {
  return (
    <section className="my-5 w-full">
      <div className="relative mx-auto max-w-screen-2xl">
        <Image
          src={section6?.bgImg}
          alt="bg"
          width={2880}
          height={768}
          className="max-h-[368px] max-md:h-[568px] w-full object-cover"
        />
        <div className="flex-center absolute left-0 top-0 h-full w-full flex-col gap-5 bg-blue-950/70 p-5">
          <h1 className="text-center font-medium text-wrap text-white md:text-4xl max-md:text-lg">
            <TextWithLineBreak text={section6?.title} />
          </h1>
          <p className="max-md:text-sm text-center text-wrap text-white">
            <TextWithLineBreak text={section6?.text1} />
          </p>
          <Link href={section6?.button.href} className="button4 rounded-lg">
            <button>{section6?.button.text}</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
