const Movie = ({ title, img, year }) => {
  return (
    <div className="card movie">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={img} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
        </span>
        <p>{year}</p>
      </div>
    </div>
  );
};

export default Movie;
