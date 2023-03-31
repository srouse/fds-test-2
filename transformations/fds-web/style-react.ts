/* eslint-disable */
import { SSSProp } from "./css-atoms";
import type * as CSS from 'csstype';

/**
 * sss
 * Function for dynamically creating and auto-completing
 * sss design system files.
 * @param {DSysProp} dsysStyles
 * @param {Object} CSS.Properties
 * @return {CSS.Properties}
 */
export default function sss(
  dsysStyles: SSSProp,
  otherStyles: CSS.Properties = {},
) : CSS.Properties {
  const dsysStylesObj: {[key:`--sss-${string}`]: string} = {};
  Object.entries(dsysStyles).map((entry) => {
    if (entry[1] === true) {
      dsysStylesObj[`--sss-${entry[0]}`] = '1';
    }else{
      dsysStylesObj[`--sss-${entry[0]}`] = `var( --sss-${entry[1]} )`;
    }
  });
  return {
    ...dsysStylesObj,
    ...otherStyles,
  };
}
