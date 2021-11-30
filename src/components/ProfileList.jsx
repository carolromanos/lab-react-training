import IdCard from "./IdCard"

const profilesData = [
    {
        _id: "kfjslkfj",
        lastName: 'Delores ',
        firstName:'Obrien',
        gender:'female',
        height:172,
        birth:new Date("1988-05-11"),
        picture: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        _id: "ñHFHJK",
        lastName:'Doe',
        firstName:'John',
        gender:'male',
        height:178,
        birth:new Date("1992-07-14"),
        picture:"https://randomuser.me/api/portraits/men/44.jpg"
    }
  
];

function ProfileList(props){
    return(
        <div className="list">
            <h2>Profiles's list</h2>
            {profilesData.map((profile)=> <IdCard key={profile._id}   profile={profile} />)}
        </div>
    )
}

export default ProfileList