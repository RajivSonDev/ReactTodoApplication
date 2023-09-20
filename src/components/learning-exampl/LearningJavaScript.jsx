const person = {
    name: 'Ranga Karanam',
    address: {
        line1:'Baker Street',
        city:'London',
        country:'UK'
    },
    profiles:['Twitter','linkedin','Instagram'],
    printProfile:()=>{
        person.profiles.map(
            (profile)=>{
                console.log(profile)
            }
        )
    }
}


function printProfile(){
    console.log(person.profile)
}


export default function LearningJavaScript(){
    return (
        <>
        <div>{person.name}</div>
        <div>{person.address.line1}</div>
        <div>{person.address.city}</div>
        <div>{person.address.country}</div>
        </>
    )
} 