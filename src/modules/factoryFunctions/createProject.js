export default function createProject(name){
    return {
        name:name,
        id:Date.now().toString(),
        tasks:[{
            name:"odin",
            id:1,
            complete:false
        },
       
    ],
    }
}