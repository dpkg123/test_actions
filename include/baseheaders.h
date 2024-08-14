#ifndef BASEHEADERS_H
#define BASEHEADERS_H

#include <iostream>
#include <cstdlib>
#include <iomanip>
#include <ctime>
#include <string>
#include <fstream>
#include <string>
#include <vector>
#include <filesystem>
#include <chrono>
#include <cstdio>
#include <exception>
#include <ostream>
#include <sstream>
#include <iomanip>
#include <unistd.h>

using namespace std;

#if defined(__GNUC__) && __GNUC__ == 12
    #pragma GCC diagnostic push
    #pragma GCC diagnostic ignored "-Wmaybe-uninitialized"  // Workaround for GCC 12
#endif
#include <catch2/catch_all.hpp>
#if defined(__GNUC__) && __GNUC__ == 12
    #pragma GCC diagnostic pop
#endif

#include "spdlog/spdlog.h"
#include "spdlog/async.h"
#include "spdlog/details/fmt_helper.h"
#include "spdlog/mdc.h"
#include "spdlog/sinks/basic_file_sink.h"
#include "spdlog/sinks/daily_file_sink.h"
#include "spdlog/sinks/null_sink.h"
#include "spdlog/sinks/ostream_sink.h"
#include "spdlog/sinks/rotating_file_sink.h"
#include "spdlog/sinks/stdout_color_sinks.h"
#include "spdlog/sinks/msvc_sink.h"
#include "spdlog/pattern_formatter.h"

#endif
