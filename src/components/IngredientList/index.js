import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid";
import { Text } from "../Text/";

const IngredientList = props => {
  return (
    <div>
      <Text display="inline">{props.label}&nbsp;</Text>
      {props.harmful_ingredients.length > 0 ? (
        props.harmful_ingredients.map(item => (
          <Text color="red" display="inline" key={uuid()}>
            {item}
          </Text>
        ))
      ) : (
        <Text display="inline">No label has sent</Text>
      )}
    </div>
  );
};

IngredientList.propTypes = {
  label: PropTypes.string,
  harmful_ingredients: PropTypes.array
};

export default IngredientList;
