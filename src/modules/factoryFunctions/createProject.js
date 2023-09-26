export default function createProject(name){
    return {
        name:name,
        id:Date.now().toString(),
        tasks:[
    ],
    }
}