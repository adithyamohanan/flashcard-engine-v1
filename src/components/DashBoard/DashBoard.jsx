import './DashBoard.css';
import Line from '../../assets/line.png';
import DoughnutChart from './DoughnutChart/DoughnutChart';
import LineChart from './LineChart/LineChart';
import Trophy from '../../assets/trophy.png';
import Vlogger from '../../assets/vlogger.gif';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from 'react'; 

import {
    Layers,
    Clock,
    CheckCircle,
    Flame
} from "lucide-react";


function DashBoard({ dashboardData }) {

    const { cardsDueToday, cardsMastered} = dashboardData;

    const [totalCards, setTotalCards] = useState(0);

    useEffect(() => {
        const savedCards = localStorage.getItem('flashcards');
        if (savedCards) {
            const parsedCards = JSON.parse(savedCards);
            setTotalCards(parsedCards.length);
        }
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: true,    
        });
    }, []);

    return (
        <>
            <div data-aos="fade-up" className="w-[80%] mx-auto my-6" id='dashboard'>
                <h1 className="text-white text-center text-5xl font-extrabold" id='dashboard'>Track Your Progress</h1>
                <img src={Line} alt="Line" className="w-70 h-auto mx-auto" />
            </div>

            <div data-aos="fade-up" className="w-[80%] mx-auto my-10">
                <div className="grid grid-cols-3 gap-2">

                    <div className="col-span-1">
                        <div className="w-full h-60 dashcard flex flex-col justify-center items-center gap-3">

                            <img
                                src={Vlogger}
                                alt="Welcome GIF"
                                className="w-16 h-16 rounded-full"
                            />
                            <p className="text-white text-center text-lg font-medium">Welcome Back, Adithya</p>
                        </div>
                    </div>

                    
                    <div className="col-span-1">
                        <div className="w-full h-60 dashcard flex items-center justify-center gap-10">
                            <p className='text-white'>My Progress</p>
                            <DoughnutChart streak={dashboardData.progress} total={25} />
                        </div>
                    </div>



                    
                    <div className="col-span-1">
                        <div className="w-full h-60 dashcard flex flex-col justify-center items-center gap-4">
                            <Layers className="text-white w-8 h-8 hover:scale-105 transition-transform" />
                            <p className="text-white text-center text-lg font-medium">Total FlashCards</p>
                            <p className="text-white text-6xl font-bold">{totalCards}</p>
                        </div>
                    </div>

                    
                    <div className="col-span-1">
                        <div className="w-full h-60 dashcard flex flex-col justify-center items-center gap-4">
                            <Clock className="text-white w-8 h-8 hover:scale-105 transition-transform" />
                            <p className="text-white text-center text-lg font-medium">Cards Due Today</p>
                            <p className="text-white text-6xl font-bold">{cardsDueToday}</p>
                        </div>
                    </div>

                    
                    <div className="col-span-1">
                        <div className="w-full h-60 dashcard flex flex-col justify-center items-center gap-4">
                            <CheckCircle className="text-white w-8 h-8 hover:scale-105 transition-transform" />
                            <p className="text-white text-center text-lg font-medium">Cards Mastered</p>
                            <p className="text-white text-6xl font-bold">{cardsMastered}</p>
                        </div>
                    </div>

                    
                    <div className="col-span-1">
                        <div className="w-full h-60 dashcard flex flex-col justify-center items-center gap-4">
                            <Flame className="text-white w-8 h-8 hover:scale-105 transition-transform" />
                            <p className="text-white text-center text-lg font-medium">Days Streak</p>
                            <p className="text-white text-6xl font-bold">{dashboardData.streak}</p>
                        </div>
                    </div>

                    
                    <div className="col-span-2">
                        <div className="w-full h-full dashcard">
                            <div className='w-full'>
                                <LineChart />
                            </div>
                        </div>
                    </div>

                    
                    <div className="col-span-1">
                        <div className="w-full h-full dashcard">
                            <div className='mt-4'>
                                <p className='text-center text-white font-semibold'>Milestones Reached</p>
                            </div>
                            <div className='flex flex-col items-center justify-center gap-4 mt-15'>
                                <img src={Trophy} alt="Prize" className='w-40' />
                                <p className='text-white mt-5 font-semibold'>Mastered 28 Cards Badge</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default DashBoard;
