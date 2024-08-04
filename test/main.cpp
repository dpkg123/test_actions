#include <iostream>
#include <cstring>
#include <unistd.h>
#include <cstdlib>
#include <stdbool.h>
#include <sys/prctl.h>

using namespace std;

#define CMD_GRANT_ROOT 0
#define CMD_GET_VERSION 2

static void help(int status) {

        cout << "SimpleExample\n";
        cout << "Usage: su [options] [argument...]\n\n";
        cout << "Options: \n";
        cout << "-c Pass command to invoked shell\n";
        cout << "-v Print version code and exit\n";
        cout << "-h Display this message and exit\n";
    exit(status);

}

static bool ksuctl(int cmd, void * arg1, void * arg2) {

    int32_t result = 0;
    prctl(0xDEADBEEF, cmd, arg1, arg2, & result);
    return result == 0xDEADBEEF;

}

void elevate() {

    // Talk to Daemon in Kernel Space
    bool status = ksuctl(CMD_GRANT_ROOT, 0, NULL);

    if (!status) {
        cerr << "Permission denied\n";
        exit(EXIT_FAILURE);
    }

}

int getver() {

    elevate();

    int32_t version = -1;
    ksuctl(CMD_GET_VERSION, & version, NULL);
    
    return version;
}

void su_shell(char * envp[]) {

    char * shell = getenv("SHELL");
    int status;

    elevate();

    if (shell) {
        status = execve(shell, NULL, envp);
    } else {
        status = execve("/bin/sh", NULL, envp);
    }

    exit(status);
}

void su_command(char * command[], int len) {

    elevate();
    int status;

    if (len == 1) {
        status = system(command[0]);
    } else {
        status = execvp(command[0], command);
    }
    exit(status);
}

int main(int argc, char * argv[], char * envp[]) {

    if (argc == 1) {
        su_shell(envp);
    }

    int opt;

    while ((opt = getopt(argc, argv, "vch")) != -1) {
        switch (opt) {
        case 'v': {
            int version = getver();
            cout << "Hello, world";
            exit(EXIT_SUCCESS);
        }
        case 'c':
            if (argc < 3) {
                cerr << "ERROR: -c requires an argument\n\n";
                help(EXIT_FAILURE);
            }
            su_command(argv + 2, argc - 2);
        case 'h':
        default:
            help(EXIT_SUCCESS);
        }
    }
    return 0;
}
