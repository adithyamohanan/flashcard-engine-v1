import './Hero.css';
import Logo from '../../assets/FlashFlow.png';
import Arrow from '../../assets/arrow.png';

function Hero() {
    const scrollToSection = () => {
        const section = document.getElementById("next-section");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (

        <div className="hero">


            <div className="w-full sm:w-[80%] mx-auto flex flex-col sm:flex-row gap-8 items-center">



                <div className="flex-1 flex">
                    <div className="scroll-circle" onClick={scrollToSection}>
                        <svg viewBox="0 0 100 100">
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
                        <div className="center-icon">↓</div>
                    </div>
                </div>


                <div className="flex-1 text-lg">
                    <img src={Logo} alt="Logo" className="mx-auto" />


                    <div className="paragraph-container text-white">
                        <p className="mb-4">
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
