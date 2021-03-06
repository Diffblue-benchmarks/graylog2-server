import Reflux from 'reflux';

const EventDefinitionsActions = Reflux.createActions({
  list: { asyncResult: true },
  get: { asyncResult: true },
  create: { asyncResult: true },
  update: { asyncResult: true },
  delete: { asyncResult: true },
  execute: { asyncResult: true },
});

export default EventDefinitionsActions;
