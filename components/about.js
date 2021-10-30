import React from 'react';
import Image from 'next/image';


function About(props) {

    return (
        <section className='my-32 flex md:flex-row flex-col justify-around'>
            <div className='max-w-md'>
                <p className='text-2xl font-bold'>Frontend Developer</p>
                <p className='text-md'>mukutb.mac@gmail.com</p>
                <p className='text-md'>28 M, India</p>
                <p className='text-md mt-10'>
                    A Frontend Developer with a passion for building beautiful and functional web applications.
                    Have a sound background in web development and have worked with a wide range of technologies especially React and React based frameworks.
                    Love to learn new technologies and always looking for opportunities to grow my skills.
                    Currently in the process of going fullstack.
                    <br />
                    <br />
                    Apart from coding, I love to play table tennis, watch movies and listen to music. Also, an amateur piano player.
                </p>

            </div>
            <div>
                <img
                    src={'/assets/images/profile.jpeg'}
                    alt={`Main Image for Mukut`}
                    className={'max-w-xs shadow-sm hover:shadow-md transition-shadow duration-200'}
                />
            </div>
        </section>
    )
}

export default About