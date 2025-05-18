import React, { useState, useEffect } from 'react';

function FlashcardsApp() {
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
            // add other cards here
        ];
    };

    const [cards, setCards] = useState(getInitialCards);
    const [currentIndex, setCurrentIndex] = useState(0); // index of currently shown card

    const todayISO = new Date().toISOString().split('T')[0];

    // Filter due cards (due today or before)
    const dueCards = cards.filter(card => {
        const reviewDate = card.nextReview ? card.nextReview.split('T')[0] : '1970-01-01';
        return reviewDate <= todayISO;
    });

    // Reset currentIndex if it is out of bounds (e.g., when dueCards length shrinks)
    useEffect(() => {
        if (currentIndex >= dueCards.length) {
            setCurrentIndex(0);
        }
    }, [dueCards.length, currentIndex]);

    // Save cards to localStorage on every cards update
    useEffect(() => {
        localStorage.setItem('flashcards', JSON.stringify(cards));
    }, [cards]);

    // Helper to add days to a date string 'YYYY-MM-DD'
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

        // Use a timeout to allow `cards` state and filtered `dueCards` to update before setting the new index
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

    if (dueCards.length === 0) {
        return <div><h1>No flashcards due today!</h1></div>;
    }

    const currentCard = dueCards[currentIndex];

    return (
        <div>
            <h1>Flashcards Due Today ({dueCards.length})</h1>
            <div>
                <strong>Q:</strong> {currentCard.question} <br />
                <strong>A:</strong> {currentCard.answer} <br />
                <button onClick={() => handleAnswer(true)}>I know</button>
                <button onClick={() => handleAnswer(false)}>I don't know</button>
            </div>
        </div>
    );
}

export default FlashcardsApp;
