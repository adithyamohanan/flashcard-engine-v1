import Line from '../../assets/Line.png';

function FlashCard() {

    return (

        <>

            <div className="w-[80%] mx-auto my-6">
                <h1 className="text-white text-5xl font-extrabold mb-2">Today's Review</h1>
                <img src={Line} alt="Line" className="w-70 h-auto my-2" />
                <p className="text-white text-lg font-sans">Flip the card to see the answer</p>
            </div>






            <div className='w-[80%] mx-auto my-6'>
                <div className="grid grid-cols-2 gap-2">
                    <div className="col-span-1 ...">

                        <div className="max-w-2xl h-64 bg-violet-300 rounded-2xl shadow-lg p-6 text-2xl text-center flex items-center justify-center">

                            <p className="text-black-600 mb-4">How many planets are in our solar system?</p>

                        </div>

                    </div>
                    <div className="col-span-1 ...">
                        <div className="max-w-2xl h-64 bg-yellow-200 rounded-2xl shadow-lg p-6 text-2xl grid grid-cols-2">

                            <p className="text-black-600 mb-4">Cards Due Today</p>
                            <p className="text-black-600 flex items-start justify-end">5 Remaining</p>


                        </div>
                    </div>
                    

                </div>
            </div>







        </>

    );
}

export default FlashCard;