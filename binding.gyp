{
    "targets": [
    {
      'target_name': 'prefix',
      'sources': ['prefix.c'],
      'type': 'executable'
    },
    {
      "defines": [
        'PRIoff="\\"ld\\""',
        'VERSION="\\"1.1\\""',
        'NAPI_DISABLE_CPP_EXCEPTIONS'
      ],
      'include_dirs': ["<!@(node -p \"require('node-addon-api').include\")"],
      'dependencies': ["<!(node -p \"require('node-addon-api').gyp\")", "prefix"],
      "target_name": "mktorrent",
      "sources": [
        'mktorrent.cc',
        'lib/ftw.c',
        'lib/init.c',
        'lib/sha1.c',
        'lib/hash.c',
        'lib/output.c',
        'lib/main.c',
      ],
      'conditions': [
        ['OS=="mac"', {
          'cflags+': ['-fvisibility=hidden'],
          'xcode_settings': {
            'GCC_SYMBOLS_PRIVATE_EXTERN': 'YES', # -fvisibility=hidden
           }
        }]
      ]
    }
  ],
}
