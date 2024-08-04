#include <iostream>
#include <chono>
#include <fstream>
#include <deque>
#include <errno.h>
#include <string>

using namespace std;

int main (){
    int a,b,c;
    cout <<"First number\n";
    cin >>a;
    cout <<"Second number\n";
    cin >>b;
    cout <<"Third number\n";
    cin >>c;

    if (b/a==c/b)
        cout <<"d="<<c*(c/b)<<"\n";
     else if (b-a==c-b)
        cout <<"d="<<c+c-b<<"\n";
    else
        return 1;
}