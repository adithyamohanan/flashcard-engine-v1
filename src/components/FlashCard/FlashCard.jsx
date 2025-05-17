import Line from '../../assets/Line.png';
import './FlashCard.css';

function FlashCard() {

    return (

        <>



            <div className="w-[80%] mx-auto my-6">
                <h1 className="text-white text-center text-5xl font-extrabold">Today's Review</h1>
                <img src={Line} alt="Line" className="w-70 h-auto mx-auto" />
                <p className="text-white text-lg font-sans">Flip the card to see the answer</p>
            </div>






            <div className='w-[80%] mx-auto my-6'>
                <div className="grid grid-cols-2 gap-2">
                    <div className="col-span-1 ...">

                        <div className="card w-full h-100 rounded-3xl border-1 shadow-lg p-6 text-white text-2xl text-center flex items-center justify-center">

                            <p className="text-black-600 mb-4">How many planets are in our solar system?</p>

                        </div>

                    </div>

                    <div className="col-span-1 ...">

                        <div class="curve-container mx-auto">
                        
                            <svg id='svg2' width="200" height="600">
                                <path d="M 100 0 
               C 50 100, 150 200, 100 300 
               C 50 400, 150 500, 100 400"
                                    stroke="#333" fill="transparent" stroke-width="4" />
                            </svg>

                           
                            <div class="card1 bg-blue-200 flex flex-col">

                                <p className=''>What is the capital of France?</p>
                                <p>Due now</p>

                            </div>
                            <div class="card1 bg-orange-200">

                                <p className=''>What is the capital of France?</p>
                                <p>Due now</p>

                            </div>
                            <div class="card1 bg-amber-200">

                                <p className=''>What is the capital of France?</p>
                                <p>Due now</p>

                            </div>
                            <div class="card1 bg-cyan-200">

                                <p className=''>What is the capital of France?</p>
                                <p>Due now</p>

                            </div>
                             <div class="card1 bg-cyan-200">

                                <p className=''>What is the capital of France?</p>
                                <p>Due now</p>

                            </div>
                            
                        </div>
                    </div>








                </div>
            </div>







        </>

    );
}

export default FlashCard;