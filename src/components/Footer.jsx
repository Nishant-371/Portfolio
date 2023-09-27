import React from 'react'
import { AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiOutlineArrowUp, AiOutlineGithub } from 'react-icons/ai';
import me from "../assets/pic2.jpg"

const Footer = () => {
    return (
        <footer>
            <a href="#home"> <AiOutlineArrowUp /> </a>
            <div>
                <img src={me} alt="Founder" />
                {/* https://avatars.githubusercontent.com/u/25058652 */}
                <h2>Nishant Taliwal</h2>
                <p>I live and breathe development.</p>
            </div>

            <aside>
                <h2>Social Media</h2>

                <article>
                    <a href="https://github.com/Nishant-371/" target={'blank'}> <AiOutlineGithub /></a>
                </article>

                <article>
                    <a href="https://linkedin.com/in/nishanttaliwal" target={'blank'}> <AiFillLinkedin /></a>
                </article>

                <article>
                    <a href="https://twitter.com/nishanttaliwal" target={'blank'}> <AiFillTwitterCircle /></a>
                </article>  

                <article>
                    <a href="https://www.instagram.com/nishant___371" target={'blank'}> <AiFillInstagram /></a>
                </article>
                
            </aside>

        </footer>
    )
}

export default Footer;
