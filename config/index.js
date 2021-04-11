import { resolve } from "path";

const isDev = process.env.NODE_ENV === 'development';
const config = {
  projectName: 'myApp',
  date: '2020-10-25',
  designWidth: 750,
  alias: {
    "@": resolve(__dirname, "..", "src") ,
    "@pages": resolve(__dirname, "..", "src/pages"),
    "@store": resolve(__dirname, "..", "src/store"),
    "@components": resolve(__dirname, "..", "src/components"),
    "@static": resolve(__dirname, "..", "src/static"),
    "@utils": resolve(__dirname, "..", "src/utils"),
  },
  // js 压缩工具
  terser: {
    enable: !isDev,
    config: {
      // 配置项同 https://github.com/terser/terser#minify-options
    }
  },
  // 全局scss 变量
  sass: {
    sass: {
      // 全局注入scss文件
      resource: [
        'src/static/css/global.scss',
      ],
      data: '$modalZIndex: 999;',
      projectDirectory: resolve(__dirname, '..'),
    }
  },
  // css 压缩工具
  csso: {
    enable:  !isDev,
    config: {
      // 配置项同 https://github.com/css/csso#minifysource-options
    },
  },
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  mini: {
    webpackChain(chain, webpack) {
      // const oneOfsMap = config.module.rule("scss").oneOfs.store;
      // chain.module.rule("scss").oneOfs.store.forEach(item => {
      //         item
      //           .use("sass-resources-loader")
      //           .loader("sass-resources-loader")
      //           .options({
      //             // 公用scss
      //             resources: [path.resolve(__dirname,"../src/static/css/global.scss")]
      //           })
      //           .end();
      //   });
      // const oneOfsMap = chain.module.rules.store.get("scss").oneOfs.store;
      // console.log(chain.module.rules.store.get("scss").oneOfs);
      // oneOfsMap.forEach(item => {
      //       item
      //         .use("sass-resources-loader")
      //         .loader("sass-resources-loader")
      //         .options({
      //           // 公用scss
      //           resources: path.resolve(__dirname, "../src/static/css/global.scss")
      //         })
      //         .end();
      // });
      // chain.merge({

      // })
    },
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

export default function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
