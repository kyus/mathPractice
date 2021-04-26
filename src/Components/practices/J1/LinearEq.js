import React from 'react';
import {PageHeader, Tag} from "antd";

function LinearEq () {
  return <div className={"App-body"}>
    <PageHeader
      title={"1차 방정식"}
      subTitle={"ax+b = 0"}
      tags={<><Tag color={"cyan"}>running</Tag><Tag color={"green"}>update</Tag></>}
    />
  </div>
}

export default LinearEq;