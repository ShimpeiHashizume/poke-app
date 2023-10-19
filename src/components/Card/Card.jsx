import "./Card.css";

// eslint-disable-next-line react/prop-types
export const Card = ({ pokemon }) => {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <h3 className="cardName">{pokemon.name}</h3>
      <div className="cardTypes">
        <div>タイプ</div>
        {pokemon.types.map((type) => {
          return (
            <div key={type.type.name}>
              <span>{type.type.name}</span>
            </div>
          );
        })}
      </div>
      <div className="cardInfo">
        <div className="cardData">
          <div className="title">重さ：{pokemon.weight}</div>
        </div>
        <div className="cardData">
          <div className="title">高さ：{pokemon.height}</div>
        </div>
        <div className="cardData">
          <div className="title">アビリティ：{pokemon.abilities[0].ability.name}</div>
        </div>
      </div>
    </div>
  );
};
