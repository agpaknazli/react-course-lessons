import React, { useState } from "react";
const FormEvents = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [remember, setRemember] = useState(false);
  const [date, setDate] = useState("");
  //? state her güncellendikten sonra component re-render olur ve değişen kısımlar DOM'a basılır.
  return (
    <div className="mt-4 p-3">
      <div className="text-center">
        <h1>**************************</h1>
        <h2>FORM EVENTS</h2>
      </div>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name : <span className="text-danger">{name}</span>
          </label>
          <input
            //? onChange eventi input değeri her değiştiğinde tetiklenir. Biz de yazdığımız event handler aracılığı ile state'i güncelleyebiliriz.
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            id="name"
            //* required alanların çalışması için formları onSubmit ile göndermeliyiz. onClick ile gönderdiğimizde çalışmaz
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password: <span className="text-danger">{password}</span>
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            id="password"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Date: <span className="text-danger">{date}</span>
          </label>
          <input
            onChange={(e) => setDate(e.target.value)}
            type="datetime-local"
            className="form-control"
            id="date"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            Country: <span className="text-danger">{country}</span>
          </label>
          <select
            id="country"
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => setCountry(e.target.value)}
          >
            <option>COUNTRIES</option>
            <option value="Türkiye">TÜRKİYE</option>
            <option value="Almanya">GERMANY</option>
            <option value="Amerika">USA</option>
          </select>
        </div>
        <div className="mb-3 form-check">
          <input
            onChange={(e) => setRemember(e.target.checked)}
            type="checkbox"
            className="form-check-input"
            id="remember"
          />
          <label className="form-check-label" htmlFor="remember">
            Remember me:
            <span className="text-danger">{remember.toString()}</span>
          </label>
        </div>
        {/* //! form içerisindeki buttonların type'ı default olarak submittir */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default FormEvents;