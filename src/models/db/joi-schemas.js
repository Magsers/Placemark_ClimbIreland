import Joi from "joi";

export const UserCredentialsSpec = Joi.object()
  .keys({
    email: Joi.string().email().example("homer@simpson.com").required(),
    password: Joi.string().example("secret").required(),
  })
  .label("UserCredentials");

export const UserSpec = {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
};

export const RouteSpec = {
    route: Joi.string().required(),
    grade: Joi.string().required(),
    height: Joi.number().allow("").optional(),
    firstascent: Joi.string().allow("").optional(),
    description: Joi.string().allow("").optional(),
  };
  // .label("Route");

  export const RouteArraySpec = Joi.array().label("RouteArray");

  export const CragSpec = {
    title: Joi.string().required(),
    lat: Joi.number().required(),
    lng: Joi.number().required(),
    approach: Joi.string().optional(),
    // userid: IdSpec,
    // routes: RouteArraySpec,
  };
 // .label("Crag");
