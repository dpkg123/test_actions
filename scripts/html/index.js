function sendMessageToApp(param){
  console.log(param)
  try{
    // ios
    window.webkit.messageHandlers.BFGameJSPostObj.postMessage(param)
  }catch(e){
    // console.log(e)
  }
  try{
    // android
    window.BFGameJSPostObj.postMessage(JSON.stringify(param))
  }catch(e){
    // console.log(e)
  }
}

function closePage(){
  var config={
    "type":"closePage",
  }
  sendMessageToApp(config)
}

function reloadPage(){
  var config={
    "type":"reload",
  }
  sendMessageToApp(config)
}

function getPageConfig(call_back){
  var callback = 'fn_1'
  var config={
    "type":"getPageConfig",
    callback:callback
  }
  window[callback]=function(res){
    if(res){
      try{
        res = JSON.parse(res)
      }catch(e){}
    }
    call_back && call_back(res)
  }
  sendMessageToApp(config)
}

// 设置状态栏高度
var el_bar = document.querySelector('#el_bar')
getPageConfig(function(result){
  var marginTop = result.marginTop
  el_bar.style.height = marginTop + 'px'
})

// 重新加载
document.querySelector('#reload_button').onclick=function(){
  reloadPage()
}

// 关闭页面
document.querySelector('#el_close').onclick=function(){
  closePage()
}