import experienceJson from "../json/experienceJson";
function Experience() {
    return (
        <> 
            <div className="experienceHeader">
            <h3>Experience</h3>
                {
                    experienceJson.map((desc,index) => {
                        return (
                            <>
                            <h4>{`${desc.title} `}<span style = {{color: 'rgb(65, 196, 225)'}}>{desc.company}</span></h4>
                            <h4 style={{fontSize: 'var(--fontSmallHeader)', margin: '4px 0px 4px 0px'}}>{desc.time}</h4>
                            <ul style={{listStylePosition: 'outside', paddingInlineStart: '1rem', margin: 0}}>

                                {
                                 desc.bullets.map((bul, index) => {
                                    
                                    return (
                                            <li key={index} className="work-description-bullet">{bul}</li>
                                    )
                                    })
                                }
                                </ul>
                            
                           </>
                        )
                        // return (<li key = {index}></li>)
                    })
                }
            </div>
        <style>{`
            .experienceHeader {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items:center;
            }
            .bullets {
                align-items:left;
            }
            .work-description-bullet {
                padding-left: 0;
            font-size: var(--fontSmall);
            font-weight: 300;
            margin-bottom: 4px;
            }
        `}</style>
        </>
    )
    
        

//         experienceJson.map((data,index) => {
//             return (<>
//                 <div className = 'experience'>
//                     <h3 style='color: red'>{data.title} </h3>
//                     <h1>{data.title}</h1>
        
//                 </div>
//                 </>)
        
// }
        }
    
export default Experience;