import Image from "next/image";
import { ReactNode } from "react";

export default function ImageCard({
    imagePath,
    title,
    children,
    noOverlay = false,
    rounded = "",
    containerHeight = "h-72",
}: {
    imagePath?: any;
    title?: string;
    children?: ReactNode;
    noOverlay?: boolean;
    rounded?: string;
    containerHeight?: string;
}) {
    return (
        <div className={`relative ${title} ${rounded} overflow-hidden ${containerHeight}`}>
            <Image
                src={imagePath}
                objectFit="fill"
                className="h-full w-full object-cover"
                alt=""
            />
            <div>
                <div className="font-bold text-xl text-red-500">{title}</div>
            </div>
            {!noOverlay ? (
                <div className="absolute inset-0 bg-black opacity-20 h-full w-full object-cover" />
            ) : (
                <></>
            )}
            <div className="absolute inset-0 p-6">
                <>{children}</>
            </div>
        </div>
    );
}
