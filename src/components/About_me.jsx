import React from 'react'
import me from "../assets/pic1.jpg"

const About_me = () => {
    return (

        <section id='About_me' className='about'>

            <div className='content'>
                <img src={me} alt="" srcset="" />
                <div className="text">
                    <h1>About Me</h1>
                    <h5>C++|JAVA|HTML|CSS|JS|jQuery|REACT|REDUX|NODE| <br /> EXPRESS|REST API|PHP|MONGODB</h5>

                    <p>I am a Web Developer with almost <b>2 years</b> of experience working in the field of Web. I am currently pursuing
                        <b> Bachelors’s Degree in Computer Science</b>  from <b>Jaypee Institute of Information and Technology.</b>  I have worked on projects involving the development and implementation of websites for non-profit organizations as well as public schools.
                        <br /> <br />

                        I have also worked on projects involving the development and implementation of various <b>e-commerce websites</b>  for corporations ranging from small businesses to Fortune 500 companies.
                        <br />
                        <br />

                        I have experience in developing and implementing solutions to help these companies build and market their own web-based products.
                    </p>

                    {/* <button type='button'>Hire Me</button> */}
                </div>
            </div>

        </section>
    )
}

export default About_me
