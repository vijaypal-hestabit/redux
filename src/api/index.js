import Chance from "chance";
const chance = Chance();
export const userDetail = () => {
  return {
    name: chance.name(),
    email: chance.email({ domain: "getnada.com" })
  };
};
