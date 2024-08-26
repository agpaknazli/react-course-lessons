const Event = () => {
  //? Event handler fonksiyon tanımlaması
  const handleTıkla = (event) => {
    alert("tıklandı");
    //* event objesi üzerinden elementin özelliklerine ulaşabiliriz
    console.log(event);
    console.log("id", event.target.id);
    console.log("name", event.target.name);
  };

  return (
    <div>
      <h2>Events</h2>
      <button
        onClick={handleTıkla}
        id="myButton"
        name="tıkla"
        className="btn btn-primary"
      >
        Tıkla
      </button>
      <button onClick={() => alert("Silindi")} className="btn btn-danger">
        Sil
      </button>
    </div>
  );
};
export default Event;
