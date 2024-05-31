import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";

export default function Section4({ data }: any) {
    return (
        <section className="my-16 w-full">
            {/* Title  */}
            <Wrapper className="flex flex-col items-center md:flex-row md:items-start md:justify-start md:gap-4">
                {/* <div className="flex w-max font-bold flex-row gap-2 p-4 [flex:1] max-md:pr-0">
                    <span className="text-4xl text-blue-950">{data?.title?.t1}</span>
                    <span className="text-4xl text-blue-500">{data?.title?.t2}</span>
                </div> */}
                <h1 className="title1 md:ml-8">
                    <span className="text-4xl text-blue-950">{data?.title?.t1}</span>{" "}
                    <span className="text-4xl text-blue-500">{data?.title?.t2}</span>
                </h1>
            </Wrapper>
            <Wrapper className="flex flex-col items-center md:flex-row md:items-start md:gap-12">
                {/* <!-- Main Container --> */}
                <div className="flex flex-col md:flex-row md:justify-center p-2 gap-12">
                    {/* <!-- Left Section --> */}
                    <div className="flex-shrink-0">
                        <Image
                            src={data?.img[0]}
                            alt="b1"
                            width={529}
                            height={651}
                            className="rounded-lg"
                        />
                    </div>

                    {/* <!-- Middle Section --> */}
                    <div className="flex flex-col items-center md:items-start space-y-4 mt-4 md:mt-0">
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
                        <div className="mx-auto student-card absolute transform scale-90 translate-y-40  bg-white shadow-lg p-4 flex flex-col items-center rounded-lg justify-center h-40 w-40">
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
                    <div className="flex flex-col space-y-4 gap-8 mt-4 md:mt-0">
                        {/* <!-- Small Card 1 --> */}
                        <div className="bg-white shadow-lg flex flex-col rounded-3xl p-6 text-center">
                            <span className="text-3xl text-blue-500">{data?.card1?.t1}</span>
                            <span className="text-xl">{data?.card1?.t2}</span>
                        </div>
                        {/* <!-- Small Card 2 --> */}
                        <div className="bg-white shadow-lg flex flex-col rounded-3xl p-6 text-center">
                            <span className="text-3xl text-blue-500">{data?.card2?.t1}</span>
                            <span className="text-xl">{data?.card2?.t2}</span>
                        </div>
                        {/* <!-- Small Card 3 --> */}
                        <div className="bg-white shadow-lg flex flex-col rounded-3xl p-6 text-center">
                            <span className="text-3xl text-blue-500">{data?.card3?.t1}</span>
                            <span className="text-xl">{data?.card3?.t2}</span>
                        </div>
                        {/* <!-- Small Card 4 --> */}
                        <div className="bg-white shadow-lg flex flex-col rounded-3xl p-6 text-center">
                            <span className="text-3xl text-blue-500">{data?.card4?.t1}</span>
                            <span className="text-xl">{data?.card4?.t2}</span>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}
