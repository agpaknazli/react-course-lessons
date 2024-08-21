import logo from './logo.svg';
import './App.css';

function App() {
let sum=1000;
const surname="Elif";
let vize1=30;
let vize2=80;
let obst=[
  "elma",
  "armut",
  "muz",
  "çilek"

]


  return (

<body style={{
  background:"pink"
}}>
 <div>
<p> ürün toplamı:{sum} </p>
<p>kullanıcı isimi:{surname}</p>
<p>öğrenci ortalaması:{(vize1+vize2)/2}</p>

<p>
{
obst.map((meyve,index)=>(
  <p style={{
    color:"red",
    backgroundColor:"yellowgreen",
    padding:"1rem",
    margin:"3rem"


  }} >
    {meyve}
  </p>

)
)}
</p>



   </div>

   <div style={{backgroundColor:"yellow",
    width:"100%",
    height:"50px",
   }}> 
   sonuc {(vize1+vize2)/2>= 50 ? "sınavdan geçtiniz" : "Sınavdan kaldınız"}
   </div>
   
</body>

 


    // <div className="App">
    //   <h1>Cohort 17</h1>
    // </div>
  );
}

export default App;
