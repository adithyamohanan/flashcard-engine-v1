import Line from '../../assets/Line.png';
import './FlashCard.css';
import Cancel from '../../assets/cancel.png';
import CheckMark from '../../assets/check-mark.png';
import React, { useState, useEffect } from 'react';

function FlashCard() {
    const getInitialCards = () => {
        const saved = localStorage.getItem('flashcards');
        if (saved) {
            return JSON.parse(saved);
        }
        const todayISO = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
        return [
            { question: 'What is the capital of France?', answer: 'Paris', nextReview: todayISO },
            { question: 'What is the square root of 64?', answer: '8', nextReview: todayISO },
            { question: 'Who wrote "1984"?', answer: 'George Orwell', nextReview: todayISO },
            { question: 'What is the chemical symbol for gold?', answer: 'Au', nextReview: todayISO },
        ];
    };

    const [cards, setCards] = useState(getInitialCards);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const todayISO = new Date().toISOString().split('T')[0];

    const dueCards = cards.filter(card => {
        const reviewDate = card.nextReview ? card.nextReview.split('T')[0] : '1970-01-01';
        return reviewDate <= todayISO;
    });

    useEffect(() => {
        if (currentIndex >= dueCards.length) {
            setCurrentIndex(0);
        }
    }, [dueCards.length, currentIndex]);

    useEffect(() => {
        localStorage.setItem('flashcards', JSON.stringify(cards));
    }, [cards]);

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
        setCards(updatedCards);

        setIsFlipped(false);

        setTimeout(() => {
            const nextIndex = currentIndex + 1;
            const newDueCards = updatedCards.filter(card => {
                const reviewDate = card.nextReview ? card.nextReview.split('T')[0] : '1970-01-01';
                return reviewDate <= todayISO;
            });

            if (nextIndex >= newDueCards.length) {
                setCurrentIndex(0);
            } else {
                setCurrentIndex(nextIndex);
            }
        }, 0);
    };

    const handleReset = () => {
        localStorage.removeItem('flashcards');
        setCards(getInitialCards());
        setCurrentIndex(0);
    };

    if (dueCards.length === 0) {
    return (
        <div className="flex items-center justify-center min-h-screen px-4">
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
            <div id='flash-v1' className="w-[80%] mx-auto my-6">
                <h1 className="text-white text-center text-5xl font-extrabold">Today's Review</h1>
                <img src={Line} alt="Line" className="w-70 h-auto mx-auto" />
                <p className='text-white font-serif text-3xl mb-3'>Hi, Adithya</p>
                <p className="text-white text-lg font-semibold">Flip the card to see the answer</p>
            </div>

            <div className='w-[80%] mx-auto my-6'>
                <div className="grid grid-cols-2 gap-2">
                    <div className="col-span-1">
                        <div className="flip-card w-full h-60" onClick={() => setIsFlipped(!isFlipped)}>
                            <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
                                <div className="flip-card-front">
                                    <p className="text-white font-semibold text-xl">{currentCard.question}</p>
                                </div>
                                <div className="flip-card-back">
                                    <p className="text-white font-semibold text-xl">{currentCard.answer}</p>
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

                    <div className="col-span-1">
                        <div className="curve-container mx-auto">
                            <svg id='svg2' width="200" height="600">
                                <path d="M 100 0 
                                         C 50 100, 150 200, 100 300 
                                         C 50 400, 150 500, 100 400"
                                    stroke="#f74ac9" fill="transparent" strokeWidth="4" />
                            </svg>

                            {dueCards.map((card, index) => (
                                <div key={index} className="card1 bg-blue-200 flex flex-col items-start justify-start p-4 rounded-xl shadow-lg text-black text-left my-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                                    <p className="text-lg font-semibold mb-2">{card.question}</p>
                                    <p className="text-sm text-gray-700">Due now</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FlashCard;
