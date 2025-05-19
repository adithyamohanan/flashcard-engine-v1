import React, { useState, useEffect } from 'react';
import '../MyFlashCard/MyFlashCard.css';
import { Link } from 'react-router-dom';

const COLORS = [
  'bg-blue-200',
  'bg-green-200',
  'bg-red-200',
  'bg-yellow-200',
  'bg-purple-200',
  'bg-pink-200',
];


function MyFlashCard() {
  
  const [cards, setCards] = useState([
    {
      question: 'What is space retention in dentistry?',
      answer: 'It refers to preserving the space left by a lost tooth to prevent shifting of adjacent teeth.',
      title: 'Space Retention',
    },
    {
      question: 'What is dental caries?',
      answer: 'Dental caries is tooth decay caused by bacterial infection leading to cavities.',
      title: 'Dental Caries',
    },
    {
      question: 'What is enamel?',
      answer: 'Enamel is the hard, outer surface layer of the tooth that protects against decay.',
      title: 'Enamel',
    },
    {
      question: 'What is gingivitis?',
      answer: 'Gingivitis is inflammation of the gums caused by plaque buildup.',
      title: 'Gingivitis',
    },
    {
      question: 'What is periodontal disease?',
      answer: 'A serious gum infection that damages gums and can destroy the jawbone.',
      title: 'Periodontal Disease',
    },
    {
      question: 'What is a root canal treatment?',
      answer: 'A procedure to remove infected pulp from inside a tooth and seal it.',
      title: 'Root Canal',
    },
    {
      question: 'What is plaque?',
      answer: 'A sticky film of bacteria that forms on teeth and gums.',
      title: 'Plaque',
    },
    {
      question: 'What is tartar?',
      answer: 'Hardened plaque that has been left on the teeth and can only be removed by a dentist.',
      title: 'Tartar',
    },
    {
      question: 'What is dental prophylaxis?',
      answer: 'A professional cleaning procedure to remove plaque and tartar from teeth.',
      title: 'Dental Prophylaxis',
    },
    {
      question: 'What is occlusion in dentistry?',
      answer: 'Occlusion refers to the contact between upper and lower teeth when the jaws bite together.',
      title: 'Occlusion',
    },
    {
      question: 'What is an impacted tooth?',
      answer: 'A tooth that has failed to erupt properly through the gums.',
      title: 'Impacted Tooth',
    },
    {
      question: 'What is dental implant?',
      answer: 'A surgical component that interfaces with the bone to support a dental prosthesis.',
      title: 'Dental Implant',
    },
    {
      question: 'What is fluorosis?',
      answer: 'A condition caused by excessive fluoride intake leading to tooth enamel discoloration.',
      title: 'Fluorosis',
    },
    {
      question: 'What is bruxism?',
      answer: 'The involuntary grinding or clenching of teeth, often during sleep.',
      title: 'Bruxism',
    },
    {
      question: 'What is xerostomia?',
      answer: 'A condition characterized by dry mouth due to reduced saliva production.',
      title: 'Xerostomia',
    },
    {
      question: 'What is a dental crown?',
      answer: 'A cap placed over a damaged tooth to restore its shape and function.',
      title: 'Dental Crown',
    },
    {
      question: 'What is a dental bridge?',
      answer: 'A fixed dental restoration used to replace one or more missing teeth by joining an artificial tooth to adjacent teeth.',
      title: 'Dental Bridge',
    },
    {
      question: 'What is malocclusion?',
      answer: 'Misalignment or incorrect relation between the teeth of the two dental arches.',
      title: 'Malocclusion',
    },
    {
      question: 'What is dentin?',
      answer: 'The layer of tooth beneath the enamel that contains microscopic tubules.',
      title: 'Dentin',
    },
    {
      question: 'What is orthodontics?',
      answer: 'A branch of dentistry dealing with the correction of teeth and jaws that are positioned improperly.',
      title: 'Orthodontics',
    },
  ]);

  const [adding, setAdding] = useState(false);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');
  const [newTitle, setNewTitle] = useState('');

  
  useEffect(() => {
    const storedCards = localStorage.getItem('flashcards');
    if (storedCards) {
      setCards(JSON.parse(storedCards));
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem('flashcards', JSON.stringify(cards));
  }, [cards]);

  const handleAddCard = () => {
    if (!newQuestion.trim() || !newAnswer.trim() || !newTitle.trim()) return;

    const newCard = {
      title: newTitle.trim(),
      question: newQuestion.trim(),
      answer: newAnswer.trim(),
    };

    setCards([...cards, newCard]);
    setAdding(false);
    setNewQuestion('');
    setNewAnswer('');
    setNewTitle('');
  };

  return (
    <div className="h-screen flex" style={{ backgroundColor: '#211853' }}>
  
      <aside className="w-64 bg-white/10 backdrop-blur-md shadow-lg p-6 flex flex-col text-white">
        <h1 className="text-3xl font-extrabold mb-6 tracking-wide">FlashFlow</h1>
        <hr className="border-white/20 mb-6" />
        <nav className="space-y-5 text-lg">
         <Link
            to="/dashboard"
            className="block px-5 py-2 rounded-lg hover:bg-white/20 transition"
          >
            Dashboard
          </Link>
          <a href="#" className="block px-5 py-2 rounded-lg hover:bg-white/20 transition">
            Profile
          </a>
         <Link
            to="/app"
            className="block px-5 py-2 rounded-lg hover:bg-white/20 transition"
          >
            Logout
          </Link>
        </nav>
      </aside>

      
      <main className="flex-1 p-10 overflow-y-auto text-white">
        <h2 className="text-4xl font-semibold mb-3 tracking-wide">My FlashCards</h2>

        <p className="text-white/70 mb-6 max-w-xl">
          Below are all your saved flashcards. You can view, edit, or delete them. Click on any card to see more details.
        </p>

        <hr className="border-white/20 mb-8 w-full" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          {!adding ? (
            <div
              className="border-2 border-dashed border-white/30 rounded-3xl shadow-lg aspect-square flex flex-col items-center justify-center cursor-pointer hover:bg-white/20 transition duration-300 ease-in-out"
              onClick={() => setAdding(true)}
            >
              <span className="text-6xl font-bold mb-2 select-none">＋</span>
              <span className="text-lg font-medium select-none">Add New Card</span>
            </div>
          ) : (
            <div className="bg-white/10 border border-white/40 rounded-3xl shadow-lg aspect-square p-8 flex flex-col justify-between">
              <input
                type="text"
                placeholder="Card Title"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="mb-5 p-3 rounded-lg bg-white text-black font-semibold placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
              <textarea
                placeholder="Type your question..."
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                className="mb-5 p-3 rounded-lg bg-white text-black resize-none h-20 font-medium placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
              <textarea
                placeholder="Type your answer..."
                value={newAnswer}
                onChange={(e) => setNewAnswer(e.target.value)}
                className="mb-8 p-3 rounded-lg bg-white text-black resize-none h-28 font-medium placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
              <div className="flex justify-between">
                <button
                  onClick={handleAddCard}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
                >
                  Save
                </button>
                <button
                  onClick={() => setAdding(false)}
                  className="bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-700 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          
          {cards.map((card, idx) => {
            const colorClass = COLORS[idx % COLORS.length];
            return (
              <div
                key={idx}
                className={`${colorClass} text-black p-8 rounded-3xl shadow-xl aspect-square flex flex-col justify-center hover:scale-[1.03] transition-transform duration-300 cursor-pointer`}
                title={card.title}
              >
                <h3 className="text-2xl font-bold mb-5 text-center">{card.title}</h3>
                <div className="space-y-4 text-center">
                  <p className="font-semibold text-lg leading-snug">Q: {card.question}</p>
                  <p className="text-base leading-relaxed opacity-90">{card.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default MyFlashCard;
