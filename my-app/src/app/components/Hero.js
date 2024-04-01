import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BackgroundGradientAnimation } from "../../components/ui/background-gradient-animation";
import { TypewriterEffectSmooth } from "../../components/ui/typewriter-effect";


function hero() {

    const words = [
        {
            text: "Build",
        },
        {
            text: "awesome",
        },
        {
            text: "apps",
        },
        {
            text: "with",
        },
        {
            text: "Aceternity.",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];
    return (


        <main className='heroBg ' id='#'>
            <BackgroundGradientAnimation className=''>
                <div className="flex h-[39rem] sm:h-[44rem] md:h-[39rem] lg:h-[36rem] xl:h-[38rem] justify-center   w-full bg-red flex-col md:flex-row">


                    <div className="h-full w-full flex flex-col justify-center hero-txt  mt-[5rem] sm:mt-[4rem] md:mt-0 hero1">
                        <div className="flex flex-col w-[80%] m-auto gap-6">
                            <div className=" text-[1.6rem] textJS sm:text-[2.8rem]">
                                <p>Women in technology and business.</p>
                            </div>
                            <div className="buttons flex flex-row gap-6 mb-[1rem] roboto text-[#FFD1E3]">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Corporis alias veritatis assumenda. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, soluta.</p>

                            </div>
                        </div>
                    </div>


                    <div className=" h-full w-full align-center ">

                        <div className="relative  lg:w-[55%] md:w-[55%] sm:w-[40%] w-[48%]  md:mt-[12rem] lg:h-[50%] md:h-[40%] h-[65%] my-auto justify-center m-auto">
                            <Image
                                src="/assets/hero-women.webp"
                                alt="GIF"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </BackgroundGradientAnimation>


        </main>

    );
}

export default hero;
