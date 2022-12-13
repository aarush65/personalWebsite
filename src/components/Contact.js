import {AiOutlineGithub, AiFillLinkedin, AiOutlineMail} from 'react-icons/ai'

function Contact() {
    return (
        <>
        <h4 className='variousContacts'>Contact Me</h4>
        <div className="variousContacts">
            <a href = "https://github.com/aarush65" target="_blank">
                            <AiOutlineGithub color='black'/>
            </a>
            <a href= "https://www.linkedin.com/in/aarush-agrawal-b0bb331b0/" target = "_blank">
                <AiFillLinkedin/>
            </a>
            <a href = "mailto:aaagrawal@ucdavis.edu" target= "_blank"><AiOutlineMail color='black'/></a>
        </div>
        <style>{`
        .variousContacts {
            display: flex;
            flex-direction: row;
            align-self:center;
            align-items: center;
            justify-content:center;
        }

            `}

        </style>
        </>
    )
}
export default Contact