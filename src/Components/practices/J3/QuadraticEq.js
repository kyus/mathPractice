import React from 'react';
import {PageHeader, Tag} from "antd";

function LinearEq () {
  const subTitle = <div>
    <span>ax</span>
    <sup>2</sup>
    <span>+bx+c = 0</span>
  </div>
  return <div className={"App-body"}>
    <PageHeader
      title={"2차 방정식"}
      subTitle={subTitle}
      tags={<><Tag color={"red"}>prepare..</Tag></>}
    />
  </div>
}

export default LinearEq;