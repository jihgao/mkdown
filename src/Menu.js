import React from "react";
import AntdMenu from 'antd/lib/menu';
import Dropdown from 'antd/lib/dropdown';
import 'antd/lib/menu/style/index.css';
import 'antd/lib/dropdown/style/index.css';

function runCMD(eventId) {
  window.postMessage({
    id: eventId
  });
}

function Menu() {
  const menu = (
    <AntdMenu>
      <AntdMenu.Item key="1">
        <a href="javascript:void(0)" onClick={(e) => e.preventDefault() || runCMD('menu.save')}>Save</a>
      </AntdMenu.Item>
    </AntdMenu>
  );
  return (
    <div className="menu">
      <Dropdown overlay={menu} trigger={['click']} overlayClassName="menu-file__overlay">
        <a href="javascript:void(0)" className="ant-dropdown-link o-menu-title" onClick={e => e.preventDefault()}>
          File
        </a>
      </Dropdown>
    </div>
  );
}

export default Menu;
