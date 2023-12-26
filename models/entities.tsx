export class StateEntity {
  name: string = "";
  id: string = "";
}

export class CityEntity {
  name: string = "";
  stateId: string = "";
}

module.exports = {
  StateEntity,
  CityEntity,
};
