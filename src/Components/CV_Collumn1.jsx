import img1 from './Assets/Screenshot 2026-04-22 171025.png'
import img2 from './Assets/Screenshot 2026-04-18 175303.png'
import img3 from './Assets/Screenshot 2026-04-22 171135.png'

function Collumn1(){
    return(
        <>
        <div className='Container'>
        <div className='TopBox'><h1 className='cv'>My Cv</h1></div>
        <div className="Col1">

            
            <div className="right">
                <h1 className="Myprojects">My projects</h1>
                <h3>-Websites using React like this One, here are some examples:</h3>
                <img src={img1} alt='Picture of a amazing website' width={300}/>
                <img src={img3} alt='Picture of a amazing website' width={300}/>
                <img src={img2} alt='Picture of a amazing website' width={300}/>
                <h3>I have also made many other projects outside of website development
                    such as small games made with pygame, and many other python projects using libaries 
                    like tkinter, matploplib and pandas.
                </h3>
            </div>
            <div className="left">
                <div className="TextBox">
                <h1 className="Header_Title">About me</h1>
                <h3 className="p1">I am a motivated 17-year-old student studying Software Development at West
                     Nottinghamshire College. I enjoy learning new technologies and applying my
                      skills to
                     build practical projects, including games and websites developed using React.
                </h3>
                <h1 className="Ex">Experience</h1>
                <h3 className="p2">During my work placement in web development, I gained valuable
                     experience working with React and understanding how development
                      works in a professional
                     environment. I also have experience with Python from both college
                      and personal projects.</h3>

                    <h3 className="p3">I am eager to continue developing my skills and gain further
                         experience within the tech industry. Outside of my studies,
                          I enjoy gaming, watching films, and spending time with friends
                     and family.</h3>
                    <h1 className='p4'>My best qualities</h1>
                    <h3 className='p5'>I am a motivated and reliable individual who enjoys learning 
                        new skills and taking on challenges. I work well both independently
                         and as part of a team, and I am always willing to ask questions and 
                         improve my understanding. I am patient when solving problems and try 
                         to stay focused even when tasks become difficult. I also take pride
                         in my work and aim to produce clean, well-thought-out solutions in 
                         everything I create.</h3>
                     
                
                </div> 
            </div>
            
        </div>
        </div>
        </>
    )
}
export default Collumn1