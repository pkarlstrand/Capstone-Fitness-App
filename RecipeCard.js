import React from "react";
import Title from "./Title";
import Image from "./Image";
class RecipeCard extends React.Component {
  render() {
    return (
      <div>
        {this.props.meal.map((item, index) => {
          return (
            <a key={index} href={item.strSource}>
              <Image source={item.strMealThumb} text={item.strMeal} />
              <Title title={item.strMeal} />
            </a>
          );
        })}
      </div>
    );
  }
}
export default RecipeCard;
