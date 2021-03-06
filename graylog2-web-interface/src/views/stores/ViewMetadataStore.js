import Reflux from 'reflux';
import { isEqual } from 'lodash';

import { singletonStore } from 'views/logic/singleton';
import { ViewStore } from './ViewStore';

// eslint-disable-next-line import/prefer-default-export
export const ViewMetadataStore = singletonStore(
  'views.ViewMetadata',
  () => Reflux.createStore({
    state: {},
    init() {
      this.listenTo(ViewStore, this.onViewStoreUpdate, this.onViewStoreUpdate);
    },
    getInitialState() {
      return this._state();
    },
    onViewStoreUpdate({ view, activeQuery }) {
      let newState;
      if (view) {
        const { id, title, description, summary } = view;
        newState = { id, title, description, summary, activeQuery };
      } else {
        newState = {};
      }
      if (!isEqual(this.state, newState)) {
        this.state = newState;
        this._trigger();
      }
    },
    _state() {
      return this.state;
    },
    _trigger() {
      this.trigger(this._state());
    },
  }),
);
