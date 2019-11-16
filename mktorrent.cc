// hello.cc
#include "napi.h"
#include <iostream>
#include <stdint.h>
#include "lib/mktorrent.h"

#define CHECK_STATUS if (status != napi_ok) { napi_throw_error(env, "1", "Something craptastic happened"); return NULL; }
using namespace Napi;

namespace mktorrent{

  void Create_torrent(const CallbackInfo& info) {
    size_t argc = info.Length();
    int argCount = static_cast<int>(argc);
    char* argv[argCount];

    for (int i = 0; i < argCount; i++) {
      std::string arg = info[i].As<String>().Utf8Value();
      std::cout << "argument: " << arg << std::endl;
    }

    create_torrent(argCount, argv);
  }

  static Object init(Env env, Object exports) {
    exports["create_torrent"] = Napi::Function::New(env, Create_torrent);
    return exports;
  }

  NODE_API_MODULE(NODE_GYP_MODULE_NAME, init)

}
