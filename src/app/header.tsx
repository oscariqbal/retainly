'use client';

import { useState } from "react";
import ButtonLink from '@/components/buttonlink';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="h-[20vh] bg-linear-to-b from-[var(--utility)] to-[var(--background)] ">
            <div className="flex flex-row justify-between h-[40%] w-[90%] md:w-[85%] mx-auto ">
                <div className="flex items-end mr-auto w-[20%]">
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 759.42 123.72" className="hidden md:block h-auto max-h-[50%] fill-current">
                        <path d="M74.21,2.14H3.45V13H45.32V72.9A42,42,0,0,1,3.45,115v10.91A52.94,52.94,0,0,0,50.83,96.12a52.94,52.94,0,0,0,47.38,29.74V115a42,42,0,0,1-41.87-42V13H74.21a42,42,0,0,1,42.05,41.87h10.91A53,53,0,0,0,74.21,2.14Z" transform="translate(-3.45 -2.14)"/>
                        <g>
                            <path d="M166.73,113.35V14.65H209.6a37.85,37.85,0,0,1,16.21,3.24A24.28,24.28,0,0,1,240.33,41v1.69q0,8.88-4.23,14.38a24.85,24.85,0,0,1-10.43,8v2.54a11.78,11.78,0,0,1,8.74,3.87q3.1,3.6,3.1,9.52v32.29H218.9V83.74a8.32,8.32,0,0,0-1.76-5.5q-1.77-2.11-5.85-2.11H185.34v37.22Zm18.61-54.14h22.28q6.63,0,10.36-3.6a12.61,12.61,0,0,0,3.74-9.52V44.68a12.71,12.71,0,0,0-3.66-9.51q-3.67-3.6-10.44-3.6H185.34Z" transform="translate(-3.45 -2.14)"/>
                            <path d="M255.84,113.35V14.65h63.45V31.57H274.45V55.12h40.89V72H274.45V96.43h45.69v16.92Z" transform="translate(-3.45 -2.14)"/>
                            <path d="M356.8,113.35V31.57H328V14.65h76.14V31.57H375.41v81.78Z" transform="translate(-3.45 -2.14)"/>
                            <path d="M398.81,113.35l25.95-98.7h32.43l25.94,98.7H464L458.6,91.64H423.35L418,113.35Zm28.91-38.92h26.51l-12-48.08H439.7Z" transform="translate(-3.45 -2.14)"/>
                            <path d="M495,113.35V14.65h18.62v98.7Z" transform="translate(-3.45 -2.14)"/>
                            <path d="M532.2,113.35V14.65h35.39l19.6,86h2.54v-86h18.33v98.7H572.67l-19.6-86h-2.54v86Z" transform="translate(-3.45 -2.14)"/>
                            <path d="M626.67,113.35V14.65h18.61V96.43H690.4v16.92Z" transform="translate(-3.45 -2.14)"/>
                            <path d="M710.7,113.35v-34L677.15,14.65h20.72L718.74,57h2.54l20.87-42.3h20.72L729.32,79.37v34Z" transform="translate(-3.45 -2.14)"/>
                        </g>
                    </svg>
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 123.72 123.72" className="block md:hidden h-auto max-h-[50%] fill-current">
                        <path d="M72.9,2.14H2.14V13H44V72.9A42,42,0,0,1,2.14,115v10.91A53,53,0,0,0,49.52,96.12a52.94,52.94,0,0,0,47.37,29.74V115A42,42,0,0,1,55,72.9V13H72.9A42,42,0,0,1,115,54.87h10.91A53,53,0,0,0,72.9,2.14Z" transform="translate(-2.14 -2.14)"/>
                    </svg>
                </div>
                <nav className="relative w-[25%]">
                    <button className="text-3xl flex md:hidden h-[100%] items-end ml-auto hover:cursor-pointer" onClick={toggleMenu}>
                        &#9776;
                    </button>
                    <ul className="hidden md:flex h-[100%] items-end justify-between ">
                        <li>
                            <ButtonLink href="/">Home</ButtonLink>
                        </li>
                        <li>
                            <ButtonLink href="/predict">Predict</ButtonLink>
                        </li>
                        <li>
                            <ButtonLink href="/about">About</ButtonLink>
                        </li>
                    </ul>
                    {isOpen && (
                        <ul className="absolute top-full left-0 bg-[var(--utility)] shadow-lg rounded-lg mt-2 w-full z-50 md:hidden border border-[var(--foreground)]">
                            <li>
                                <ButtonLink href="/"><div className="p-2 sm:p-3 w-full">Home</div></ButtonLink>
                            </li>
                            <li className="border-t border-[var(--foreground)]">
                                <ButtonLink href="/predict"><div className="p-2 sm:p-3 w-full">Predict</div></ButtonLink>
                            </li>
                            <li className="border-t border-[var(--foreground)]">
                                <ButtonLink href="/about"><div className="p-2 sm:p-3 w-full">About</div></ButtonLink>
                            </li>
                        </ul>
                    )}
                </nav>
            </div>
        </header>
    );
}