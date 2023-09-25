export default function createProject(name){
    return {
        name:name,
        id:Date.now().toString(),
        tasks:[
        //     {
        //     name:"test",
        //     id:1,
        //     complete:true
        // },
       
    ],
    }
}