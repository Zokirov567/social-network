import { AppHeading } from "../Typography/AppHeading"
import { MusicBlockElem } from "./MusicBlockElem"
import { dataMusic } from "./dataMusic"


export const MusicBlock = () => {
    return(
        <div className="MusicBlock">
          <div className="MusicBlock__title">
            <AppHeading headingText="Вы недавно слушали" headingType="h2"/>
            
            <span>{dataMusic.length}</span>
          </div>
          {dataMusic && dataMusic.map((elem) => (
           <MusicBlockElem imgLink={elem.imgLink} mainText={elem.mainText} secondaryText={elem.secondaryText}/> 
          ))}
          
  
        </div>
    )
}