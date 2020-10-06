import React from 'react';
import { Row, Col } from 'antd';
import styles from './index.less';

const Header: React.FC = props => {
  return (
    <Row justify="center" className="mt-32">
      <Col>
        <p className={styles.title}>Welcome back</p>
        <p className={styles.title}>
          to the <span className="c-yellow">*</span> Game<span className="c-red"> her</span>'s
        </p>
        <p className={styles.title}>connect !</p>
      </Col>
    </Row>
  );
};

export default Header;
