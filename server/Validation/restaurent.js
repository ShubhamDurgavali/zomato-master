import joi from "joi";

export const ValidateRestaurentCity = (restaurentObj) => {
  const Schema = joi.object({
    city: joi.string().required()
  });

  return Schema.validateAsync(restaurentObj);
};

export const ValidateRestaurentSearchString = (restaurentObj) => {
    const Schema = joi.object({
      searchString: joi.string().required()
    });
  
    return Schema.validateAsync(restaurentObj);
  };