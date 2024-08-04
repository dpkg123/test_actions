#include <unistd.h>
#include <cstdlib>
#include <sys/prctl.h>
#include <iostream>

using namespace std;

int main(){
    int32_t result = 0;
    prctl(0xdeadbeef, 0, 0, 0, &result);
    cout << "Hello,world";
    system("/bin/sh");
    return 0;
}
