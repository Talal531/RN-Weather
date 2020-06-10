import * as React from 'react';
import {Text as ReactNativeText} from 'react-native';
import presets from './Text.presets';
import {translate} from '../../i18n';
import {mergeAll, flatten} from 'ramda';

export const Text = props => {
  const {
    preset = 'default',
    tx,
    txOptions,
    text,
    children,
    style: styleOverride,
    ...rest
  } = props;

  const i18nText = tx && translate(tx, txOptions);
  const content = i18nText || text || children;

  const style = mergeAll(
    flatten([presets[preset] || presets.default, styleOverride]),
  );

  return (
    <ReactNativeText {...rest} style={style}>
      {content}
    </ReactNativeText>
  );
};
