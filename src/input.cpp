#include <iostream>
#include <string>
#include <fstream>
#include <string>
#include <vector>
#include <filesystem>
#include <functional>
#include <thread>
#include <atomic>
#include <vector>
#include <memory>
#include <exception>
#include <future>
#include <mutex>
#include <boost/lockfree/queue.hpp>

using namespace std;
int main()
{
	int chengji;
	cin>>chengji; 
	if (chengji==100)
		cout<<"我会奖励你一台W10电脑，可以打王者，五杀超神随手就来，一闪大闪手感超好！"<<endl;
	else if(chengji>=80) 
		cout<<"我会奖励你一顿海鲜自助大餐，不要999，不要998，只要299，随便吃！"<<endl;
	else if(chengji>=60) 
		cout<<"那么我只能被迫让你康'亿'会儿电视了。"<<endl;
	else
		cout<<"我就和你妈妈给你来一场男女混合双打，打得你头破血流，满地找牙，求生不能，求死不得！"<<endl;
  retrun 0;
	
}
