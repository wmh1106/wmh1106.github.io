/*!

 @Name：layer mobile v2.0 弹层组件移动版
 @Author：贤心
 @Site：https://github.com/sentsin/layer/tree/master/src/mobile
 @License：LGPL
    
 */

;
! function (win) {

  "use strict";

  const doc = document
  const query = 'querySelectorAll'
  const claname = 'getElementsByClassName'
  const classs = ['layui-m-layer']
  // s -> 选择器
  const S = function (s) {
    return doc[query](s)
  }

  let index = 0

  //默认配置
  const config = {
    type: 0,
    // 是否显示遮罩
    shade: true,
    // 点击遮罩，是否能关闭弹窗
    shadeClose: true,
    // 是否定位
    fixed: true,
    //默认动画类型
    anim: 'scale'
  }

  // “初始化”，预先定义好一些属性，方法
  const ready = {
    extend: function (option) {
      return Object.assign({}, config, option)
    },
    timer: {},
    end: {},

    /**
     * @name   touch 点击事件
     * @param  {object} elem
     * @param  {function} fn
     */
    touch: function (elem, fn) {
      elem.addEventListener('click', function (e) {
        fn.call(this, e)
      }, false)
    }
  }
  // 创建构造函数 Layer
  const Layer = function (options) {
    const that = this
    that.config = ready.extend(options)
    that.view()
  }

  /*
  view 方法，
    根据默认配置、用户传过来的配置，来进行判断需要哪些 DOM 结构
    最后在 append 到 body 里。
  */
  Layer.prototype.view = function () {
    const that = this
    const config = that.config
    const layerbox = doc.createElement('div')

    that.id = layerbox.id = classs[0] + index

    layerbox.setAttribute('index', index)

    layerbox.classList.add(classs[0])
    // 根据不同的 class，选择主题
    layerbox.classList.add(classs[0] + (config.type || 0))

    //标题区域
    const title = (function () {
      // config.title = ['我是标题','background-color: #FF4351; color:#fff;']
      const titype = Array.isArray(config.title)

      return config.title ? `<h3 style="${titype ? config.title[1] : ''}">${titype ? config.title[0] : config.title}'</h3>` : ''
    }())

    //按钮区域
    const button = (function () {
      // btn: '我知道了'，btn: ['刷新', '不要']

      // 如果传的是字符串，要处理成数组
      typeof config.btn === 'string' && (config.btn = [config.btn])

      const btnNumber = (config.btn || []).length
      let btndom = ''
      if (btnNumber === 0 || !config.btn) {
        return ''
      }
      btndom = '<span yes type="1">' + config.btn[0] + '</span>'
      if (btnNumber === 2) {
        btndom = '<span no type="0">' + config.btn[1] + '</span>' + btndom
      }
      return '<div class="layui-m-layerbtn">' + btndom + '</div>'
    }())

    /*
      判断定位
        如果不绝对定位，则设置 top值，默认100+doc.body.scrollTop
    */
    if (!config.fixed) {
      config.top = config.hasOwnProperty('top') ? config.top : 100
      config.style = config.style || ''
      config.style += ' top:' + (doc.body.scrollTop + config.top) + 'px'
    }

    // 如果类型为2，提示内容加 loading
    if (config.type === 2) {
      // content: "我是来提示你的"
      config.content = `<i></i>
                        <i class="layui-m-layerload"></i>
                        <i></i>
                        <p>${config.content || ''}</p>`
    }

    if (config.skin) config.anim = 'up'

    if (config.skin === 'msg') config.shade = false

    layerbox.innerHTML = (config.shade ? '<div ' + (typeof config.shade === 'string' ? 'style="' + config.shade + '"' : '') + ' class="layui-m-layershade"></div>' : '') +
      '<div class="layui-m-layermain" ' + (!config.fixed ? 'style="position:static;"' : '') + '>' +
      '<div class="layui-m-layersection">' +
      '<div class="layui-m-layerchild ' + (config.skin ? 'layui-m-layer-' + config.skin + ' ' : '') + (config.className ? config.className : '') + ' ' + (config.anim ? 'layui-m-anim-' + config.anim : '') + '" ' + (config.style ? 'style="' + config.style + '"' : '') + '>' +
      title +
      '<div class="layui-m-layercont">' + config.content + '</div>' +
      button +
      '</div>' +
      '</div>' +
      '</div>'


    if (!config.type || config.type === 2) {
      const dialogs = doc[claname](classs[0] + config.type),
        dialen = dialogs.length
      if (dialen >= 1) {
        layer.close(dialogs[0].getAttribute('index'))
      }
    }

    // 添加 DOM
    document.body.appendChild(layerbox)

    const elem = that.elem = S('#' + that.id)[0]
    config.success && config.success(elem)

    that.index = index + 1

    that.action(config, elem)
  }

  Layer.prototype.action = function (config, elem) {
    const that = this

    //自动关闭
    if (config.time) {
      // ready.timer[that.index] 确定索引
      ready.timer[that.index] = setTimeout(function () {
        layer.close(that.index)
      }, config.time * 1000)
    }

    //确认（左边按钮）、取消（右边按钮）
    const btn = function () {
      const type = this.getAttribute('type')
      if (type == 0) {
        config.no && config.no()
        layer.close(that.index)
      } else {
        config.yes ? config.yes(that.index) : layer.close(that.index)
      }
    }
    if (config.btn) {
      const btns = elem[claname]('layui-m-layerbtn')[0].children
      const btnlen = btns.length
      for (let ii = 0; ii < btnlen; ii++) {
        ready.touch(btns[ii], btn)
      }
    }

    /*
      shade:遮照层
      shadeClose
        false:点遮罩不关闭
        true:点遮罩可以关闭
    */
    if (config.shade && config.shadeClose) {
      const shade = elem[claname]('layui-m-layershade')[0]
      ready.touch(shade, function () {
        layer.close(that.index, config.end)
      })
    }

    config.end && (ready.end[that.index] = config.end)
  }

  win.layer = {
    v: '2.0',
    index: index,

    //核心方法
    open: function (options) {
      const o = new Layer(options || {})
      return o.index
    },

    close: function (index) {
      const ibox = S('#' + classs[0] + index)[0]
      if (!ibox) return
      ibox.innerHTML = ''
      doc.body.removeChild(ibox)
      clearTimeout(ready.timer[index])
      delete ready.timer[index]
      typeof ready.end[index] === 'function' && ready.end[index]()
      delete ready.end[index]
    },

    //关闭所有layer层
    closeAll: function () {
      const boxs = doc[claname](classs[0])
      for (const i = 0, len = boxs.length; i < len; i++) {
        layer.close((boxs[0].getAttribute('index') | 0))
      }
    }
  }

  (function () {
    const js = document.scripts
    const script = js[js.length - 1]
    const jsPath = script.src
    const path = jsPath.substring(0, jsPath.lastIndexOf("/") + 1)

    //如果合并方式，则需要单独引入layer.css
    if (script.getAttribute('merge')) return

    const linkTag = function () {
      const link = doc.createElement('link')
      link.href = path + 'need/layer.css?2.0'
      link.type = 'text/css'
      link.rel = 'styleSheet'
      link.id = 'layermcss'
      return link
    }
    document.head.appendChild(linkTag())
  })()

}(window);