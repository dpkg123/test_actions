#ifndef VOID_HPP
#define VOID_HPP

namespace func {
    void version();
    void readc();
    void create();
    void remove();
    void usage();
    void start();
    void reg();
    void cleanrootfs();
}

namespace projsignal {
    void register_signal(void);
}

namespace io {
    void removedir(const char* filePath);
    void createdir(const char* filePath);
    void listfile(const char* filePath);
    void traversefile(const char* filePath);
    void runsh(const std::string& filePath, const std::string& args = "");
}

#endif
