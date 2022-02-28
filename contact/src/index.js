import React from 'react'
import ReactDom from 'react-dom'
import ReactDOM from 'react'
import './index.css'
import logo from './logo.png'
import text3d from './text3d.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUserCheck, faEnvelope, faMessage, faPaperPlane } from '@fortawesome/free-solid-svg-icons'



const App = () => {
    return (
        <div className='main'>
            <div className='left'>

                <ImageCompo
                    src={images[0].src}
                    class={images[0].class}
                    alt={images[0].alt}
                />

                <button className='top'>
                    <FontAwesomeIcon className="fa" icon={faPaperPlane} />
                    Contact With Yoctoron .
                </button>

                <FormCompo
                    email={forms[0].label1}
                    message={forms[0].label2}
                    emailIcon={forms[0].icon1}
                    messageIcon={forms[0].icon2}
                    submitIcon={forms[0].submit}
                />

            </div>

            <div className='right'>
                <ImageCompo
                    src={images[1].src}
                    class={images[1].class}
                    alt={images[1].alt}
                />
            </div>

        </div>
    )
}

const images = [
    {
        class: 'logoImage',
        src: logo,
        alt: 'logo'
    },
    {
        class: 'text3dImage',
        src: text3d,
        alt: 'text3d'
    }

]

const forms = [
    {
        label1: "Email",
        label2: "Message",
        icon1: faEnvelope,
        icon2: faMessage,
        submit: faPaperPlane
    }
]
const ImageCompo = (props) => {
    return (
        <img className={props.class} alt={props.alt} src={props.src} />
    )
}

const FormCompo = (props) => {
    return (
        <form action='#'>
            <div className='iconText'>
                <FontAwesomeIcon className="fa" icon={props.emailIcon} />
                <label>{props.email}</label>
            </div>
            <input type="email" required />
            <div className='iconText'>
                <FontAwesomeIcon className="fa" icon={props.messageIcon} />
                <label>{props.message}</label>
            </div>
            <input className='big' type="text" required/>

            <button type="submit" value="submit">
                <FontAwesomeIcon className="fa" icon={props.submitIcon} />submit
            </button>
        </form>
    )
}




ReactDom.render(
    <App />,
    document.getElementById('root')
)
