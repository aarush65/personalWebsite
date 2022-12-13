import {AiOutlineGithub} from 'react-icons/ai'
const Project=({data})=> {
    return (
        <>
            <div className='outerContainer'>
                <div className='box'>
                    <div className='upper'>
                        <b className='Title'>
                            {data.title}
                        </b>
                        <div className='modify'>
                        <a href = {data.link} target="_blank">
                            <AiOutlineGithub/>
                        </a>
                        </div>
                    </div>
                    <p className='Text'>
                        {data.description}
                    </p>
                    
                </div>
            </div>
        <style>{`
            .outerContainer {
                display:flex;
                align-items:center;
                justify-content:center;
            }
            .box {
                width:400px;
                padding: 10px;
                border: solid 2px black;
                border-radius: 10px;
            }
            .Title {
                font: bold;
            }
            .upper {
                display:flex;
                flex-direction:row;
            }
            
            
        `}

        </style>
        </>

    )
}
const Projects = ({data}) => {
    console.log(data)
    return (
        <>
            
                <div className='Projects'>
                <h4>Personal Projects</h4>
                    {
                        data.map((proj,index)=> {
                            return(
                                <>
                            <Project key = {index} data={proj}></Project>
                            <p>---------------------------------------------------</p>
                            </>
                            )
                        })
                    }


                </div>
                <style>{`
                .Projects {
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    flex-direction: column;
                }
                `}

                </style>
            
        
        </>
        
    
    )    
}
export default Projects