//an object factory to generate an object for each project
export default function createProject(title,marker,date){
    return{
        title,
        marker,
        date
    }
}