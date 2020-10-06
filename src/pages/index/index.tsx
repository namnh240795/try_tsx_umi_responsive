import React from 'react';
import { Row, Col, Input } from 'antd';
import classnames from 'classnames';

import styles from './index.less';
import Header from './Header';

export default function() {
  return (
    <Row justify="center" align="middle" className={'h-100-p'}>
      <Col>
        <Header />

        <Row className={classnames(styles.inputContainer, 'mt-48')}>
          <Input prefix={<div className={styles.userLogo} />} placeholder="Username or Email" />
        </Row>

        <Row className={classnames(styles.inputContainer, 'mt-32')}>
          <Input
            prefix={<div className={styles.passwordLogo} />}
            suffix={<span className="c-red font-ab">Forgot password?</span>}
            placeholder="Password"
          />
        </Row>

        <Row className="mt-32">
          <span className={classnames(styles.iconCheck, 'ml-16')}></span>
          <span className="ml-8 font-ar">Remember me</span>
        </Row>

        <Row justify="center" className="mt-32">
          <Row className={styles.login} justify="center">
            <Col>Login</Col>
          </Row>
        </Row>

        <Row justify="center">
          <Row justify="space-between" className={classnames(styles.google, 'mt-32')}>
            <Col>
              <div className={styles.googleLogo} />
            </Col>
            <Col className="t-al-center">Continue with Google</Col>
            <Col />
          </Row>
        </Row>

        <Row justify="center">
          <Row justify="space-between" className={classnames(styles.facebook, 'mt-16')}>
            <Col>
              <div className={styles.facebookLogo} />
            </Col>
            <Col>Continue with Facebook</Col>
            <Col />
          </Row>
        </Row>

        <Row justify="center" className="mt-16">
          <Col>
            <p className="font-ar">
              Don't have an account? <span className="c-red">Sign Up</span>
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
