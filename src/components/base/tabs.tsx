import { Text, View, Image } from '@tarojs/components';
import { getSystemInfo, switchTab } from '@tarojs/taro';
import { useDispatch, useSelector } from 'react-redux';
import { changeActions, SelectType } from '@store/actions';
import React, { useEffect, useState } from 'react'
import home from "@static/images/heigshouye_9_12.9@2x.png";
import homeSelect from "@static/images/honghuiyuan_9_12.9@2x.png";
import styles from "./tabs.module.scss";

const tabList = [
  {
      pagePath: '/pages/index/index',
      iconPath: home,
      selectedIconPath: homeSelect,
      text: '首页'
  },
  {
      pagePath: '/pages/index/index',
      iconPath: home,
      selectedIconPath: homeSelect,
      text: '首页'
  },
  {
      pagePath: '/pages/index/index',
      iconPath: home,
      selectedIconPath: homeSelect,
      text: '首页'
  },
  {
      pagePath: '/pages/log/log',
      iconPath: home,
      selectedIconPath: homeSelect,
      text: '首页'
  }
];
function Tabs() {
  const [isIphonex, setIsIphonex] = useState(false);
  const selector = useSelector((state: SelectType) => state.a);
  const dispatch = useDispatch();
  useEffect(() => {
    getSystemInfo().then(r => {
      const { windowWidth, windowHeight } = r;
      console.log(+(windowHeight / windowWidth).toFixed(2) > +(16 / 9).toFixed(2));
      (+(windowHeight / windowWidth).toFixed(2) > +(16 / 9).toFixed(2)) && setIsIphonex(true)
    })
  }, []);
  const changeSelectCallback = (i: number) => {
    dispatch(changeActions(i))
    switch (i) {
        case 0:
            switchTab({url: "/pages/index/index"});
            break;
        case 1:
            switchTab({ url: "/pages/log/log" })
            break;
        default:
            break;
    }
}
  return (
    <View   className={` ${styles.red}`}>
      <View className={`tabbar ${isIphonex ? styles.SFoot : ''} ${styles.tabbar}`}>
            {
                tabList.map((_, i: number) => <View key={i}  className={styles.item} onClick={() => changeSelectCallback(i)}>
                    {/* <Img></Img> */}
                    <Image  className={styles.img} src={selector === i ? _.selectedIconPath : _.iconPath} />
                    <View  className={styles.text}>{ _.text }</View>
                </View>)
            }
        </View>
    </View>
  )
}

export default Tabs
