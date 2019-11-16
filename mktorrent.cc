// hello.cc
#include <node_api.h>
#include <iostream>
#include <stdint.h>
#include "lib/mktorrent.h"

namespace mktorrent{

napi_value create_torrent(napi_env env, napi_callback_info args) {
  napi_status status;

  std::cout << "come on";

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
