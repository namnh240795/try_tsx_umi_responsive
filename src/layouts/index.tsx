import React from 'react';
import { Row, Col } from 'antd';

import styles from './index.less';

const BasicLayout: React.FC = props => {
  return (
    <Row>
      <Col className={styles.welcome} />
      <Col className={styles.content}>{props.children}</Col>
    </Row>
  );
};

export default BasicLayout;
