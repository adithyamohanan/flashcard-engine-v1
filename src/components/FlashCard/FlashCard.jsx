import Line from '../../assets/Line.png';
import './FlashCard.css';
import Cancel from '../../assets/cancel.png';
import CheckMark from '../../assets/check-mark.png';

function FlashCard() {

    return (

        <>



            <div className="w-[80%] mx-auto my-6">
                <h1 className="text-white text-center text-5xl font-extrabold">Today's Review</h1>
                <img src={Line} alt="Line" className="w-70 h-auto mx-auto" />
                <p className='text-white font-serif text-3xl mb-3'>Hi, Adithya</p>
                <p className="text-white text-lg font-semibold">Flip the card to see the answer</p>
            </div>






            <div className='w-[80%] mx-auto my-6'>
                <div className="grid grid-cols-2 gap-2">
                    <div className="col-span-1 ...">




                        <div className="card w-full h-100 rounded-3xl border-1 shadow-lg p-6 text-white text-2xl text-center flex items-center justify-center relative">


                            <div className="absolute top-4 left-4 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>

                            <p className="text-black-600 font-semibold mb-4">What is the capital of France?</p>

                        </div>

                        <div className='mx-auto flex flex-row gap-4 mt-10'>

                            <button className="mx-auto flex items-center gap-2 w-40 h-12 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-xl border border-white/20 shadow-md">
                                <img src={Cancel} alt="False" className='w-5 h-5' />
                                I Don't Know
                            </button>

                            <button className="mx-auto flex items-center gap-5 w-40 h-12 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-xl border border-white/20 shadow-md">
                                <img src={CheckMark} alt="True" className='w-5 h-5' />
                                I Know
                            </button>

                        </div>

                    </div>

                    <div className="col-span-1 ...">

                        <div class="curve-container mx-auto">

                            <svg id='svg2' width="200" height="600">
                                <path d="M 100 0 
               C 50 100, 150 200, 100 300 
               C 50 400, 150 500, 100 400"
                                    stroke="#f74ac9" fill="transparent" stroke-width="4" />
                            </svg>


                            <div className="card1 bg-blue-200 flex flex-col items-start justify-start p-4 rounded-xl shadow-lg text-black text-left">
                                <div className="absolute top-2 left-2 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                                <p className="text-lg font-semibold mb-2">What is the capital of France?</p>
                                <p className="text-sm text-gray-700">Due now</p>
                            </div>



                            <div className="card1 bg-red-200 flex flex-col items-start justify-start p-4 rounded-xl shadow-lg text-black text-left">
                                <p className="text-lg font-semibold mb-2">What is the largest mammal?</p>
                                <p className="text-sm text-gray-700">Due in 3 hours</p>
                            </div>

                            <div className="card1 bg-yellow-200 flex flex-col items-start justify-start p-4 rounded-xl shadow-lg text-black text-left">
                                <p className="text-lg font-semibold mb-2">Who wrote "Romeo and Juliet"?</p>
                                <p className="text-sm text-gray-700">Due in 5 hours</p>
                            </div>

                            <div className="card1 bg-cyan-200 flex flex-col items-start justify-start p-4 rounded-xl shadow-lg text-black text-left">
                                <p className="text-lg font-semibold mb-2">What is the chemical symbol for gold?</p>
                                <p className="text-sm text-gray-700">Due in 8 hours</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>







        </>

    );
}

export default FlashCard;