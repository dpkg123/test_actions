#ifndef __MAIN_H__
#define __MAIN_H__

#include <iostream>
#include <fstream>
#include <chrono>

class StopWatch
{
public:

	StopWatch();
	~StopWatch();

	//开启计时
	void Start();

	//暂停计时
	void Stop();

	//重新计时
	void ReStart();

	//微秒
	double Elapsed();

	//毫秒
	double ElapsedMS();

	//秒
	double ElapsedSecond();

private:
	long long elapsed_;
	typedef std::chrono::high_resolution_clock Clock;
	typedef std::chrono::microseconds MicroSeconds;
	std::chrono::steady_clock::time_point start_;
	std::chrono::steady_clock::time_point stop_;

};

#endif // __MAIN_H__
