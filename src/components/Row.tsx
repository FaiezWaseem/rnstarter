import React from 'react';
import { View } from 'react-native';

export default ({
  children,
  style,
  bg,
  rounded,
  p,
  pt,
  pb,
  pl,
  pr,
  m,
  ml,
  mt,
  mb,
  mr,
  w,
  h,
  alignItems,
  flex,
  justifyContent,
  flexWrap,
  flexShrink,
  flexGrow,
  position,
  zIndex,
  top,
  left,
  bottom,
  right,
  e,
}: {
  children: React.ReactNode;
  style?: any;
  bg?: string;
  rounded?: number;
  p?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  m?: number;
  ml?: number;
  mt?: number;
  mb?: number;
  mr?: number;
  w?: number | string;
  h?: number | string;
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  flex?: boolean;
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  flexShrink?: number;
  flexGrow?: number;
  position?: 'absolute' | 'relative';
  zIndex?: number;
  top?: number | string;
  left?: number | string;
  bottom?: number | string;
  right?: number | string;
  e?: number;
}) => {
//@ts-ignore
let el = e ? elevation[e] : {}

  return (
    <View
      style={{
        flexDirection : "row",
        alignItems,
        justifyContent,
        position,
        flexWrap,
        flexShrink,
        flexGrow,
        zIndex,
        top,
        left,
        bottom,
        right,
        borderRadius: rounded,
        padding: p,
        margin: m,
        backgroundColor: bg,
        width: w,
        height: h,
        paddingLeft : pl,
        paddingRight : pr,
        paddingTop : pt,
        paddingBottom : pb,
        marginLeft : ml,
        marginRight : mr,
        marginTop : mt,
        marginBottom : mb,
        flex : flex ? 1 :  null,
        ...el,
        ...style
      }} >
      {children}
    </View>
  );
};
const elevation = {
  1: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  2: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  3: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  4: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  5: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
};
