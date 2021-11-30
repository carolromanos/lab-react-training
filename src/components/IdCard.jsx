function IdCard(props){
    const {profile} = props
    return (
        <div className="profiles">
            <div className="profile-image">
            <img src={profile.picture} alt="" />
            </div>
        <div className="profile-info">
            <ul>
                <li>First Name: {profile.lastName}</li>
                <li>Last Name: {profile.gender}</li>
                <li>Height: {profile.height}</li>
                <li>Birth: {profile.birth.toDateString()}</li>
            </ul>
          </div>
        </div>
      )

}

export default IdCard