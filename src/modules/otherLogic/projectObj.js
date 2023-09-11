//an object factory to generate an object for each project
export default function createProjectObj(title,marker,date,UID){
    return{
        title,
        marker,
        date,
        UID
    }
}