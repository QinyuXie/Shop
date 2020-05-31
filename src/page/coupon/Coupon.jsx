import React from 'react';
import CouponList from './CouponList';
import {Divider} from 'antd';

class Coupon extends React.Component {
    render() {
        return (
            <div>
                <Divider orientation="left">已领取</Divider>
                <CouponList />
                <Divider orientation="left">未领取</Divider>
                <CouponList />
            </div>
        );
    }
}

export default Coupon;