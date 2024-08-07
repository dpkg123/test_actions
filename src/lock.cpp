#include <mutex>

static std::mutex lock_mutex;

void lock() {
    std::lock_guard<std::mutex> lock(lock_mutex);
    return 0;
}
