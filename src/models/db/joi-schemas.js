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

export const RouteSpec = Joi.object()
  .keys({
    route: Joi.string().required().example("Jug City"),
    grade: Joi.string().required().example("VS"),
    height: Joi.number().allow("").optional().example(12),
    firstascent: Joi.string().allow("").optional().example("Ricky Bell"),
    description: Joi.string().allow("").optional().example("Jugs all the way"),
  })
  .label("Route");

  export const RouteArraySpec = Joi.array().label("RouteArray");

  export const CragSpec = Joi.object()
  .keys({
    title: Joi.string().required().example("The Burren"),
    lat: Joi.number().required().example("20.00"),
    lng: Joi.number().required().example("20.00"),
    approach: Joi.string().optional().example("Approach through coastal route SW of parking area."),
    // userid: IdSpec,
    routes: RouteArraySpec,
  })
  .label("Crag");
