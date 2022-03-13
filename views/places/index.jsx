const React = require("react");
const Def = require("../default");

function index(data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div className="col-sm-6">
        <h2>{place.name}</h2>
        <img src={place.pic} alt={place.name}></img>
      </div>
    );
  });
  return (
    <Def>
      <main>
        <h1>Places to Rant or Rave About</h1>
        <div classname="container">
          <div className="row">
            {placesFormatted}
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = index;