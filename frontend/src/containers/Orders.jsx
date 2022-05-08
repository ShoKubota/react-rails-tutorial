import React, {Fragment, useEffect, useReducer } from 'react';

import { fetchLineFoods } from '../apis/line_foods';

import {
  initialState,
  lineFoodsActionTypes,
  lineFoodsReducer,
} from '../reducers/lineFoods'

// フラグメントを使うことで、DOMに余分なノードを追加することなくこ要素をまとめることはできる
// レンダーされるHTMLは親要素を持つ必要がある、しかし、divタグを追加するのは無駄...→フラグメント！
export const Orders = () => {
  const [state, dispatch] = useReducer(lineFoodsReducer, initialState);

  useEffect(() => {
    dispatch({ type: lineFoodsActionTypes.FETCHING });
    fetchLineFoods()
      .then((data) =>
        dispatch({
          type: lineFoodsActionTypes.FETCH_SUCCESS,
          payload: {
            lineFoodsSummary: data
          }
        })
      )
      .catch((e) => console.error(e));
  }, []);

  return (
    <Fragment>
      注文画面
    </Fragment>
  )
}