WasmBlock((module) => ({
  wasmblock_timing_request_animation_frame: function(strPtr) {
    let funcName = module.$copyCStr(strPtr);
    window.requestAnimationFrame(function(){
      module[funcName]();
    });
  },
  wasmblock_timing_set_timeout: function(strPtr,milliseconds) {
    let funcName = module.$copyCStr(strPtr);
    window.setTimeout(function(){
      module[funcName]();
    },milliseconds);
  }
}))
