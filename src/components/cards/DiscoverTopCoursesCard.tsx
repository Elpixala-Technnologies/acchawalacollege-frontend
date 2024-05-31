import Image from "next/image";
import { FC } from "react";
import Wrapper from "../Wrapper";

interface DiscoverTopCollegesProps {
    image: string;
    name: string;
    location: string;
    rating: string;
    reviews: string;
    priceRange: string;
    distance: string;
}
const DiscoverTopCoursesCardProps: FC<DiscoverTopCollegesProps> = ({
  image,
  name,
  location,
  rating,
  reviews,
  priceRange,
  distance,
}) => {
  return (
    <div className="m-2 max-w-xs overflow-hidden rounded shadow-sm">
      <Image
        src={image}
        alt={name}
        width={303}
        height={288}
        className="w-full rounded-xl"
      />
      <div className="px-2 py-4">
        <div className="mb-2 text-xl font-bold">{name}</div>
        <p className="text-base text-gray-700">{location}</p>
        <div className="my-2 flex items-center">
          <span className="h-7 w-7 rounded-b-lg bg-blue-500 text-center text-white">
            {rating}
          </span>
          <span className="ml-1 text-gray-600">Excellent.</span>
          <span className="ml-2 text-gray-600">{reviews}.</span>
          <span className="ml-2 text-gray-600">{distance}away</span>
        </div>
        <div className="mt-2 font-bold text-yellow-600">{priceRange}</div>
      </div>
    </div>
  );
};

export default DiscoverTopCoursesCardProps;
