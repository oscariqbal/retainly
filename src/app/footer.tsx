import ButtonLink from '@/components/buttonlink';
export default function Footer(){
    return (
        <footer className="h-[25vh] py-1 sm:py-2 md:py-3 lg:py-4">
        <div className="flex flex-col justify-end h-[100%] w-[90%] md:w-[85%] mx-auto">
            <div className='flex flex-col justify-end h-[75%] mb-[7%] sm:mb-[5.5%] md:mb-[4%] lg:mb-[2.5%]'>
                <div className='w-[100%] sm:w-[80%] md:w-[60%] lg:w-[40%]'>
                    <div className="flex h-[25px] sm:h-[30px] md:h-[35px] lg:h-[40px] py-[5px] sm:py-[6px] md:py-[7px] lg:py-[8px]">
                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 759.42 123.72" className="fill-current">
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
                    </div>
                    <p className='py-[5px] sm:py-[6px] md:py-[7px] lg:py-[8px] text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px]'>
                        Empowering machine learning to identify at-risk business customers and drive timely retention actions.
                    </p>
                </div>
            </div>
            <div className='h-[15%] sm:h-[18%] md:h-[22%] lg:h-[24%] flex justify-center items-center'>
                <p className='text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px]'>Copyright © 2025, Retainly</p>
            </div>
        </div>
        </footer>
    )
}