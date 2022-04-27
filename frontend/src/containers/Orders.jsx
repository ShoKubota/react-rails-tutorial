import React, {Fragment} from 'react';

// フラグメントを使うことで、DOMに余分なノードを追加することなくこ要素をまとめることはできる
// レンダーされるHTMLは親要素を持つ必要がある、しかし、divタグを追加するのは無駄...→フラグメント！
export const Orders = () => {
  return (
    <Fragment>
      注文画面
    </Fragment>
  )
}