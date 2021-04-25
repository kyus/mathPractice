import React from 'react';
import {PageHeader, Tag, Typography} from "antd";

function Contact () {
  const {Paragraph} = Typography;
  return <div>
    <PageHeader
      title={"Contact"}
      subTitle={"문의/요청사항"}
      tags={<Tag color={"blue"}>active</Tag>}
    >
      <Paragraph>
        <div>문의사항이나 요청사항은 <a href={"mailto:hkjw1211@naver.com"}>hkjw1211@naver.com</a> 으로 보내주세요.</div>
        <div>이용 중 궁금한 사항이나, 새로운 유형 추가 요청 등 어떤 의견이든 좋습니다.</div>
        <div>본업이 따로 있어서 바로바로 적용은 어렵지만 모두 기록하여 개선해 나가겠습니다.</div>
      </Paragraph>
    </PageHeader>
  </div>
}

export default Contact;