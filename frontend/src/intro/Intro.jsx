import React from 'react'
import styles from './Intro.module.css'
import arrowicon from './arrow.svg'
import screenshot1 from './image.png'
import screenshot2 from './result.png'
import { useNavigate } from 'react-router-dom'

const Intro = () => {
    const navigate = useNavigate();

    const goToHome = () =>  {
        navigate('/home')
    };
  return (
    <div>
      <h1>Legal Lens</h1>
      <p>Welcome to our website, your go-to resource for legal advice and constitutional support. Simply ask your questions, and we'll provide clear and concise answers based on the law to help you better understand your rights and obligations. Whether you're looking for information on legal matters or need guidance on constitutional issues, we're here to provide the knowledge you need at your fingertips.</p>
      <div className='styles.chatbutton'><button onClick={goToHome}>chat with bot 
        <img src={arrowicon} alt="arrow" />
        </button>
        </div>
        <h3>Explore a glimpse of our website in action </h3>
        <div className='styles.screenshots'>
            <img src={screenshot1} className={styles.screenshot1} alt="image1" />
            <img src={screenshot2} className={styles.screenshot2} alt="image2" />
        </div>
    </div>
  )
}

export default Intro
