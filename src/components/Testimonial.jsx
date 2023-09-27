import React from 'react'

const testimonial = () => {
    return (
        <div id='testimonial'>
            <h2>About Me</h2>
            <section>
                <TestimonialCard name={"Nishant"} feedback={'he would you like to join'} />
            </section>

        </div>
    )
}

const TestimonialCard = ({ name, feedback }) => (
    <article>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User" />
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
)

export default testimonial
