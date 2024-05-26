import Image from "next/image";
import { NewsLetter } from "@/asset";

export default function NewsLetterCard() {
    return (
        <>
            <section className="w-full">
                <div className="max-w-sm mx-auto bg-[#FFF4EB] shadow-lg rounded-lg overflow-hidden">
                    <div className="flex items-center justify-between p-4">
                        <div className="text-left">
                            <h2 className="text-xl text-blue-950 font-bold">Subscribe to our <span className="text-blue-500">Newsletter</span></h2>
                        </div>
                        <div className="w-1/3">
                            <Image
                                src={NewsLetter}
                                alt=""
                                width={50}
                                height={50}
                                className="w-full h-auto rounded"
                            />
                        </div>
                    </div>
                    <div className="p-4">
                        <button className="w-full bg-blue-950 text-white py-2 px-4 rounded hover:bg-blue-950">Subscribe Now</button>
                    </div>
                </div>
            </section>
        </>
    );
}
