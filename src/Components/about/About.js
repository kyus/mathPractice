import React from 'react';
import {PageHeader, Tag, Typography} from "antd";

function About () {
  const {Paragraph} = Typography;
  return <div>
    <PageHeader
      title={"About"}
      subTitle={"뭐하는 곳인가요?"}
      tags={<Tag color={"green"}>for what?</Tag>}
    >
      <Paragraph>
        <div>수학문제 연습하는 곳입니다.</div>
        <div>수학이 어려운게 아닌데 체계적으로 배워야 하다보니, 어렸을때 한번 끈을 놓치면 수포자로 가기 쉽습니다.</div>
        <div>학교 수업정도 따라가는 수준은 그저 많이 풀어보기만 해도 쉽게 따라갈 수 있습니다.</div>
        <div>포기하지 마세요.제가 도와 드리겠습니다.</div>
        <div>다양한 유형을 여러번 반복 학습 할 수 있도록 계속 업데이트 하는게 목표입니다.</div>
        <div>짬 날때마다 업데이트 합니다.</div>
      </Paragraph>
    </PageHeader>
  </div>
}

export default About;