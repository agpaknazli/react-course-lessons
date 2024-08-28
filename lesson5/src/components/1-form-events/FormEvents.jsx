import React, { useState } from "react";
const FormEvents = () => {
  const [name, setName] = useState("");
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
            Name : {name}
          </label>
          <input
            //? onChange eventi input değeri her değiştiğinde tetiklenir. Biz de yazdığımız event handler aracılığı ile state'i güncelleyebiliriz.
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            id="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" />
        </div>
        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            Country
          </label>
          <select
            id="country"
            className="form-select"
            aria-label="Default select example"
          >
            <option>COUNTRIES</option>
            <option value="Türkiye">TÜRKİYE</option>
            <option value="Almanya">GERMANY</option>
            <option value="Amerika">USA</option>
          </select>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="remember" />
          <label className="form-check-label" htmlFor="remember">
            Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default FormEvents;