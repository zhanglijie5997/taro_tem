import { getSystemInfo } from "@tarojs/taro";
import { useEffect, useState } from "react";

/** 是否IphoneX */
export const isIphoneX = async () => {
    const { windowHeight, windowWidth } = await getSystemInfo();
    return windowHeight / windowWidth > 16 / 9
}


export const GetStatusBarFn = () => {
  const [getHeight, setHeight] = useState<number>(0);
  useEffect(() => {
    getSystemInfo().then((r ) => {
      setHeight(r.statusBarHeight)
    })
  }, [])
  return getHeight;
}
