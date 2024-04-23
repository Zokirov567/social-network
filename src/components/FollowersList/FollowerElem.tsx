type FollowerElemProps = {
    imgLink: string;
    mainText: string;
    secondaryText: string;
    badge: number
}

export const FollowerElem = ({badge, imgLink, mainText, secondaryText}: FollowerElemProps) =>{

    return(
        <div className="UserElem">
            <img src={`./img/profile/profile-img-${imgLink}.jpeg`} alt="User" />
            <div className="user__description">
              <p className="main__text">{mainText}</p>
              <p className="secondary__text">{secondaryText}</p>
            </div>
            <span className="Badge">{badge}</span>
          </div>
    )
}