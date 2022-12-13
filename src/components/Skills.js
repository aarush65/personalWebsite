import skillsJson from "../json/skillsJson";

 const DisplaySkills = ({data}) => {
    return(
        <>
            <div className="skills-list">
                {data.map((list,index)=> {
                    return (
                        <div className="list" key = {index}>
            <p>{list}
            </p>
                            
                        </div>
                    )
                })
            }
            </div>
            <style> {`
    .skills-list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-self: center;
      max-width: 400px;
      justify-content: center;
      margin-top: var(--tinySpacer);
      margin-bottom: var(--spacer);
    }
    .list {
        display:flex;
        flex-direction:row;
        align-self:center;
        justify-content:center;
    }
    `} </style>
        </>
    )}
const Skills =()=>{
    return (
        <>
        <div className='skills-outer-container'>
        <h3 style={{marginBottom: 'var(--smallSpacer)'}}>SKILLS</h3>
        <h4>{`Frameworks`}</h4>
        <DisplaySkills data={skillsJson.Frameworks}></DisplaySkills>
        <h4>Languages</h4>
        <DisplaySkills data={skillsJson.Languages}></DisplaySkills>
        <h4>Miscellanous</h4>
        <DisplaySkills data={skillsJson.Misc}></DisplaySkills>
      </div>
      <style> {`
      .skills-outer-container {
        padding-top: var(--largerSpacer);
        padding-bottom: var(--largerSpacer);
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        text-align: center;
        background-color: var(--backgroundSecondary);
      }
      .skills-outer-container>h4 {
        font-weight: 700;
      }
      `} </style>
        </>
    )
}

export default Skills;