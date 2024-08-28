import React, { useState } from "react";
const FormObject = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const sendToDatabase = (e) => {
    e.preventDefault(); //? submit eventi'nin doğal davranışını engelle
    alert(`
    name: ${name}
    password: ${password}
    country: ${country}
`);
    setName("");
    setPassword("");
    setCountry("");
  };
  return (
    <div className="mt-4 p-3">
      <div className="text-center">
        <h1>**************************</h1>
        <h2>FORM EVENTS</h2>
      </div>
      <form onSubmit={sendToDatabase}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name : <span className="text-danger">{name}</span>
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            id="name"
            value={name}
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
            value={password}
            required
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
            value={country}
            required
          >
            <option>COUNTRIES</option>
            <option value="Türkiye">TÜRKİYE</option>
            <option value="Almanya">GERMANY</option>
            <option value="Amerika">USA</option>
          </select>
        </div>
        {/* //! form içerisindeki buttonların type'ı default olarak submittir */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default FormObject;