import Line from '../../assets/Line.png';
import './FlashCard.css';
import Cancel from '../../assets/cancel.png';
import CheckMark from '../../assets/check-mark.png';
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence, motion } from 'framer-motion';

function FlashCard({ setDashboardData }) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        const lastDate = localStorage.getItem('lastActiveDate');
        const streak = parseInt(localStorage.getItem('streak') || '0', 10);

        if (!lastDate) {
            localStorage.setItem('lastActiveDate', today);
            localStorage.setItem('streak', '1');
        } else if (lastDate !== today) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            const yesterdayISO = yesterday.toISOString().split('T')[0];

            if (lastDate === yesterdayISO) {
                // Continued streak
                localStorage.setItem('streak', (streak + 1).toString());
            } else {
                // Missed a day
                localStorage.setItem('streak', '1');
            }

            localStorage.setItem('lastActiveDate', today);
        }
    }, []);


    const colors = [
        "bg-red-200",
        "bg-green-200",
        "bg-yellow-200",
        "bg-blue-200",
        "bg-purple-200",
        "bg-pink-200",
        "bg-orange-200",
        "bg-teal-200",
    ];


    const getInitialCards = () => {
        const saved = localStorage.getItem('flashcards');
        if (saved) {
            return JSON.parse(saved);
        }
        const today = new Date();
        const dummyData = [
            { question: "What is the capital of France?", answer: "Paris" },
            { question: "Who wrote 'Romeo and Juliet'?", answer: "William Shakespeare" },
            { question: "What is the largest planet in our solar system?", answer: "Jupiter" },
            { question: "What is the chemical symbol for water?", answer: "H2O" },
            { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci" },
            { question: "What is the square root of 64?", answer: "8" },
            { question: "What is the fastest land animal?", answer: "Cheetah" },
            { question: "Who discovered penicillin?", answer: "Alexander Fleming" },
            { question: "What is the longest river in the world?", answer: "Nile" },
            { question: "Which planet is known as the Red Planet?", answer: "Mars" },
            { question: "Who is known as the father of computers?", answer: "Charles Babbage" },
            { question: "What is the currency of Japan?", answer: "Yen" },
            { question: "What is the hardest natural substance?", answer: "Diamond" },
            { question: "Who invented the telephone?", answer: "Alexander Graham Bell" },
            { question: "What is the tallest mountain in the world?", answer: "Mount Everest" },
            { question: "Which country gifted the Statue of Liberty to the USA?", answer: "France" },
            { question: "What is the main language spoken in Brazil?", answer: "Portuguese" },
            { question: "Who wrote '1984'?", answer: "George Orwell" },
            { question: "What is the boiling point of water in Celsius?", answer: "100" },
            { question: "What is the smallest prime number?", answer: "2" },
            { question: "Who painted the ceiling of the Sistine Chapel?", answer: "Michelangelo" },
            { question: "What is the chemical symbol for gold?", answer: "Au" },
            { question: "How many continents are there?", answer: "7" },
            { question: "Who developed the theory of relativity?", answer: "Albert Einstein" },
            { question: "What is the hardest rock?", answer: "Diamond" }
        ];
        return dummyData.map((item, i) => {
            const dayOffset = Math.floor(i / 4);
            const reviewDate = new Date(today);
            reviewDate.setDate(today.getDate() + dayOffset);
            return {
                question: item.question,
                answer: item.answer,
                nextReview: reviewDate.toISOString().split('T')[0],
            };
        });
    };

    const [cards, setCards] = useState(getInitialCards);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [cardKey, setCardKey] = useState(0);

    const todayISO = new Date().toISOString().split('T')[0];

    const masteredCards = cards.filter(card => {
        const reviewDate = new Date(card.nextReview);
        const today = new Date();
        const diffInDays = (reviewDate - today) / (1000 * 60 * 60 * 24);
        return diffInDays >= 5;
    });


    const dueCards = cards
        .filter(card => (card.nextReview ? card.nextReview : '1970-01-01') <= todayISO)
        .slice(0, 5);


    useEffect(() => {
        if (currentIndex >= dueCards.length) {
            setCurrentIndex(0);
        }
    }, [dueCards.length, currentIndex]);

    useEffect(() => {
        localStorage.setItem('flashcards', JSON.stringify(cards));
    }, [cards]);

    useEffect(() => {
        setDashboardData({
            cardsDueToday: dueCards.length,
            cardsMastered: masteredCards.length,
            streak: parseInt(localStorage.getItem('streak') || '1', 10),
        });
    }, [dueCards.length, masteredCards.length]);
    

    const addDays = (dateStr, days) => {
        const date = new Date(dateStr);
        date.setDate(date.getDate() + days);
        return date.toISOString().split('T')[0];
    };


    const handleAnswer = (known) => {
        if (dueCards.length === 0) return;

        const cardToUpdate = dueCards[currentIndex];
        const cardGlobalIndex = cards.findIndex(c => c.question === cardToUpdate.question);

        const updatedCards = [...cards];
        updatedCards[cardGlobalIndex].nextReview = known ? addDays(todayISO, 5) : addDays(todayISO, 1);
        setIsFlipped(false);

        setCardKey(prev => prev + 1);
        setTimeout(() => {
            setCards(updatedCards);
            const newDueCards = updatedCards
                .filter(card => (card.nextReview ? card.nextReview : '1970-01-01') <= todayISO)
                .slice(0, 5);
            if (currentIndex >= newDueCards.length) {
                setCurrentIndex(0);
            }
        }, 400);
    };

    const handleReset = () => {
        localStorage.removeItem('flashcards');
        setCards(getInitialCards());
        setCurrentIndex(0);
    };

    

    if (dueCards.length === 0) {
        return (
            <div data-aos="fade-up" className="flex items-center justify-center min-h-screen px-4">
                <div className="bg-fuchsia-800 text-white rounded-xl shadow-lg p-10 max-w-xl w-full text-center">
                    <h1 className="text-3xl font-bold mb-4">🎉 Congratulations!</h1>
                    <p className="text-xl mb-2">You’ve completed today’s flashcards.</p>
                    <p className="text-lg mb-2">✅ All your reviews for today are done.</p>
                    <p className="text-md text-gray-300 mb-8">🕑 You can come back later or tomorrow for more practice.</p>
                    <button
                        onClick={handleReset}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium transition duration-300"
                    >
                        🔁 Reset Progress
                    </button>
                    <p className="text-sm text-red-300 mt-4">
                        ⚠️ This will clear all progress and restore default cards.
                    </p>
                </div>
            </div>
        );
    }

    

    const currentCard = dueCards[currentIndex];

    





    return (
        <>
            <div data-aos="fade-up" id='flash-v1' className="w-[80%] mx-auto my-6">
                <h1 className="text-white text-center text-5xl font-extrabold">Today's Review</h1>
                <img src={Line} alt="Line" className="w-70 h-auto mx-auto" />
                <p className='text-white font-serif text-3xl mb-3'>Hi, Adithya</p>
                <p className="text-white text-lg font-semibold">Flip the card to see the answer</p>
            </div>

            <div className='w-[80%] mx-auto my-6'>
                <div className="grid grid-cols-2 gap-2">

                    <div data-aos="fade-right" className="col-span-1">
                        <div
                            className="flip-card w-full h-60"
                            onClick={() => setIsFlipped(!isFlipped)}
                            style={{ cursor: "pointer" }}
                        >
                            <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
                                <div className="flip-card-front bg-orange-200 relative">
                                    <span className="absolute top-4 left-4 inline-block w-3 h-3 bg-green-500 rounded-full animate-ping"></span>
                                    <p className="text-black font-semibold text-xl">{currentCard.question}</p>
                                </div>
                                <div className="flip-card-back bg-blue-200">
                                    <p className="text-black font-semibold text-4xl">{currentCard.answer}</p>
                                </div>
                            </div>
                        </div>

                        <div className='mx-auto flex flex-row gap-4 mt-10'>
                            <button
                                className="mx-auto flex items-center gap-2 w-40 h-12 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-xl border border-white/20 shadow-md"
                                onClick={() => handleAnswer(false)}
                            >
                                <img src={Cancel} alt="False" className='w-5 h-5' />
                                I Don't Know
                            </button>
                            <button
                                className="mx-auto flex items-center gap-5 w-40 h-12 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-xl border border-white/20 shadow-md"
                                onClick={() => handleAnswer(true)}
                            >
                                <img src={CheckMark} alt="True" className='w-5 h-5' />
                                I Know
                            </button>
                        </div>
                    </div>



                    <div data-aos="fade-left" className="col-span-1">
                        <div className="curve-container mx-auto">
                            <svg className='mx-auto' id='svg2' width="200" height="600">
                                <path d="M 100 0 
                                         C 50 100, 150 200, 100 300 
                                         C 50 400, 150 500, 100 390"
                                    stroke="#f74ac9" fill="transparent" strokeWidth="4" />
                            </svg>
                            {
                                Array.from({ length: 4 }).map((_, idx) => {
                                    const otherCards = dueCards.filter((_, i) => i !== currentIndex);
                                    const card = otherCards[idx];
                                    if (card) {
                                        return (
                                            <div
                                                key={card.question}
                                                className={`card1 ${colors[idx % colors.length]} flex flex-col items-start justify-start pt-5 rounded-xl shadow-lg text-black text-left my-7`}
                                            >

                                                <p className="text-sm  font-semibold mb-5 break-words">{card.question}</p>

                                            </div>
                                        );
                                    } else {

                                        return (
                                            <div
                                                key={`placeholder-${idx}`}
                                                className="card1 bg-gray-100 flex flex-col items-center justify-center pt-5 rounded-xl shadow-lg text-gray-400 text-center my-7 border border-dashed border-gray-300"
                                            >
                                                <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"></div>
                                                <p className="text-xs font-semibold mb-1">No more cards</p>
                                            </div>
                                        );
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FlashCard;

