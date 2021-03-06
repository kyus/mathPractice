import React, {useEffect, useState} from 'react';
import {Route, RouteComponentProps} from 'react-router-dom';
import {Breadcrumb, Layout, Menu, PageHeader} from 'antd';
import {CalculatorTwoTone} from '@ant-design/icons';
import LinearEq from "./J1/LinearEq";
import QuadraticEq from "./J3/QuadraticEq";

function Practices({history, location}:RouteComponentProps) {
  const {Sider, Content} = Layout;
  const [selected, setSelected] = useState(['linearEq']);
  const movePage = (page:string) => {
    history.push(`/practices/${page}`);
    setSelected([page]);
  }
  const current = () => {
    switch(selected[0]) {
      case "linearEq": return '1차방정식';
      case "quadraticEq": return '2차방정식';
      default: return selected[0];
    }
  }
  useEffect(() => {
    history.push('/practices/linearEq');
  }, []);

  return <Layout>
    <Sider theme={"light"} breakpoint={"xs"}>
      <Menu selectedKeys={selected} mode={"inline"}>
        <Menu.Item
          key={"linearEq"}
          icon={<CalculatorTwoTone />}
          onClick={() => movePage('linearEq')}
        >1차방정식</Menu.Item>
        <Menu.Item
          key={"quadraticEq"}
          icon={<CalculatorTwoTone />}
          onClick={() => movePage('quadraticEq')}
        >2차방정식</Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <PageHeader style={{textAlign:"left", background:"#fff"}}>
        <Breadcrumb>
          <Breadcrumb.Item>main</Breadcrumb.Item>
          <Breadcrumb.Item>practices</Breadcrumb.Item>
          <Breadcrumb.Item>{current()}</Breadcrumb.Item>
        </Breadcrumb>
      </PageHeader>
      <Content className={"practices"}>
        <Route exact path={"/practices/linearEq"} component={LinearEq} />
        <Route exact path={"/practices/quadraticEq"} component={QuadraticEq} />
      </Content>
    </Layout>
  </Layout>
}

export default Practices;