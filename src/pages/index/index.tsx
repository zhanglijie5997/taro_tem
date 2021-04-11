/* eslint-disable import/first */
import {  SelectType } from '@store/actions';
import { usePageScroll } from '@tarojs/taro';
import { GetStatusBarFn } from '../../utils/utils';
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from 'react'
import { View, Text } from '@tarojs/components'
import styles from './index.module.scss'
// import Tabs from "@components/base/tabs";
const Index = (props) => {
  const [getTest, setTest] = useState(() => 0);
  const selector = useSelector((state: SelectType) => state.a);
  const dispatch = useDispatch();
  const statusBar = GetStatusBarFn()
  useEffect(() => {
    // dispatch(changeActions(333))
    console.log(statusBar);
    // console.statusBar(selector, props,'，??!!fffff');
  }, [statusBar]);

  usePageScroll((payload) => {
    console.log(payload.scrollTop);
  });
  return (<View className={styles.index}>
            <View className={styles.body} style={{
              marginTop: statusBar + 'rpx'
            }}
            >
              <Text className={styles.title}>Hello, World{ selector }</Text>
            </View>
            {/* <Tabs /> */}
          </View>)
}
export default Index;

