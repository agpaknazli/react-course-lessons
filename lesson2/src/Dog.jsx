import Name from "./Names";



const Dog=({name,img,color="red",gözRengiSiyah})=>{
    return(
   
       <>
 <Name name={name}/>
   
   <img src={img} alt="" />
   <hr />
   <p style={{backgroundColor:color, color:"white"}}>Color:{color}</p>
   <p> Siyah gözlü ?: {gözRengiSiyah ? "EVET" : "HAYIR"}</p>
   
       </>
    );
   };
   
// const Dog=(promps)=>{
//  return(

//     <>
// <p>{promps.name}</p>

// <img src={promps.img} alt="" />
// <hr />
// <p style={{backgroundColor:promps.color, color:"white"}}>Color:{promps.color}</p>


//     </>
//  );
// };

export default Dog;