import './Hero.css';
import Logo from '../../assets/FlashFlow.png';
import Arrow from '../../assets/arrow.png';
import Idea from '../../assets/idea.png';
import { Link } from 'react-scroll';

function Hero() {
    const scrollToSection = () => {
        const section = document.getElementById("next-section");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="hero">
            <div className="w-full sm:w-[80%] mx-auto flex flex-col sm:flex-row items-start">

                
                <div className="flex-1 relative flex flex-col justify-start items-start gap-50">
                    
                   
                    <div className="text-white mb-4 flex items-center gap-2">
                        <img src={Idea} alt='Idea' className='w-10'/>
                        <h2 className="text-xl font-semibold">Effortless learning starts here.</h2>
                    </div>

                    
                    <div className="scroll-circle cursor-pointer" onClick={scrollToSection}>
                        <Link to='flash-v1' smooth={true} duration={500}>
                        <svg className='svg1' viewBox="0 0 100 100">
                            <defs>
                                <path
                                    id="circlePath"
                                    d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                                />
                            </defs>
                            <text fontSize="7" fill="white">
                                <textPath xlinkHref="#circlePath">
                                    Scroll Down • Scroll Down • Scroll Down •
                                </textPath>
                            </text>
                        </svg>
                        </Link>
                        <div className="center-icon"><Link to='flash-v1' smooth={true} duration={500}>↓</Link></div>
                    </div>
                </div>

               
                <div className="flex-1 text-lg">
                    <img src={Logo} alt="Logo" className="mx-auto" />
                    <div className="paragraph-container text-white font-semibold">
                        <p className="mb-4 ">
                            Master anything faster with smart, science-backed flashcards.
                        </p>
                        <p>
                            Powered by spaced repetition and real-time review stats to help you retain more, stress less, and succeed.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Hero;
