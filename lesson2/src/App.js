import Dog from "./Dog";



function App() {
  return (
    <div className="App">
      {/* <p 
      style={{backgroundColor:"greenyellow", height:"50px", margin:"1rem",textAlign: "center", color:"white" }}>
        SEVİMLİ KÖPEKLER</p> */}
    <Dog name="Pamuk" 
    img="https://cdn.pixabay.com/photo/2016/10/02/20/41/dog-1710409_640.jpg" 
    color="white"
     gözRengiSiyah={false}
     />/;

    <Dog name="Karabaş"
  img="https://cdn.pixabay.com/photo/2016/10/02/20/41/dog-1710409_640.jpg" 
  color="black"
  gözRengiSiyah={true}
    
  
    />
    <Dog name="Zeytin"
    img="https://cdn.pixabay.com/photo/2017/09/10/20/42/dachshund-2736934_640.jpg" 
    color="green"
    gözRengiSiyah={false}
    />
    </div>
  );
}

export default App;
