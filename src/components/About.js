import './../App.css';
import aboutJson from '../json/aboutJson';
function About() {
    return(
        <>
            <div className='AboutContainer'>
            <div className="initialText">
                <h2>Hello! I am </h2>
            </div>
            <div className="Name">
                <h1>Aarush Agrawal</h1>
            </div>
            <div className="Job">
                <b>Aspiring Full-Stack/Backend Engineer</b>
            </div>
            <div className="Introduction">
                <p>{aboutJson.intro}</p>
                <p>{aboutJson.careerInterests}</p>
                <p>{aboutJson.currentlyWorking}</p>

            </div>
            </div>
            <style> {`
            .AboutContainer {
                display: flex;
                flex-direction: column;
                align-self:center;
                align-items:center;
                justify-content:center;
            }
            .Introduction {
                display: flex;
                flex-direction: column;
                align-self:center;
                align-items: center;
                justify-content:center;
            }
                `}</style>

</>
    )
}
export default About;