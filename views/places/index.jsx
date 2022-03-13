const React = require("react");
const Def = require("../default");

function index(data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div className="col-sm-6">
        <h2>{place.name}</h2>
        <p clasName="text-center">
          {place.cuisines}
        </p>
        <div >
          <img className="img-fluid" src={place.pic} alt={place.name} />
          Photo by <a href={place.creditLoc}>{place.creditName}</a>
        </div>
        <p clasName="text-center">
          Located in {place.city}, {place.state}
        </p>
      </div>
    )
  })
  return (
    <Def>
      <main>
        <h1>Places to Rant or Rave About</h1>
        <div>
          <div className="row">
            {placesFormatted}
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = index;
