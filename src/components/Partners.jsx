import React from "react";
import Logo1 from '../assets/partners/p1.png'
import Logo2 from '../assets/partners/p2.png'
import Logo3 from '../assets/partners/p3.png'
import Logo4 from '../assets/partners/p4.png'
import Logo5 from '../assets/partners/p5.png'
import Logo6 from '../assets/partners/p6.png'
import Logo7 from '../assets/partners/p7.png'
import Logo8 from '../assets/partners/p8.png'

const Partners = () => {
    const logos = [ Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8 ]
    return (
        <div className="max-w-screen-3xl container bg-[#F7F7F7] mx-auto flex flex-col items-center py-8 z-0">
            <div className="grid grid-cols-4 grid-rows-2 gap-8 items-center mx-auto mix-blend-darken">
                {logos.map((logo) => (
                    <div className="w-32 mx-auto">
                        <img src={logo}/>
                    </div>
                ))}

            </div>
        </div>
    )
};

export default Partners;