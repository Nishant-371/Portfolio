import React, { useRef } from 'react';
import { animate, motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { BsArrowUpRight, BsChevronDown } from 'react-icons/bs';
import me from '../assets/profile_home.png'

const Home = () => {

    const clientCount = useRef(null);
    const projectCount = useRef(null);

    const animationClientCount = () => {
        animate(0, 16147, {
            duration: 1,
            onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
        });

    };

    const animationProjectsCount = () => {
        animate(0, 50, {
            duration: 1,
            onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),

        });

    };

    const animation = {

        h1: {
            initial: {
                x: '-100%',
                opacity: 0,
            },
            whileInView: {
                x: '0',
                opacity: 1,
            },
        },

        button: {
            initial: {
                x: '-100%',
                opacity: 0,
            },
            whileInView: {
                x: '0',
                opacity: 1,
            },
        }
    }

    return (

        <div id='home'>

            <section>
                <div>
                    <motion.h1 {...animation.h1} transition={{ delay: 0.3, }}>
                        Hi, I am <br /> Nishant Taliwal
                    </motion.h1>

                    <Typewriter options={
                        {
                            strings: ['A Developer', 'A Designer', 'A Creator', 'A Learner'],
                            autoStart: true,
                            loop: true,
                            cursor: '',
                            wrapperClassName: 'typewriterpara',
                        }

                    } />

                    <div>
                        <a href="mailto:taliwalnishant@gmail.com">Hire Me</a>
                        <a href="https://github.com/Nishant-371/" target={'blank'}>Projects <BsArrowUpRight /> </a>
                    </div>

                    <article>
                        <p>
                            +
                            <motion.span whileInView={animationClientCount} ref={clientCount}></motion.span>
                        </p>

                        <span>Hours Dedicated</span>
                    </article>

                    <aside>

                        <article>
                            <p>
                                +
                                <motion.span whileInView={animationProjectsCount} ref={projectCount}></motion.span>
                            </p>

                            <span>Projects Made</span>
                        </article>

                        <article data-special>
                            <p>Contact </p>
                            <span>taliwalnishant@gmail.com</span>
                        </article>
                    </aside>

                </div>
            </section>

            <section>
                <img src={me} alt="nishant" />
            </section>
            
             <BsChevronDown /> 
        </div>

    )
}

export default Home