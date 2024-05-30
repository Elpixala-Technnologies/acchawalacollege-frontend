import Image from 'next/image';
import { FC } from 'react';
import Wrapper from '../Wrapper';

const DiscoverTopCoursesCardProps: FC<DiscoverTopCollegesProps> = ({ image, name, location, rating, reviews, priceRange, distance }) => {
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-sm m-4">
            <Image src={image} alt={name} width={303} height={288} className="w-full rounded-xl" />
            <div className="px-2 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">{location}</p>
                <div className="flex items-center my-2">
                    <span className="w-7 h-7 text-white text-center rounded-b-lg bg-blue-500">{rating}</span>
                    <span className='text-gray-600 ml-1'>Excellent.</span>
                    <span className="ml-2 text-gray-600">{reviews}.</span>
                    <span className="ml-2 text-gray-600">{distance} km away</span>
                </div>
                <div className="text-yellow-600 font-bold mt-2">{priceRange}</div>
            </div>
        </div>
    );
};

export default DiscoverTopCoursesCardProps;


