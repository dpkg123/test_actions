#include "ctpl.h"
#include <iostream>
#include <string>

using namespace std;

void first(int id) {
    cout << "hello from " << id << ", function\n";
}

void aga(int id, int par) {
    cout << "hello from " << id << ", function with parameter " << par <<'\n';
}

struct Third {
    Third(int v) { this->v = v; cout << "Third ctor " << this->v << '\n'; }
    Third(Third && c) { this->v = c.v; cout<<"Third move ctor\n"; }
    Third(const Third & c) { this->v = c.v; cout<<"Third copy ctor\n"; }
    ~Third() { cout << "Third dtor\n"; }
    int v;
};

void mmm(int id, const string & s) {
    cout << "mmm function " << id << ' ' << s << '\n';
}

void ugu(int id, Third & t) {
    this_thread::sleep_for(chrono::milliseconds(2000));
    cout << "hello from " << id << ", function with parameter Third " << t.v <<'\n';
}

int main(int argc, char **argv) {
    ctpl::thread_pool p(2 /* two threads in the pool */);

    future<void> qw = p.push(ref(first));  // function
    p.push(first);  // function
    p.push(aga, 7);  // function

    {
        struct Second {
            Second(const string & s) { cout << "Second ctor\n"; this->s = s; }
            Second(Second && c) { cout << "Second move ctor\n"; s = move(c.s); }
            Second(const Second & c) { cout << "Second copy ctor\n"; this->s = c.s; };
            ~Second() { cout << "Second dtor\n"; }
            void operator()(int id) const {
                cout << "hello from " << id << ' ' << this->s << '\n';
            }
        private:
            string s;
        } second(", functor");

        p.push(ref(second));  // functor, reference
        this_thread::sleep_for(chrono::milliseconds(2000));
        p.push(const_cast<const Second &>(second));  // functor, copy ctor
        p.push(move(second));  // functor, move ctor
        p.push(second);  // functor, move ctor
        p.push(Second(", functor"));  // functor, move ctor
    }
        {
            Third t(100);

            p.push(ugu, ref(t));  // function. reference
            p.push(ugu, t);  // function. copy ctor, move ctor
            p.push(ugu, move(t));  // function. move ctor, move ctor

        }
        p.push(ugu, Third(200));  // function



    string s = ", lambda";
    p.push([s](int id){  // lambda
        this_thread::sleep_for(chrono::milliseconds(2000));
        cout << "hello from " << id << ' ' << s << '\n';
    });

    p.push([s](int id){  // lambda
        this_thread::sleep_for(chrono::milliseconds(2000));
        cout << "hello from " << id << ' ' << s << '\n';
    });

    p.push(mmm, "worked");

    auto f = p.pop();
    if (f) {
        cout << "poped function from the pool ";
        f(0);
    }
    // change the number of treads in the pool

    p.resize(1);

    string s2 = "result";
    auto f1 = p.push([s2](int){
        return s2;
    });
    // other code here
    //...
    cout << "returned " << f1.get() << '\n';

    auto f2 = p.push([](int){
        throw exception();
    });
    // other code here
    //...
    try {
        f2.get();
    }
    catch (exception & e) {
        cout << "caught exception\n";
    }

    // get thread 0
    auto & th = p.get_thread(0);

    return 0;
}
