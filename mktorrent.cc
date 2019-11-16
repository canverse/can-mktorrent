// hello.cc
#include "lib/mktorrent.h"
#include <node_api.h>

namespace mktorrent{

napi_value create_torrent(napi_env env, napi_callback_info args) {
  napi_status status;
  size_t argCount;
  napi_value argVal;

  status = napi_get_cb_info(env, args, &argCount, argVal, NULL, NULL);
  if (status != napi_ok) return nullptr;

  create(static_cast<int>(argCount), argVal);
  if (status != napi_ok) return nullptr;
  return NULL;
}

napi_value init(napi_env env, napi_value exports) {
  napi_status status;
  napi_value fn;

  status = napi_create_function(env, nullptr, 0, create_torrent, nullptr, &fn);
  if (status != napi_ok) return nullptr;

  status = napi_set_named_property(env, exports, "create", fn);
  if (status != napi_ok) return nullptr;
  return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, init)

}
