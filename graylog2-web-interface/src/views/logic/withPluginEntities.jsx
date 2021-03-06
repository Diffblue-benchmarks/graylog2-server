// @flow strict
import * as React from 'react';
import { PluginStore } from 'graylog-web-plugin/plugin';

function withPluginEntities<Props, Entities>(
  Component: React.AbstractComponent<Props>,
  entityMapping: Entities,
  // eslint-disable-next-line no-undef
): React.AbstractComponent<$Diff<Props, $ObjMapi<Entities, <Key: string>(Key) => $ElementType<Props, Key>>>> {
  const entities = Object.entries(entityMapping)
    .map(([targetKey, entityKey]) => ([targetKey, PluginStore.exports(entityKey)]))
    .reduce((prev, [key, value]) => ({ ...prev, [key]: value }), {});

  return props => <Component {...entities} {...props} />;
}

export default withPluginEntities;
