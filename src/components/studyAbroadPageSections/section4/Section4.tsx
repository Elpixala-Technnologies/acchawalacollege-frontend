import { SuccessStories1, SuccessStories2, SuccessStories3 } from "@/asset";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";

export default function Section4({ data }: any) {
    return (
        <section className="my-16 w-full">
            {/* Title  */}
            <Wrapper className="flex max-md:flex-row max-md:gap-y-2">
                <div className="flex w-max font-bold flex-row gap-2 p-5 [flex:1] max-md:pr-0">
                    <span className="text-4xl text-blue-950">{data?.title?.t1}</span>
                    <span className="text-4xl text-blue-500">{data?.title?.t2}</span>
                </div>
            </Wrapper>
            <Wrapper className="flex items-center max-md:flex-col max-md:gap-y-2">
                {/* <!-- Main Container --> */}

                <div className="flex justify-center space-x-4">
                    {/* <!-- Left Section --> */}
                    <div className="flex-shrink-0 pt-2">
                        <Image
                            src={data?.img[0]}
                            alt="b1"
                            width={529}
                            height={651}
                            className="rounded-lg"
                        />
                    </div>

                    {/* <!-- Middle Section --> */}
                    <div className="flex flex-col justify-center space-y-4">
                        {/* <!-- Top Card --> */}
                        <div className="flex-shrink-0">
                            <Image
                                src={data?.img[1]}
                                width={432}
                                height={422}
                                alt="b1"
                                className="rounded-lg"
                            />
                        </div>
                        <div className="p-6">
                            <div
                                className="dangerouslySetInnerHTMLStyle text-justify"
                                dangerouslySetInnerHTML={{ __html: data?.text2 }}
                            />
                            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">{data?.button1?.text}</button>

                        </div>
                        {/* <!-- Middle Small Card --> */}
                        <div className="mx-auto student-card absolute bg-white shadow-lg p-4 flex flex-col items-center rounded-lg justify-center h-40 w-40">
                            <span className="text-3xl text-blue-500 text-center">{data?.middleCard?.t1}</span>
                            <span className="text-xl text-center">{data?.middleCard?.t2}</span>
                            <Image
                                src={data?.middleCard?.img}
                                alt="b1"
                                className="rounded-lg shadow-lg pt-2"
                            />
                        </div>
                    </div>
                    {/* <!-- Right Section --> */}
                    <div className="flex flex-col pt-4 gap-12 space-y-4 h-40 w-40">
                        {/* <!-- Small Card 1 --> */}
                        <div className="bg-white shadow-lg flex flex-col rounded-3xl p-6 ">
                            <span className="text-3xl text-blue-500 text-center">{data?.card1?.t1}</span>
                            <span className="text-xl text-center">{data?.card1?.t2}</span>
                        </div>
                        {/* <!-- Small Card 2 --> */}
                        <div className="bg-white shadow-lg flex flex-col rounded-3xl p-6 text-center">
                            <span className="text-3xl text-blue-500 text-center">{data?.card2?.t1}</span>
                            <span className="text-xl text-center">{data?.card1?.t2}</span>
                        </div>
                        {/* <!-- Small Card 3 --> */}
                        <div className="bg-white shadow-lg flex flex-col rounded-3xl p-6 text-center">
                            <span className="text-3xl text-blue-500 text-center">{data?.card3?.t1}</span>
                            <span className="text-xl text-center">{data?.card1?.t2}</span>
                        </div>
                        {/* <!-- Small Card 4 --> */}
                        <div className="bg-white shadow-lg flex flex-col rounded-3xl p-6 text-center">
                            <span className="text-3xl text-blue-500 text-center">{data?.card4?.t1}</span>
                            <span className="text-xl text-center">{data?.card1?.t2}</span>
                        </div>
                    </div>

                </div>
            </Wrapper>
        </section>
    );
}
