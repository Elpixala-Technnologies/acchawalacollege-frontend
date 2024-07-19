import React from 'react'
import Image from 'next/image'
import cardImg from "@/asset/latestUpdates/heroImg.png"
function Card() {

    const CardItems = [
        {
            date:"June 24,2024",
            time:"5:50 PM",
            title: "UN chief calls for ‘dramatic shift’ to transform education worldwide",
            desc:"JEE Advanced Opening and Closing Ranks 2024 for Old IITs - Are you waiting for JoSAA to release the counselling results to figure out the IITs you are eligible for? Don’t wait any longer and.... Read More",
            img:cardImg,  
        },
        {
            date:"June 25,2024",
            time:"5:50 PM",
            title: "UN chief calls for ‘dramatic shift’ to transform education worldwide",
            desc:"JEE Advanced Opening and Closing Ranks 2024 for Old IITs - Are you waiting for JoSAA to release the counselling results to figure out the IITs you are eligible for? Don’t wait any longer and.... Read More",
            img:cardImg,  
        },
        {
            date:"June 26,2024",
            time:"5:50 PM",
            title: "UN chief calls for ‘dramatic shift’ to transform education worldwide",
            desc:"JEE Advanced Opening and Closing Ranks 2024 for Old IITs - Are you waiting for JoSAA to release the counselling results to figure out the IITs you are eligible for? Don’t wait any longer and.... Read More",
            img:cardImg,  
        },
    ];

  return (
    <div>
        {/* image  */}
        <div><Image src={cardImg} alt='img'></Image></div>
        {/* content  */}
        <div className='p-1'>
            {/* profile  */}
            <div>
                <div></div>
                <div></div>
            </div>

            {/* description */}
            <div>
                <span>
                </span>
                <span>
                </span>
                <span>
                </span>
            </div>
        </div>
        
    </div>
  )
}

export default Card