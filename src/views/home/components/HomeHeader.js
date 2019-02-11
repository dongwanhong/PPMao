import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import logo from '@/assets/images/logo.png';

const { Item, SubMenu } = Menu;

class HomeHeader extends Component {
  state = {
    current: 'home',
  };

  handleClick = e => this.setState({
    current: e.key,
  })

  render() {
    const { current } = this.state;

    return (
      <div className="home-header">
        <Menu>
          <Item key="logo">
            <img src={logo} alt="logo_cat" width="100%" height="100%" />
          </Item>
        </Menu>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[current]}
          mode="horizontal"
        >
          <Item key="home">
            <a href="/"><Icon type="home" />首页</a>
          </Item>
          <Item key="corporate_hall">
            <a href="/"><Icon type="home" />企业大厅</a>
          </Item>
          <Item key="release_demand">
            <a href="/"><Icon type="home" />发布需求</a>
          </Item>
          <Item key="bank_express">
            <a href="/"><Icon type="home" />银行快贴</a>
          </Item>
          <Item key="login_register">
            <a href="/"><Icon type="home" />登录/注册</a>
          </Item>
          <SubMenu title={<Icon type="home" />}>
            <Item key="zh_cn">简体中文</Item>
            <Item key="en_us">English</Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default HomeHeader;
