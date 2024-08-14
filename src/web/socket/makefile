CXX=g++
CXXFLAGS=-std=c++11 -O2 -Wall -g -flto -fPIE -z now

TARGET:=myserver
SOURCE:=$(wildcard ../*.cpp)

OBJS = ./buffer.o \
	./request.o \
	./response.o \
	./connect.o \
	./threadpool.o \
	./timer.o \
	./epoller.o \
	./log.o \
	./webserver.o \
	./main.o

%.o :
	$(CXX) -o $@ -c $*.cpp

$(TARGET): $(OBJS)
	$(CXX) -o $@ $(CXXFLAGS) $(OBJS) -static

.PHONY: clean
clean:
	rm -rf *.o myserver
