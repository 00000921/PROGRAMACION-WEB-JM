const datos=[{
    id:1,
    title:'España',
    year:2010

},{
    id:2,
    title:'Alemania',
    year:2014
},{
    id:3,
    title:'Francia',
    year:2018
}]
 const getDatos = () =>{
    return new Promise((resolve, reject) => {
        setTimeout =()=>{
            resolve(datos);
        };1500
    })
 }

 async function data () {
    try{
        const datosmundial= await getDatos();
        console.log(datosmundial);
    }
    catch(err){
        console.log(err);
    }

 }
 data();