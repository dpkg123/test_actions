//#include"Inf-2D.h"
#include<bits/stdc++.h>
#include<windows.h>
#include<conio.h>
#define DOWN(VK_NONAME) ((GetAsyncKeyState(VK_NONAME) & 0x8000) ? 1:0)
#define FN 0 
#define None 0
#define Black 0
#define Blue 1
#define Green 2
#define Grean 3
#define Red 4
#define Pink 5
#define Yellow 6
#define Grey 8
#define grey 7
#define blue 9
#define green 10
#define graan 11
#define red 12
#define pink 13
#define yellow 14
#define white 15
#define bk0 240
#define bk1 112
#define bk2 128
#define bk3 0
#define DayLong 2000
/*
World Type:1.超平坦 2.普通
生成:钻石(2-x/10[0-10层])% 铁(10-|x/10-4[40层]|)% 泥土(100-|x-表|^3)% 金(4-x/25[0-24层])% 煤(20-|x/5-15|[45层])%
*/
using namespace std;
int Attack=0,Rape=0,YLY=0;
string BODY[16]={"","()","xx","/\\"};
				/*                      0                               1                                                 2                                                    3                                       4                                                                   5       */
                /*0空气 1基岩2泥土3草方块4木头5石头6沙子7玻璃8铁矿9金矿0钻石1煤炭2木板3木棍4火把5 树叶6工作7箱子8木稿9石镐0铁锭1金锭2铁镐3金镐4钻镐5熔炉6木剑7石剑8铁剑9金剑0钻剑1苹果2面包3床4地狱岩5地狱砖6刷怪笼7-2水     3-6岩浆 7黑曜石                                        8桶9水桶0岩浆桶1烈焰棒 2传送门*/ 
string BLOCK[128]={"  ","▓ ","▓ ","MM","■","■","※","□","〓","〓","◆","〓","〓","| ","i ","▓ ","##","[]","/\\","/\\","◆","◆","/\\","/\\","/\\","##","||","||","||","||","||","●","--","#]","■","▓ ","##","█ ","▇ ","▆ ","▅ ","▃ ","█ ","█ ","▆ ","▃ ","█ ","■","U/","U#","U#","--","◆"};
int BLOCK_COL[128]={Black,Black,Yellow,Green,Yellow,Grey,Yellow,blue,grey,yellow,blue,Grey,Yellow,Yellow,Red,Green,Yellow,Yellow,Yellow,Grey,grey,yellow,grey,yellow,blue,Grey,Yellow,Grey,grey,yellow,blue,Red,Yellow,Red,Pink,Pink,Black,Blue,Blue,Blue,Blue,Blue,Blue,Red,Red,Red,Red,Black,Black,Blue,Red,Red,Red};
int Hard[128]={None,60000,100,0,200,500,100,0,500,500,700,400,200,0,10,30,200,200,0,0,0,0,0,0,0,500,0,0,0};
int Hardmu[128]={None,60000,100,0,200,200,100,0,500,500,700,220,200,0,10,30,200,200,0,0,0,0,0,0,0,200,0,0,0};
int Hardsh[128]={None,60000,100,0,200,100,100,0,150,140,700,120,200,0,10,30,200,200,0,0,0,0,0,0,0,100,0,0,0};
int Hardti[128]={None,60000,100,0,200,70,100,0,70,70,70,60,200,0,10,30,200,200,0,0,0,0,0,0,0,70,0,0,0};
int Hardji[128]={None,60000,100,0,200,30,100,0,30,30,40,20,200,0,10,30,200,200,0,0,0,0,0,0,0,30,0,0,0};
int Hardzu[128]={None,60000,100,0,200,60,100,0,60,60,60,60,200,0,10,30,200,200,0,0,0,0,0,0,0,60,0,0,0};
int CANPUT[128]={0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1};
string NODE[16][2]={{"xx","/\\"},{"[]","/\\"},{"[]","^^"}};
int NODE_COL[16]={Green,Green,Red};
struct GUI
{
	int heal,node,x,y,Delete;
}wor[70];
/* 背包:4*9 */
struct BAG
{
	int thing,num,nj;
}bag[7][16];
int Health,Eat,Time;
int UPDOWN_SPEED=0,now=1;
void setcolor(int bkcol,int col){SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE),bkcol+col);}
int x,y,move,DIE;
double Rx,Ry;
int block[259][1028];
BAG box[259][1028][16];
int bk=bk0,op,Dpx[1028]={200};
int Hc[64][10]={{0,12,12,12,12,16},{0,4,0,0,0,12},{0,0,4,0,0,12},{0,0,0,4,0,12},{0,0,0,0,4,12},{0,12,0,0,0,13},{0,0,12,0,0,13},{0,0,0,12,0,13},{0,0,0,0,12,13},{0,11,0,13,0,14},{0,0,11,0,13,14}}; 
int Hc2[64][32]={{0,20,0,20,0,20,0,0,0,0,48},{0,12,12,0,12,12,0,0,0,0,16},{0,4,0,0,0,0,0,0,0,0,12},{0,12,0,0,0,0,0,0,0,0,13},{0,11,0,0,0,13,0,0,0,0,14},{0,5,5,5,5,0,5,5,5,5,25},{0,12,12,12,0,13,0,0,13,0,18},{0,5,5,5,0,13,0,0,13,0,19},{0,20,20,20,0,13,0,0,13,0,22},{0,21,21,21,0,13,0,0,13,0,23},{0,10,10,10,0,13,0,0,13,0,24},{0,0,12,0,0,12,0,0,13,0,26},{0,0,5,0,0,5,0,0,13,0,27},{0,0,21,0,0,21,0,0,13,0,28},{0,0,22,0,0,22,0,0,13,0,29},{0,0,10,0,0,10,0,0,13,0,30}};
int CanHc()
{
	for(int i=0;i<64;i++)
	if(bag[5][1].thing==Hc[i][1]&&bag[5][2].thing==Hc[i][2]&&bag[5][3].thing==Hc[i][3]&&bag[5][4].thing==Hc[i][4])return Hc[i][5];
}
int CanHc2()
{
	for(int i=0;i<64;i++)
	{
		int bo=1;
		for(int j=1;j<=9;j++)if(bag[6][j].thing!=Hc2[i][j])bo=0;
		if(bo)return Hc2[i][10];
	}
}
void GOTO(int x,int y){
    CONSOLE_SCREEN_BUFFER_INFO csbiInfo;
    HANDLE hConsoleOut;
    hConsoleOut = GetStdHandle(STD_OUTPUT_HANDLE);
    GetConsoleScreenBufferInfo(hConsoleOut,&csbiInfo);
    csbiInfo.dwCursorPosition.Y = x;
    csbiInfo.dwCursorPosition.X = y;
    SetConsoleCursorPosition(hConsoleOut,csbiInfo.dwCursorPosition);
} 
void HideCursor()
{
	HANDLE handle = GetStdHandle(STD_OUTPUT_HANDLE);
	CONSOLE_CURSOR_INFO CursorInfo;
	GetConsoleCursorInfo(handle, &CursorInfo);
	CursorInfo.bVisible = false;
	SetConsoleCursorInfo(handle, &CursorInfo);
}
int toint(string str)
{
	int x=0;
	for(int i=0;i<str.size();i++)
	if(str[i]>='0'&&str[i]<='9')
		x=x*10+str[i]-'0';
	return x;
}int ATTACK[128];
void ShowCursor()
{
	HANDLE handle = GetStdHandle(STD_OUTPUT_HANDLE);
	CONSOLE_CURSOR_INFO CursorInfo;
	GetConsoleCursorInfo(handle, &CursorInfo);
	CursorInfo.bVisible = 1;
	SetConsoleCursorInfo(handle, &CursorInfo);
}
void CreateWorld(int WorldType)
{
	HideCursor();
	Health=10;Eat=10;for(int i=1;i<=64;i++)wor[i].Delete=1;
	if(WorldType==1)
	{
		x=4;
		y=512;op=2;
		for(int i=1;i<=1024;i++)block[0][i]=1,block[1][i]=2,block[2][i]=2,block[3][i]=3;
	}
	else if(WorldType==2)
	{
		//1:丘陵 2:山地Upper 3:山地Downner 4:平原 5:树林 
		int Type=1,lenth=0,village=0; 
		for(int j=1;j<=900;j++)
		{
			if(Type==1)Dpx[j]=Dpx[j-1]+rand()%3-1;
			else if(Type==2) Dpx[j]=Dpx[j-1]+rand()%2+1;
			else if(Type==3) Dpx[j]=Dpx[j-1]-rand()%2-1;
			else if(Type==4||Type==5) Dpx[j]=Dpx[j-1]+((rand()%3!=0)?(rand()%3-1):0);
			if(Dpx[j]>=100)Dpx[j]=64;
			else if(Dpx[j]<=30)Dpx[j]=64;
			lenth++;
			if(lenth>=5&&rand()%20==0)
			{
				if(Type==2)Type++;
				else
				{
					Type=rand()%5+1;
					while(Type==3)Type=rand()%5+1;
				}
			}
			for(int i=Dpx[j];i>=1;i--)
			if(i==Dpx[j]) block[i][j]=3;
			else if(rand()%1000<2-i/10)
			{
				block[i][j]=10;
				for(int ii=-1;ii<=1;ii++)
				  for(int jj=-1;jj<=1;jj++)
					if(rand()%10<=3&&(ii!=0||jj!=0))block[i+ii][j+jj]=10;
			}
			else if(rand()%1000<10-abs(i/10-4))
			{
				block[i][j]=8;
				for(int ii=-1;ii<=1;ii++)
				  for(int jj=-1;jj<=1;jj++)
					if(rand()%5<=4&&(ii!=0||jj!=0))block[i+ii][j+jj]=8;
			}
			else if(rand()%1000<4-i/25)
			{
				block[i][j]=9;
				for(int ii=-1;ii<=1;ii++)
				  for(int jj=-1;jj<=1;jj++)
					if(rand()%10<=3&&(ii!=0||jj!=0))block[i+ii][j+jj]=9;
			}
			else if(rand()%1000<20-abs(x/5-15))
			{
				block[i][j]=11;
				for(int ii=-1;ii<=1;ii++)
				  for(int jj=-1;jj<=1;jj++)
					if(rand()%10<=3&&(ii!=0||jj!=0))block[i+ii][j+jj]=11;
			}
			else if(rand()%100<100-abs(i-Dpx[j])*abs(i-Dpx[j])*abs(i-Dpx[j]))block[i][j]=2;
			else block[i][j]=5;
			if(Type==1||Type==4){if(rand()%10==0)block[Dpx[j]][j]=4,block[Dpx[j]+1][j]=4,block[Dpx[j]+2][j]=4,block[Dpx[j]+3][j]=15,block[Dpx[j]+2][j-1]=15,block[Dpx[j]+2][j+1]=15;}
			if(Type==2||Type==3){if(rand()%20==0)block[Dpx[j]][j]=4,block[Dpx[j]+1][j]=4,block[Dpx[j]+2][j]=4,block[Dpx[j]+3][j]=15,block[Dpx[j]+2][j-1]=15,block[Dpx[j]+2][j+1]=15;}
			if(Type==5){if(rand()%10==0)block[Dpx[j]][j]=4,block[Dpx[j]+1][j]=4,block[Dpx[j]+2][j]=4,block[Dpx[j]+3][j]=4,block[Dpx[j]+4][j]=4,block[Dpx[j]+5][j]=15,block[Dpx[j]+4][j-1]=15,block[Dpx[j]+4][j+1]=15,block[Dpx[j]+3][j+1]=15,block[Dpx[j]+3][j+2]=15,block[Dpx[j]+3][j-1]=15,block[Dpx[j]+3][j-2]=15;if(rand()%5==0)block[Dpx[j]][j]=4,block[Dpx[j]+1][j]=4,block[Dpx[j]+2][j]=4,block[Dpx[j]+3][j]=15,block[Dpx[j]+2][j-1]=15,block[Dpx[j]+2][j+1]=15;}
			if(Type==4&&village-j<-100&&rand()%10==0)
			{
				village=j;//system("pause");
				int bc=j;
				while(rand()%4<3)
				{
					int Node=rand()%3;
					if(Node==0)
					{
						block[Dpx[j]][j+1]=4;  block[Dpx[j]][j]=4;  block[Dpx[j]][j-1]=4;  block[Dpx[j]][j-2]=4;
						block[Dpx[j]+1][j+1]=4;block[Dpx[j]+1][j]=17;block[Dpx[j]+1][j-1]=0;block[Dpx[j]+1][j-2]=4;
						block[Dpx[j]+2][j+1]=4;block[Dpx[j]+2][j]=0;block[Dpx[j]+2][j-1]=0;block[Dpx[j]+2][j-2]=4;
						block[Dpx[j]+3][j+1]=4;block[Dpx[j]+3][j]=0;block[Dpx[j]+3][j-1]=0;block[Dpx[j]+3][j-2]=4;
						block[Dpx[j]+4][j]=4;block[Dpx[j]+4][j-1]=4;
						for(int i=1;i<=8;i++)
						{
							int list[20]={31,32,32,32,31,26,18,19,4,4,4,0};
							box[Dpx[j]+1][j][i].thing=list[rand()%20],box[Dpx[j]+1][j][i].num=rand()%10+1;
						}
					}
					if(Node==1)
					{
						block[Dpx[j]][j+1]=5;  block[Dpx[j]][j]=5;  block[Dpx[j]][j-1]=5;  block[Dpx[j]][j-2]=5;
						block[Dpx[j]+1][j+1]=5;block[Dpx[j]+1][j]=17;block[Dpx[j]+1][j-1]=0;block[Dpx[j]+1][j-2]=5;
						block[Dpx[j]+2][j+1]=5;block[Dpx[j]+2][j]=0;block[Dpx[j]+2][j-1]=0;block[Dpx[j]+2][j-2]=5;
						block[Dpx[j]+3][j+1]=5;block[Dpx[j]+3][j]=5;block[Dpx[j]+3][j-1]=5;block[Dpx[j]+3][j-2]=5;
						for(int i=1;i<=8;i++)
						{
							int list[20]={31,32,32,20,20,20,20,11,21,21,10,5,5,5,8,8};
							box[Dpx[j]+1][j][i].thing=list[rand()%20],box[Dpx[j]+1][j][i].num=rand()%10+1;
						}
					}
					if(Node==3)
					{
						block[Dpx[j]][j+1]=4;  block[Dpx[j]][j]=4;  block[Dpx[j]][j-1]=4;  block[Dpx[j]][j-2]=4;
						block[Dpx[j]+1][j+1]=4;block[Dpx[j]+1][j]=33;block[Dpx[j]+1][j-1]=0;block[Dpx[j]+1][j-2]=4;
						block[Dpx[j]+2][j+1]=4;block[Dpx[j]+2][j]=0;block[Dpx[j]+2][j-1]=0;block[Dpx[j]+2][j-2]=4;
						block[Dpx[j]+3][j+1]=4;block[Dpx[j]+3][j]=0;block[Dpx[j]+3][j-1]=0;block[Dpx[j]+3][j-2]=4;
						block[Dpx[j]+4][j]=4;block[Dpx[j]+4][j-1]=4;
					}
					j-=5;
				}
				j=bc;
			}
		}
		Type=2;
		for(int j=901;j<=1024;j++)
		{
			if(Type==2)Dpx[j]=Dpx[j-1];
			else if(Type==1) Dpx[j]=Dpx[j-1]+rand()%5-2;
			if(Dpx[j]>=100)Dpx[j]=64;
			else if(Dpx[j]<=30)Dpx[j]=64;
			lenth++;
			if(lenth>=5&&rand()%20==0)
			{
				Type=rand()%5+1;
				if(Type==1)Type=2;else Type=1;
			}
			for(int i=Dpx[j];i>=1;i--)
			if(i==Dpx[j]) block[i][j]=Type==1?34:35;
			else if(i==1)block[i][j]=1;else block[i][j]=34;
			if(Type==2&&rand()%10==0)block[Dpx[j]+3][j]=36;
			
		}
		y=y==0?512:y;
		x=Dpx[y]+2;
		op=2;
	} 
}
void Output()
{
	GOTO(0,0);Attack--;
	setcolor(bk,0);
	for(int i=x+5;i>=x-5;i--,puts(""))
	  for(int j=y+5;j>=y-5;j--)
	  {
		int BO1=0,BO2=0;
	  	for(int o=1;o<=64;o++)
	  	if(wor[o].x==i&&wor[o].y==j&&!wor[o].Delete)BO1=o;
	  	for(int o=1;o<=64;o++)
	  	if(wor[o].x+1==i&&wor[o].y==j&&!wor[o].Delete)BO2=o;
	  	if(BO1)
	  	{setcolor(bk,ATTACK[BO2]!=0?Green:NODE_COL[wor[BO1].node]);cout<<NODE[wor[BO1].node][1];
		  }
		else if(BO2) {setcolor(bk,ATTACK[BO2]!=0?Green:NODE_COL[wor[BO1].node]);if(ATTACK[BO2]!=0)cout<<wor[BO2].heal;else cout<<NODE[wor[BO2].node][0];ATTACK[BO2]=0;
		}
	  	else if(i<0||j<0||i>1023||j>1023)
	  	{
	  		setcolor(bk,0);
	  		cout<<"  ";
		}
		else if(block[i][j]<0)
		{
			setcolor(bk,bk!=0?0:1);
			cout<<BODY[-block[i][j]];
			block[i][j]=0;
		}
		else
		{
			setcolor(bk,BLOCK_COL[block[i][j]]);
	  		cout<<BLOCK[block[i][j]];
		}
	  }
	for(int i=1;i<=4;i++)cout<<"  "<<i<<"   ";puts("");
	for(int i=1;i<=4;i++)if(i!=now)
	{
		cout<<"[";setcolor(bk,BLOCK_COL[bag[1][i].thing]);
		cout<<BLOCK[bag[1][i].thing];setcolor(bk,Black);printf("%2d]",bag[1][i].num);
	}else
	{
		setcolor(bk,Red);cout<<"[";setcolor(bk,BLOCK_COL[bag[1][i].thing]);cout<<BLOCK[bag[1][i].thing];setcolor(bk,Red);printf("%2d]",bag[1][i].num);setcolor(bk,Black);
	}setcolor(bk,Black);
	cout<<"\n坐标:"<<x<<" "<<y<<endl;
	setcolor(bk,Red);cout<<"生命:";
	for(int i=1;i<=10;i++)if(i<=Health)cout<<"●";else cout<<"○";
	setcolor(bk,Yellow);cout<<"\n饥饿:";
	for(int i=1;i<=10;i++)if(i<=Eat)cout<<"●";else cout<<"○";
	setcolor(bk,0);
	if(Attack>0)GOTO(0,0),cout<<"->";
}
void Clac();
void BodyClac();
void DEAD()
{
	system("cls");
	cout<<"您去世了，欢迎来到天堂。\n";
	cout<<"A:下凡       B:返回";int Rap=0;
	while(1)
	{
		if(getch()=='a')
		{
			Rap++;
			if(Rap!=5)
			cout<<"\n注意审题!";else cout<<"\n注意审题!大写的A!";
		}
		if(getch()=='A')
		{
			Health=10;
			Eat=10;
			DIE=0;
			return;
		}
		if(getch()=='B')exit(0);
	} 
}
void dig(int a,int X,int Y)
{
	BodyClac();
	if((a==37||a==43)&&bag[1][now].thing==48)
	{
		bag[1][now].thing=a==37?49:50;block[X][Y]=0;return;
	}
	for(int O=1;O<=5;O++)
	{	GOTO(0,0);
	setcolor(bk,0);
	if(!DOWN('W')&&!DOWN('A')&&!DOWN('S')&&!DOWN('D'))return;
		for(int i=x+5;i>=x-5;i--,puts(""))
		  for(int j=y+5;j>=y-5;j--)
		  {
		  	if(i<0||j<0||i>1023||j>1023)
		  	{
		  		setcolor(bk,0);
		  		cout<<"  ";
			}
			else if(block[i][j]<0)
			{
				setcolor(bk,bk!=0?Black:1);
				cout<<BODY[-block[i][j]];
			}
			else
			{
				string Og[10]={"","▏ ","▎ ","▍ ","▋ ","▊ "};
				setcolor(bk,BLOCK_COL[block[i][j]]);
				if(i==X&&j==Y)cout<<Og[O];
		  		else cout<<BLOCK[block[i][j]];
			}
		  }
		  int wait=1000;
		  if(bag[1][now].thing==18)wait=Hardmu[a];
		  else if(bag[1][now].thing==19)wait=Hardsh[a];
		  else if(bag[1][now].thing==22)wait=Hardti[a];
		  else if(bag[1][now].thing==23)wait=Hardji[a];
		  else if(bag[1][now].thing==24)wait=Hardzu[a];
		  else wait=Hard[a];
		for(int F=0;F<=wait;F+=10)
		{
			if(!DOWN('W')&&!DOWN('A')&&!DOWN('S')&&!DOWN('D'))return;
			Sleep(10);
		}
		
	}
	if(bag[1][now].num>0)
	{
		int Rap=1;
		if(bag[1][now].thing==18)Rap=2;if(bag[1][now].thing==19)Rap=4;if(bag[1][now].thing==22)Rap=7;if(bag[1][now].thing==23)Rap=2;if(bag[1][now].thing==24)Rap=15;
		if(rand()%Rap==0)bag[1][now].nj--;GOTO(0,0);cout<<"耐久:"<<bag[1][now].nj;if(bag[1][now].nj==0)bag[1][now].num=0;
	}
	for(int i=1;i<=4;i++)
	  for(int j=1;j<=4;j++)if((bag[i][j].thing==0||bag[i][j].thing==a)&&bag[i][j].num<64)
	  {
	  	bag[i][j].thing=a,bag[i][j].num++;block[X][Y]=0;return;
	  }
	GOTO(0,0);cout<<"警报:背包已满，无法拾起";Sleep(1000);
}
void Bag()
{
	int nowi=0,nowj=0,SPACE=0,Rp=0,Rpx=0,Rpy=0,willjian=0;
	while(1)
	{
	
	GOTO(0,0);
	setcolor(bk,Black);
	cout<<"Game Paused(点击Esc返回)\n";
	char Letter[10][10]={{},{' ','1','2','3','4'},{' ','Q','W','E','R'},{' ','A','S','D','F'},{' ','Z','X','C','V'},{' ','5','6','7','8','9'}};
	for(int i=2;i<=4;i++)
	{
		for(int j=1;j<=4;j++)if(i!=4||j>2)cout<<"  "<<Letter[i][j]<<"   ";else if(i==4&&j==1)cout<<"燃料"<<Letter[i][j];else cout<<"  烧制"<<Letter[i][j];puts("                            ");
		for(int j=1;j<=4;j++)if(nowj==j&&nowi==i)
	{
		setcolor(bk,Green);cout<<"[";setcolor(bk,BLOCK_COL[bag[i][j].thing]);cout<<BLOCK[bag[i][j].thing];setcolor(bk,Green);printf("%2d]",bag[i][j].num);setcolor(bk,Black);
	}
	else {cout<<"[";setcolor(bk,BLOCK_COL[bag[i][j].thing]);cout<<BLOCK[bag[i][j].thing];setcolor(bk,Black);printf("%2d]",bag[i][j].num);}
		puts("                                \n                               ");
	}
	for(int i=1;i<=4;i++)cout<<"  "<<i<<"   ";puts("");
	for(int i=1;i<=4;i++)
	if(nowj==i&&nowi==1)
	{
		setcolor(bk,Green);cout<<"[";setcolor(bk,BLOCK_COL[bag[1][i].thing]);cout<<BLOCK[bag[1][i].thing];setcolor(bk,Green);printf("%2d]",bag[1][i].num);setcolor(bk,Black);
	}
	else if(i!=now)
	{
		cout<<"[";setcolor(bk,BLOCK_COL[bag[1][i].thing]);
		cout<<BLOCK[bag[1][i].thing];setcolor(bk,Black);printf("%2d]",bag[1][i].num);
	}else
	{
		setcolor(bk,Red);cout<<"[";setcolor(bk,BLOCK_COL[bag[1][i].thing]);cout<<BLOCK[bag[1][i].thing];setcolor(bk,Red);printf("%2d]",bag[1][i].num);setcolor(bk,Black);
	}puts("                                \n                         ");
		GOTO(1,25);cout<<"|-合-成-|_  ";
		GOTO(2,25);cout<<"|";if(bag[5][1].num==0)cout<<" 5 |";
		else
		{
			setcolor(bk,BLOCK_COL[bag[5][1].thing]);cout<<BLOCK[bag[5][1].thing];if(nowi!=5||nowj!=1)setcolor(bk,Black);else setcolor(bk,Green);printf("%2d",bag[5][1].num);
		}setcolor(bk,Black);
		if(bag[5][2].num==0)cout<<" 6 | \\[";
		else
		{
			setcolor(bk,BLOCK_COL[bag[5][2].thing]);cout<<BLOCK[bag[5][2].thing];if(nowi!=5||nowj!=2)setcolor(bk,Black);else setcolor(bk,Green);printf("%2d \\[",bag[5][2].num);
		}setcolor(bk,Black);
		if(bag[5][5].num==0)cout<<" 9 ]";
		else
		{
			setcolor(bk,BLOCK_COL[bag[5][5].thing]);cout<<BLOCK[bag[5][5].thing];if(nowi!=5||nowj!=5)setcolor(bk,Black);else setcolor(bk,Green);printf("%2d",bag[5][5].num);
		}setcolor(bk,Black);
		GOTO(3,25);
		if(bag[5][3].num==0)cout<<"| 7 |";
		else
		{
			setcolor(bk,BLOCK_COL[bag[5][3].thing]);cout<<"|";cout<<BLOCK[bag[5][3].thing];if(nowi!=5||nowj!=3)setcolor(bk,Black);else setcolor(bk,Green);printf("%2d",bag[5][3].num);
		}setcolor(bk,Black);
		if(bag[5][4].num==0)cout<<" 8 |_/ 结果";
		else
		{
			setcolor(bk,BLOCK_COL[bag[5][4].thing]);cout<<BLOCK[bag[5][4].thing];if(nowi!=5||nowj!=4)setcolor(bk,Black);else setcolor(bk,Green);printf("%2d_/ 结果",bag[5][4].num);
		}setcolor(bk,Black);
		GOTO(8,25);cout<<"[    ] ()";
		GOTO(9,25);cout<<"[    ] ||";
		GOTO(10,25);cout<<"[    ] --";
		GOTO(11,25);cout<<"[    ] /\\";
		
		for(int i=1;i<=5;i++)
		   for(int j=1;j<=(i<=4?4:5);j++)
		   if(DOWN(Letter[i][j]))
		   {
		   	if(SPACE)
		   	{
		   		if(bag[i][j].thing==Rp||bag[i][j].thing==0)
		   		{
		   			bag[i][j].thing=Rp;
		   			bag[i][j].num+=SPACE;SPACE=0;nowi=0;nowj=0;
				}
				else nowi=0,nowj=0;
			   }
		   		else if(nowi!=0&&nowj!=0)
				   {
				   	if(!(i!=5||j!=5))nowi=0;
				   	else
					   {
					   	
					   	if((nowi!=i||nowj!=j)&&bag[i][j].thing==bag[nowi][nowj].thing&&bag[i][j].num+bag[nowi][nowj].num<=64)bag[i][j].num+=bag[nowi][nowj].num,bag[nowi][nowj].num=0;
				   			else swap(bag[i][j],bag[nowi][nowj]);
				   		if(nowi==5&&nowj==5)bag[5][1].num-=willjian,bag[5][2].num-=willjian,bag[5][3].num-=willjian,bag[5][4].num-=willjian;
					   }
					   Clac();
				   	nowi=0;nowj=0;
				   }
				else 
		   		nowi=i,nowj=j;
		   }setcolor(bk,Black);
		if(DOWN(VK_SPACE)&&nowi&&bag[nowi][nowj].num>1&&!SPACE&&(nowi!=5||nowj!=5))
		{
			SPACE=bag[nowi][nowj].num-bag[nowi][nowj].num/2;Rp=bag[nowi][nowj].thing;bag[nowi][nowj].num=bag[nowi][nowj].num/2;
		nowi=0;nowj=0;}
		for(int i=1;i<=4;i++)
		   for(int j=1;j<=4;j++)
		if(DOWN(VK_ESCAPE))
		{
			system("cls");
			return;
		}
		willjian=0;bag[5][5].num=0;
		if(CanHc())
		{
			int Numlist[100];
			for(int i=1;i<=64;i++)Numlist[i]=1;
			Numlist[12]=2;Numlist[13]=2;Numlist[14]=4;
			int MIN=100;
			for(int i=1;i<=4;i++)if(bag[5][i].num!=0)MIN=min(MIN,bag[5][i].num);
			bag[5][5].num=Numlist[CanHc()]*min(64/Numlist[CanHc()],MIN);
			bag[5][5].thing=CanHc();willjian=min(64/Numlist[CanHc()],MIN);
		}
		int BOOO=0;
		while(!BOOO)
		{BOOO=1;
			for(int i=1;i<=5;i++)
		   for(int j=1;j<=(i<=4?4:5);j++)
		   if(DOWN(Letter[i][j])||DOWN(VK_ESCAPE)||DOWN(VK_SPACE))BOOO=0;
		}
		Sleep(20);
	}
}
void work(int R,int xx,int yy)
{
	system("cls"); 
	if(R==33&&bk==bk0)
	{
		cout<<"按住E睡觉";
		for(int i=1;i<=10;i++)
		{
			if(!DOWN('E'))return;
			Sleep(1000);
		}
		Time=0;
	}
	if(R==17)
	{
		int nowi=0,nowj=0,SPACE=0,Rp=0,Rpx=0,Rpy=0,willjian=0;for(int i=1;i<=8;i++)swap(box[xx][yy][i],bag[5+i/5][i-i/5*4]);
		while(1)
		{
		GOTO(0,0);
		setcolor(bk,Black);
		cout<<"箱子(点击Esc返回)\n";
		int Letter[12][12]={{},{' ','1','2','3','4'},{' ','Q','W','E','R'},{' ','A','S','D','F'},{' ','Z','X','C','V'},{' ','T','Y','U','I'},{' ','G','H','J','K'}};
		
		for(int i=5;i<=6;i++)
		{
			for(int j=1;j<=4;j++)cout<<"  "<<(char)Letter[i][j]<<"   ";puts("         ");
			for(int j=1;j<=4;j++)
		if(nowj==j&&nowi==i)
		{
			setcolor(bk,Green);cout<<"[";setcolor(bk,BLOCK_COL[bag[i][j].thing]);cout<<BLOCK[bag[i][j].thing];setcolor(bk,Green);printf("%2d]",bag[i][j].num);setcolor(bk,Black);
		}
		else {cout<<"[";setcolor(bk,BLOCK_COL[bag[i][j].thing]);cout<<BLOCK[bag[i][j].thing];setcolor(bk,Black);printf("%2d]",bag[i][j].num);}
		puts("         ");}cout<<"\n\n";
		for(int i=2;i<=4;i++)
		{
			for(int j=1;j<=4;j++)cout<<"  "<<(char)Letter[i][j]<<"   ";puts("                            ");
			for(int j=1;j<=4;j++)if(nowj==j&&nowi==i)
		{
			setcolor(bk,Green);cout<<"[";setcolor(bk,BLOCK_COL[bag[i][j].thing]);cout<<BLOCK[bag[i][j].thing];setcolor(bk,Green);printf("%2d]",bag[i][j].num);setcolor(bk,Black);
		}
		else {cout<<"[";setcolor(bk,BLOCK_COL[bag[i][j].thing]);cout<<BLOCK[bag[i][j].thing];setcolor(bk,Black);printf("%2d]",bag[i][j].num);}
			puts("                                \n                               ");
		}
		for(int i=1;i<=4;i++)cout<<"  "<<i<<"   ";puts("");
		for(int i=1;i<=4;i++)
		if(nowj==i&&nowi==1)
		{
			setcolor(bk,Green);cout<<"[";setcolor(bk,BLOCK_COL[bag[1][i].thing]);cout<<BLOCK[bag[1][i].thing];setcolor(bk,Green);printf("%2d]",bag[1][i].num);setcolor(bk,Black);
		}
		else if(i!=now)
		{
			cout<<"[";setcolor(bk,BLOCK_COL[bag[1][i].thing]);
			cout<<BLOCK[bag[1][i].thing];setcolor(bk,Black);printf("%2d]",bag[1][i].num);
		}else
		{
			setcolor(bk,Red);cout<<"[";setcolor(bk,BLOCK_COL[bag[1][i].thing]);cout<<BLOCK[bag[1][i].thing];setcolor(bk,Red);printf("%2d]",bag[1][i].num);setcolor(bk,Black);
		}puts("                                \n                         ");
			Sleep(100);
			for(int i=1;i<=6;i++)
			   for(int j=1;j<=4;j++)
			   if(DOWN(Letter[i][j]))
			   {
			   	if(SPACE)
			   	{
			   		if(bag[i][j].thing==Rp||bag[i][j].thing==0)
			   		{
			   			bag[i][j].thing=Rp;
			   			bag[i][j].num+=SPACE;SPACE=0;nowi=0;nowj=0;
					}
					else nowi=0,nowj=0;
				   }
			   		else if(nowi!=0&&nowj!=0)
					   {
					   	if(!(i!=6||j!=10))nowi=0;
					   	else
						   {
						   	
						   	if((i!=nowi||j!=nowj)&&bag[i][j].thing==bag[nowi][nowj].thing&&bag[i][j].num+bag[nowi][nowj].num<=64)bag[i][j].num+=bag[nowi][nowj].num,bag[nowi][nowj].num=0;
					   			else swap(bag[i][j],bag[nowi][nowj]);
					   		//if(nowi==6&&nowj==10)bag[6][1].num-=willjian,bag[6][2].num-=willjian,bag[6][3].num-=willjian,bag[6][4].num-=willjian,bag[6][5].num-=willjian,bag[6][6].num-=willjian,bag[6][7].num-=willjian,bag[6][8].num-=willjian,bag[6][9].num-=willjian;
						   }
						   Clac();
					   	nowi=0;nowj=0;
					   }
					else 
			   		nowi=i,nowj=j;
			   }setcolor(bk,Black);
			if(DOWN(VK_SPACE)&&nowi&&bag[nowi][nowj].num>1&&!SPACE&&(nowi!=6||nowj!=10))
			{
				SPACE=bag[nowi][nowj].num-bag[nowi][nowj].num/2;Rp=bag[nowi][nowj].thing;bag[nowi][nowj].num=bag[nowi][nowj].num/2;
			nowi=0;nowj=0;}
			for(int i=1;i<=4;i++)
			   for(int j=1;j<=4;j++)
			if(DOWN(VK_ESCAPE))
			{
				system("cls");for(int i=1;i<=8;i++)swap(box[xx][yy][i],bag[5+i/5][i-i/5*4]);
				return;
			}
		}
	}
	if(R==25)
	{
		int hot[64]={0};
		hot[4]=2;hot[12]=1;hot[11]=4;
		if(box[x][y][1].num==0&&(bag[4][1].thing==4||bag[4][1].thing==12||bag[4][1].thing==11))swap(box[x][y][1],bag[4][1]);
		if(box[x][y][2].num==0&&(bag[4][2].thing==6||bag[4][2].thing==8||bag[4][2].thing==9))swap(box[x][y][2],bag[4][2]);
		while(1)
		{
			GOTO(0,0);Clac();
			setcolor(bk,Black);
			cout<<"Game Paused(点击Esc返回)\n";
			for(int i=1;i<=3;i++)if(box[x][y][i].num==0)box[x][y][i].thing=0;
			if(DOWN('1'))
			{
				if(box[x][y][1].num==0)swap(box[x][y][1],bag[4][1]);
				else 
				while(--box[x][y][1].num) 
				{
					for(int i=1;i<=4;i++)
					  for(int j=1;j<=4;j++)if((bag[i][j].thing==0||bag[i][j].thing==box[x][y][1].thing)&&bag[i][j].num<64)
					  {
					  	bag[i][j].thing=box[x][y][1].thing,bag[i][j].num++;goto RIP2;
					  }
				}RIP2:;
			}
			if(DOWN('2'))
			{
				if(box[x][y][2].num==0)swap(box[x][y][2],bag[4][2]);
				else
				while(--box[x][y][2].num) 
				{
					for(int i=1;i<=4;i++)
					  for(int j=1;j<=4;j++)if((bag[i][j].thing==0||bag[i][j].thing==box[x][y][2].thing)&&bag[i][j].num<64)
					  {
					  	bag[i][j].thing=box[x][y][2].thing,bag[i][j].num++;goto RIP1;
					  }
				}RIP1:;
			}
			if(DOWN('3'))
			{
				if(box[x][y][3].num<=0)box[x][y][3].num=0;
				while(--box[x][y][3].num)
					for(int i=1;i<=4;i++)
					  for(int j=1;j<=4;j++)if((bag[i][j].thing==0||bag[i][j].thing==box[x][y][3].thing)&&bag[i][j].num<64)
					  {
					  	bag[i][j].thing=box[x][y][3].thing,bag[i][j].num++;
						goto RIP;
					  }
				RIP:;
			}
			if(DOWN(VK_ESCAPE))return;
			cout<<"----烧炼----\n燃料:";
			setcolor(bk,BLOCK_COL[box[x][y][1].thing]);cout<<BLOCK[box[x][y][1].thing]<<box[x][y][1].num<<"\n";setcolor(bk,Black);
			cout<<"物品:";setcolor(bk,BLOCK_COL[box[x][y][2].thing]);cout<<BLOCK[box[x][y][2].thing]<<box[x][y][2].num<<"\n";setcolor(bk,Black);
			cout<<"烧制中:"<<box[x][y][4].num<<"%\n";setcolor(bk,Black);
			cout<<"结果:";setcolor(bk,BLOCK_COL[box[x][y][3].thing]);cout<<BLOCK[box[x][y][3].thing]<<box[x][y][3].num<<"\n";
			if(box[x][y][4].num==100)
			{
				box[x][y][4].num=0;
				box[x][y][2].num--;
				box[x][y][3].thing=((box[x][y][2].thing==6)?7:(box[x][y][2].thing==8)?20:(box[x][y][2].thing==9)?21:0);
				if(box[x][y][2].thing!=0)box[x][y][3].num++;
			}
			if(box[x][y][4].thing==0&&box[x][y][1].num!=0&&box[x][y][2].num!=0)
			{
				box[x][y][4].thing=hot[box[x][y][1].thing];
				box[x][y][1].num--;
			}
			Sleep(100);
			if(box[x][y][4].thing!=0&&box[x][y][2].num!=0)box[x][y][4].num++;
		}
	}
	if(R==16)
	{
		int nowi=0,nowj=0,SPACE=0,Rp=0,Rpx=0,Rpy=0,willjian=0;
		while(1)
		{
		GOTO(0,0);
		setcolor(bk,Black);
		cout<<"Game Paused(点击Esc返回)\n";
		int Letter[12][12]={{},{' ','1','2','3','4'},{' ','Q','W','E','R'},{' ','A','S','D','F'},{' ','Z','X','C','V'},{},{' ',VK_NUMPAD7,VK_NUMPAD8,VK_NUMPAD9,VK_NUMPAD4,VK_NUMPAD5,VK_NUMPAD6,VK_NUMPAD1,VK_NUMPAD2,VK_NUMPAD3,VK_ADD}};
		for(int i=2;i<=4;i++)
		{
			for(int j=1;j<=4;j++)cout<<"  "<<(char)Letter[i][j]<<"   ";puts("                            ");
			for(int j=1;j<=4;j++)if(nowj==j&&nowi==i)
		{
			setcolor(bk,Green);cout<<"[";setcolor(bk,BLOCK_COL[bag[i][j].thing]);cout<<BLOCK[bag[i][j].thing];setcolor(bk,Green);printf("%2d]",bag[i][j].num);setcolor(bk,Black);
		}
		else {cout<<"[";setcolor(bk,BLOCK_COL[bag[i][j].thing]);cout<<BLOCK[bag[i][j].thing];setcolor(bk,Black);printf("%2d]",bag[i][j].num);}
			puts("                                \n                               ");
		}
		for(int i=1;i<=4;i++)cout<<"  "<<i<<"   ";puts("");
		for(int i=1;i<=4;i++)
		if(nowj==i&&nowi==1)
		{
			setcolor(bk,Green);cout<<"[";setcolor(bk,BLOCK_COL[bag[1][i].thing]);cout<<BLOCK[bag[1][i].thing];setcolor(bk,Green);printf("%2d]",bag[1][i].num);setcolor(bk,Black);
		}
		else if(i!=now)
		{
			cout<<"[";setcolor(bk,BLOCK_COL[bag[1][i].thing]);
			cout<<BLOCK[bag[1][i].thing];setcolor(bk,Black);printf("%2d]",bag[1][i].num);
		}else
		{
			setcolor(bk,Red);cout<<"[";setcolor(bk,BLOCK_COL[bag[1][i].thing]);cout<<BLOCK[bag[1][i].thing];setcolor(bk,Red);printf("%2d]",bag[1][i].num);setcolor(bk,Black);
		}puts("                                \n                         ");
			GOTO(1,25);setcolor(bk,Black);cout<<"|---合-成---|";
			GOTO(2,25);cout<<"|";if(bag[6][1].num==0)cout<<"N7 |";
			else
			{
				setcolor(bk,BLOCK_COL[bag[6][1].thing]);cout<<BLOCK[bag[6][1].thing];if(nowi!=6||nowj!=1)setcolor(bk,Black);else setcolor(bk,Green);printf("%2d",bag[6][1].num);
			}setcolor(bk,Black);
			if(bag[6][2].num==0)cout<<"N8 |";
			else
			{
				setcolor(bk,BLOCK_COL[bag[6][2].thing]);cout<<BLOCK[bag[6][2].thing];if(nowi!=6||nowj!=2)setcolor(bk,Black);else setcolor(bk,Green);printf("%2d",bag[6][2].num);
			}setcolor(bk,Black);
			if(bag[6][3].num==0)cout<<"N9 |_  ";
			else
			{
				setcolor(bk,BLOCK_COL[bag[6][3].thing]);cout<<BLOCK[bag[6][3].thing];if(nowi!=6||nowj!=3)setcolor(bk,Black);else setcolor(bk,Green);printf("%2d",bag[6][3].num);
			}setcolor(bk,Black);
			GOTO(3,25);cout<<"|";if(bag[6][4].num==0)cout<<"N4 |";
			else
			{
				setcolor(bk,BLOCK_COL[bag[6][4].thing]);cout<<BLOCK[bag[6][4].thing];if(nowi!=6||nowj!=4)setcolor(bk,Black);else setcolor(bk,Green);printf("%2d",bag[6][4].num);
			}setcolor(bk,Black);
			if(bag[6][5].num==0)cout<<"N5 |";
			else
			{
				setcolor(bk,BLOCK_COL[bag[6][5].thing]);cout<<BLOCK[bag[6][5].thing];if(nowi!=6||nowj!=5)setcolor(bk,Black);else setcolor(bk,Green);printf("%2d",bag[6][5].num);
			}setcolor(bk,Black);
			if(bag[6][6].num==0)cout<<"N6 | \\[";
			else
			{
				setcolor(bk,BLOCK_COL[bag[6][6].thing]);cout<<BLOCK[bag[6][6].thing];if(nowi!=6||nowj!=6)setcolor(bk,Black);else setcolor(bk,Green);printf("%2d",bag[6][6].num);
			}setcolor(bk,Black);
			if(bag[6][10].num==0)cout<<" + ]";
			else
			{
				setcolor(bk,BLOCK_COL[bag[6][10].thing]);cout<<BLOCK[bag[6][10].thing];if(nowi!=6||nowj!=10)setcolor(bk,Black);else setcolor(bk,Green);printf("%2d",bag[6][10].num);
			}setcolor(bk,Black);
			GOTO(4,25);cout<<"|";if(bag[6][7].num==0)cout<<"N1 |";
			else
			{
				setcolor(bk,BLOCK_COL[bag[6][7].thing]);cout<<BLOCK[bag[6][7].thing];if(nowi!=6||nowj!=7)setcolor(bk,Black);else setcolor(bk,Green);printf("%2d",bag[6][7].num);
			}setcolor(bk,Black);
			if(bag[6][8].num==0)cout<<"N2 |";
			else
			{
				setcolor(bk,BLOCK_COL[bag[6][8].thing]);cout<<BLOCK[bag[6][8].thing];if(nowi!=6||nowj!=8)setcolor(bk,Black);else setcolor(bk,Green);printf("%2d",bag[6][8].num);
			}setcolor(bk,Black);
			if(bag[6][9].num==0)cout<<"N3 |";
			else
			{
				setcolor(bk,BLOCK_COL[bag[6][9].thing]);cout<<BLOCK[bag[6][9].thing];if(nowi!=6||nowj!=9)setcolor(bk,Black);else setcolor(bk,Green);printf("%2d",bag[6][9].num);
			}
			Sleep(100);
			for(int i=1;i<=6;i++)
			   for(int j=1;j<=(i<=5?4:10);j++)
			   if(DOWN(Letter[i][j]))
			   {
			   	if(SPACE)
			   	{
			   		if(bag[i][j].thing==Rp||bag[i][j].thing==0)
			   		{
			   			bag[i][j].thing=Rp;
			   			bag[i][j].num+=SPACE;SPACE=0;nowi=0;nowj=0;
					}
					else nowi=0,nowj=0;
				   }
			   		else if(nowi!=0&&nowj!=0)
					   {
					   	if(!(i!=6||j!=10))nowi=0;
					   	else
						   {
						   	
						   	if((i!=nowi||j!=nowj)&&bag[i][j].thing==bag[nowi][nowj].thing&&bag[i][j].num+bag[nowi][nowj].num<=64)bag[i][j].num+=bag[nowi][nowj].num,bag[nowi][nowj].num=0;
					   			else swap(bag[i][j],bag[nowi][nowj]);
					   		if(nowi==6&&nowj==10)bag[6][1].num-=willjian,bag[6][2].num-=willjian,bag[6][3].num-=willjian,bag[6][4].num-=willjian,bag[6][5].num-=willjian,bag[6][6].num-=willjian,bag[6][7].num-=willjian,bag[6][8].num-=willjian,bag[6][9].num-=willjian;
						   }
						   Clac();
					   	nowi=0;nowj=0;
					   }
					else 
			   		nowi=i,nowj=j;
			   }setcolor(bk,Black);
			if(DOWN(VK_SPACE)&&nowi&&bag[nowi][nowj].num>1&&!SPACE&&(nowi!=6||nowj!=10))
			{
				SPACE=bag[nowi][nowj].num-bag[nowi][nowj].num/2;Rp=bag[nowi][nowj].thing;bag[nowi][nowj].num=bag[nowi][nowj].num/2;
			nowi=0;nowj=0;}
			for(int i=1;i<=4;i++)
			   for(int j=1;j<=4;j++)
			if(DOWN(VK_ESCAPE))
			{
				system("cls");
				return;
			}
			willjian=0;bag[6][10].num=0;
			if(CanHc2())
			{
				int Numlist[100];
				for(int i=1;i<=64;i++)Numlist[i]=1;
				Numlist[12]=2;Numlist[13]=2;Numlist[14]=4;
				int MIN=100;
				for(int i=1;i<=9;i++)if(bag[6][i].num!=0)MIN=min(MIN,bag[6][i].num);
				bag[6][10].num=Numlist[CanHc2()]*min(64/Numlist[CanHc2()],MIN);
				bag[6][10].thing=CanHc2();willjian=Numlist[CanHc2()]*min(64/Numlist[CanHc2()],MIN);
			}
		}
	}
}
int Can(int X,int Y)
{
	for(int i=1;i<=64;i++)if(X==wor[i].x&&Y==wor[i].y&&!wor[i].Delete)return 0;
	if(block[X][Y]==0&&block[X+1][Y]==0)return 1;return 0;
}
int JS(int x,int y)
{
	for(int i=1;i<=64;i++)if((x==wor[i].x||x==wor[i].x+1)&&y==wor[i].y&&!wor[i].Delete)return i;
	return 0;
}
void attack(int Node)
{
	GOTO(0,0);
	int la= wor[Node].heal;
	if(Attack>0)
	{
		return;
	}
	if(bag[1][now].thing==26)
	{
		wor[Node].heal--;
		if(rand()%2==0)wor[Node].heal--;
	}
	else if(bag[1][now].thing==27)
	{
		wor[Node].heal-=2;
		if(rand()%2==0)wor[Node].heal--;
	}
	else if(bag[1][now].thing==28)
	{
		wor[Node].heal-=3;
		if(rand()%3==0)wor[Node].heal-=3;
	}
	else if(bag[1][now].thing==29)
	{
		wor[Node].heal-=3;
		if(rand()%4==0)wor[Node].heal-=2;
	}
	else if(bag[1][now].thing==30)
	{
		wor[Node].heal-=5;
		if(rand()%4==0)wor[Node].heal-=5;
	}
	else wor[Node].heal-=rand()%2==0;Attack=15;
	if(bag[1][now].num>0)
	{
		int Rap=1;
		if(bag[1][now].thing==26)Rap=4;if(bag[1][now].thing==27)Rap=10;if(bag[1][now].thing==28)Rap=16;if(bag[1][now].thing==29)Rap=5;if(bag[1][now].thing==30)Rap=40;
		if(rand()%Rap==0)bag[1][now].nj--;GOTO(0,0);cout<<"耐久:"<<bag[1][now].nj;if(bag[1][now].nj==0)bag[1][now].num=0;
	}
	GOTO(0,0);setcolor(bk,1);ATTACK[Node]=la-wor[Node].heal;
}
void Input()
{
	for(int i='1';i<='4';i++)
	if(DOWN(i))now=i-'0';
	if(!DOWN(VK_SHIFT))
	{
		
		if(DOWN('E')&&(bag[1][now].thing==31||bag[1][now].thing==32)&&Eat<10)
		{
			for(int i=1;i<=30;i++)
			{
				Clac();
				Sleep(100);
				if(!DOWN('R'))break;
			}
			Eat++;bag[1][now].num--;
		}else if(DOWN('E'))Bag();
		else if(DOWN('D')&&Can(x,y-1))y--;
		else if(DOWN('A')&&Can(x,y+1))y++;
		else if(DOWN('D')&&block[x+1][y-1]!=0)dig(block[x+1][y-1],x+1,y-1);
		else if(DOWN('D')&&block[x][y-1]!=0)dig(block[x][y-1],x,y-1);
		else if(DOWN('A')&&block[x+1][y+1]!=0)dig(block[x+1][y+1],x+1,y+1);
		else if(DOWN('A')&&block[x][y+1]!=0)dig(block[x][y+1],x,y+1);
		else if(DOWN('W')&&block[x+2][y]!=0)dig(block[x+2][y],x+2,y);
		else if(DOWN('S')&&block[x-1][y]!=0)dig(block[x-1][y],x-1,y);
		else if(DOWN('D')&&JS(x,y-1))attack(JS(x,y-1));
		else if(DOWN('A')&&JS(x,y-1))attack(JS(x,y+1));
		else if(DOWN('D')&&JS(x+1,y-1))attack(JS(x+1,y-1));
		else if(DOWN('A')&&JS(x+1,y+1))attack(JS(x+1,y+1));
	}
	else
	{
		if(CANPUT[bag[1][now].thing])
		{
			if(DOWN('D')&&block[x+1][y-1]==0&&bag[1][now].num!=0)block[x+1][y-1]=bag[1][now].thing,bag[1][now].num--;
			else if(DOWN('D')&&block[x][y-1]==0&&bag[1][now].num!=0)block[x][y-1]=bag[1][now].thing,bag[1][now].num--;
			else if(DOWN('A')&&block[x+1][y+1]==0&&bag[1][now].num!=0)block[x+1][y+1]=bag[1][now].thing,bag[1][now].num--;
			else if(DOWN('A')&&block[x][y+1]==0&&bag[1][now].num!=0)block[x][y+1]=bag[1][now].thing,bag[1][now].num--;
			else if(DOWN('W')&&block[x+2][y]==0&&bag[1][now].num!=0)block[x+2][y]=bag[1][now].thing,bag[1][now].num--;
			else if(DOWN('S')&&block[x-1][y]==0&&bag[1][now].num!=0)block[x-1][y]=bag[1][now].thing,bag[1][now].num--;
			else if(DOWN('E')&&block[x+2][y-1]==0&&bag[1][now].num!=0)block[x+2][y-1]=bag[1][now].thing,bag[1][now].num--;
			else if(DOWN('Q')&&block[x+2][y+1]==0&&bag[1][now].num!=0)block[x+2][y+1]=bag[1][now].thing,bag[1][now].num--;
			else if(DOWN('Z')&&block[x-1][y-1]==0&&bag[1][now].num!=0)block[x-1][y-1]=bag[1][now].thing,bag[1][now].num--;
			else if(DOWN('C')&&block[x-1][y+1]==0&&bag[1][now].num!=0)block[x-1][y+1]=bag[1][now].thing,bag[1][now].num--;
		}
		else if(DOWN('D')&&(block[x+1][y-1]==33||block[x+1][y-1]==17||block[x+1][y-1]==16||block[x+1][y-1]==25))work(block[x+1][y-1],x+1,y-1);
		else if(DOWN('D')&&(block[x][y-1]==33||block[x][y-1]==17||block[x][y-1]==16||block[x][y-1]==25))work(block[x][y-1],x,y-1);
		else if(DOWN('A')&&(block[x+1][y+1]==33||block[x+1][y+1]==17||block[x+1][y+1]==16||block[x+1][y+1]==25))work(block[x+1][y+1],x+1,y+1);
		else if(DOWN('A')&&(block[x][y+1]==33||block[x][y+1]==17||block[x][y+1]==16||block[x][y+1]==25))work(block[x][y+1],x,y+1);
		else if(DOWN('W')&&(block[x+2][y]==33||block[x+2][y]==17||block[x+2][y]==16||block[x+2][y]==25))work(block[x+2][y],x+2,y);
		else if(DOWN('S')&&(block[x-1][y]==33||block[x-1][y]==17||block[x-1][y]==16||block[x-1][y]==25))work(block[x-1][y],x-1,y);
		
	}
	if(DOWN(VK_SPACE)&&block[x+2][y]==0&&block[x-1][y]!=0)UPDOWN_SPEED=1;
	
	if(DOWN(VK_OEM_2))
	{
		GOTO(9,0);
		cout<<"Game Paused";
		GOTO(10,0);
		cout<<"Input:                 ";
		GOTO(10,6);ShowCursor();
		string str;cin>>str;
		if(op>1)
		{
			if(str=="/time")
			{string num;
				cin>>num;
				Time=toint(num);
			}
			if(str=="/tp")
			{string num;
				cin>>num;
				x=toint(num);cin>>num;y=toint(num);if(x==0)x=Dpx[y]+1;
			}
			if(str=="/health")
			{string num;
				cin>>num;
				Health=toint(num);
			}
			if(str=="/summon")
			{
				string num;int X,Y,Z;
				cin>>num;
				if(num[0]=='~')
				{
					if(num[1]=='+')
					X=x+toint(num);
					else if(num[1]=='-')X=x-toint(num);
				}
				else X=toint(num);
				cin>>num;
				if(num[0]=='~')
				{
					if(num[1]=='+')
					Y=y+toint(num);
					else if(num[1]=='-')Y=y-toint(num);
				}
				else Y=toint(num);
				cin>>num;
				Z=toint(num);//cout<<X<<","<<Y<<":"<<Z; 
				for(int i=1;i<=64;i++)
				if(wor[i].Delete)
				{
					wor[i].Delete=0;
					wor[i].x=X;
					wor[i].y=Y;
					wor[i].heal=10;
					wor[i].node=Z;return;
				}
			}
			if(str=="/set")
			{
				string num;int X,Y,Z;
				cin>>num;
				if(num[0]=='~')
				{
					if(num[1]=='+')
					X=x+toint(num);
					else if(num[1]=='-')X=x-toint(num);
				}
				else X=toint(num);
				cin>>num;
				if(num[0]=='~')
				{
					if(num[1]=='+')
					Y=y+toint(num);
					else if(num[1]=='-')Y=y-toint(num);
				}
				else Y=toint(num);
				cin>>num;
				Z=toint(num);
				block[X][Y]=Z;
			}
			if(str=="/give")
			{
				string num;
				cin>>num;
				for(int i=1;i<=4;i++)
				  for(int j=1;j<=4;j++)if((bag[i][j].thing==0||bag[i][j].thing==toint(num))&&bag[i][j].num<1)
				  {
				  	bag[i][j].thing=toint(num),bag[i][j].num+=64;return;
				  }
			}
		}system("cls");
	}
	HideCursor();
}
int Min,Minx,Miny,vis[258][1029],Rap;
void AI(int X,int Y,int k,int mx,int my)
{
	//cout<<X<<","<<Y<<endl;
	Rap++;
	if(k>=Min||vis[X][Y]||abs(X-x)+abs(Y-y)>=12)return;
	if(X<1||Y<1||X>200||Y>1000)return;
	vis[X][Y]=1;
	if(X==x&&Y==y)
	{
		Min=k;
		Minx=mx,Miny=my;
		return;
	}
	if(block[X-1][Y]==0&&!vis[X-1][Y])AI(X-1,Y,k+1,mx,my);
	else
	{
		if(Can(X,Y+1)&&!vis[X][Y+1])AI(X,Y+1,k+1,k==0?0:mx,k==0?1:my);
		if(Can(X,Y-1)&&!vis[X][Y-1])AI(X,Y-1,k+1,k==0?0:mx,k==0?-1:my);
		if(Can(X+1,Y+1)&&!vis[X+1][Y+1])AI(X+1,Y+1,k+1,k==0?1:mx,k==0?1:my);
		if(Can(X+1,Y-1)&&!vis[X+1][Y-1])AI(X+1,Y-1,k+1,k==0?1:mx,k==0?-1:my);
	}
	vis[X][Y]=0;	
}
void Clac()
{
	Time++;int cc=0;
	for(int i=x-10;i<=x+10;i++)
	  for(int j=y-10;j<=y+10;j++)
	  if(block[i][j]==47&&block[i+3][j]==47&&x==i+1&&y==j)cc=1;
	if(cc)Rape++;
	else Rape=0;
	if(Rape)
	{
		if(Rape<10)
	{
		system("cls");Sleep(100);
	}
	else
	{
		Rape=0;
		if(y<900)
		{
			YLY=y;
			y=y/10+900;
			x=Dpx[y]+1;
			block[x-1][y-1]=47;block[x+2][y-1]=47;
		}
		else
		{
			y=YLY;
			x=Dpx[y]+1;
		}
	}
	}
	if(Eat>8&&Health<10)
	{
		int Rp=rand()%20==0;
		if(Rp)
		Health++,Eat-=rand()%2==0;
	}
	if(Time%DayLong>=DayLong*7/10)bk=bk3;
	else if(Time%DayLong>=DayLong*6/10)bk=bk2;
	else if(Time%DayLong>=DayLong*5/10)bk=bk1;
	else if(Time%DayLong<DayLong/2)bk=bk0;
	for(int i=x-5;i<=x+5;i++)
		  for(int j=y-15;j<=y+15;j++)if(Can(i,j)&&(block[i-1][j]==36||block[i][j-1]==36||block[i][j+1]==36)&&rand()%200==0)
		  {
		  	for(int o=1;o<=64;o++)
				if(wor[o].Delete)
				{
					wor[o].Delete=0;
					wor[o].x=i;
					wor[o].y=j;
					wor[o].heal=5;
					wor[o].node=2;break;
				}
		  }
	if(bk==bk3||bk==bk2)
	{
		for(int i=x-30;i<=x+30;i++)
		  for(int j=y-30;j<=y+30;j++)
		  if(Can(i,j)&&block[i-1][j]!=0&&abs(i-x)+abs(j-y)>12&&rand()%200==0)
		  {
		  	for(int o=1;o<=64;o++)
				if(wor[o].Delete)
				{
					wor[o].Delete=0;
					wor[o].x=i;
					wor[o].y=j;
					wor[o].heal=10;
					wor[o].node=0;break;
				}
		  }
		  else if(Can(i,j)&&block[i-1][j]!=0&&abs(i-x)+abs(j-y)>12&&rand()%300==0) 
		  {
		  	for(int o=1;o<=64;o++)
				if(wor[o].Delete)
				{
					wor[o].Delete=0;
					wor[o].x=i;
					wor[o].y=j;
					wor[o].heal=10;
					wor[o].node=1;break;
				}
		  }
	}
	for(int i=x-10;i<=x+10;i++)
		for(int j=y-10;j<=y+10;j++)if(block[i][j]==42||block[i][j]==38||block[i][j]==39||block[i][j]==40||block[i][j]==44||block[i][j]==46||block[i][j]==45)block[i][j]=0;
	for(int i=x-10;i<=x+10;i++)
		for(int j=y-10;j<=y+10;j++)
		if(i>0&&j>0)
		{
			if(j>900&&(block[i][j]==37))block[i][j]=0;
			if(block[i][j]==37||block[i][j]==38||block[i][j]==39||block[i][j]==40||block[i][j]==42)
			{
				if(!block[i-1][j]||block[i-1][j]==42)block[i-1][j]=42;
				else
				{
				if(!block[i][j+1]&&block[i][j]!=42)block[i][j+1]=block[i][j]+1;	
				if(!block[i][j-1]&&block[i][j]!=42)block[i][j-1]=block[i][j]+1;
				}
			}
			if(block[i][j]==43||block[i][j]==44||block[i][j]==46)
			{
				if(!block[i-1][j]||block[i-1][j]==46)block[i-1][j]=42;
				else
				{
				if(!block[i][j+1]&&block[i][j]!=46)block[i][j+1]=block[i][j]+1;	
				if(!block[i][j-1]&&block[i][j]!=46)block[i][j-1]=block[i][j]+1;
				}
			}
			if(block[i][j]==43&&(block[i+1][j]>=37&&block[i+1][j]<=42||block[i][j-1]>=37&&block[i][j-1]<=42||block[i][j+1]>=37&&block[i][j+1]<=42))block[i][j]=47;
			if(block[i+1][j]>=43&&block[i+1][j]<=46&&(block[i+1][j]>=37&&block[i+1][j]<=42||block[i][j-1]>=37&&block[i][j-1]<=42||block[i][j+1]>=37&&block[i][j+1]<=42))block[i][j]=5;
		}
	for(int i=1;i<=64;i++)
	if(wor[i].heal<=0&&wor[i].Delete==0)
	{
		int GIVET=0,RP=1;
		if(wor[i].node==0)GIVET=rand()%2==0?31:rand()%20==0?20:0;
		if(wor[i].node==1)GIVET=rand()%2==0?47:0;
		if(wor[i].node==2)GIVET=rand()%2==0?51:0;
			for(int T=1;T<=4&&RP;T++)
			  for(int j=1;j<=4;j++)if((bag[T][j].thing==0||bag[T][j].thing==GIVET)&&bag[T][j].num<64)
			  {
			  	bag[T][j].thing=GIVET,bag[T][j].num++;RP=0;break;
			  }
		wor[i].Delete=1;
	}
	else if(Time%5==0&&!wor[i].Delete)
	{
		if(block[wor[i].x-1][wor[i].y]==0)wor[i].x--;
		else if(wor[i].node==1&&abs(wor[i].x-x)+abs(wor[i].y-y)<=4)
		{
			for(int ii=wor[i].x-3;ii<=wor[i].x+3;ii++)
			  for(int jj=wor[i].y-3;jj<=wor[i].y+3;jj++)
			  if(abs(ii-wor[i].x)+abs(jj-wor[i].y)<=3)block[ii][jj]=0;wor[i].Delete=1;
			Health-=pow(2,5-abs(wor[i].x-x)-abs(wor[i].y-y));
		}
		else if(wor[i].node==2&&abs(wor[i].x-x)+abs(wor[i].y-y)<=5)
		{
			Health-=rand()%3==0;
		}
		else if(abs(wor[i].x-x)+abs(wor[i].y-y)>64)wor[i].Delete=1;
		else if(abs(wor[i].y-y)==1&&abs(wor[i].x-x)<=1)Health-=(Time%3==0);
		else if(abs(wor[i].x-x)+abs(wor[i].y-y)<20)
		{
			Min=12;Minx=0,Miny=0;memset(vis,0,sizeof(vis)); Rap=0;
			AI(wor[i].x,wor[i].y,0,0,0);
			if(Minx!=0||Miny!=0)
			wor[i].x+=Minx,wor[i].y+=Miny;
			else wor[i].y+=(rand()%4==0)*(rand()%3-1);//cout<<Minx<<","<<Miny<<":"<<Rap<<"          "<<endl;
		}
	}
	
	for(int i=1;i<=6;i++)
	  for(int j=1;j<=10;j++)if(bag[i][j].num<=0)bag[i][j].thing=0,bag[i][j].num=0;else if(bag[i][j].nj==0)bag[i][j].nj=10;
	  for(int i=1;i<=abs(UPDOWN_SPEED);i++)
	if(block[x-1][y]==0||UPDOWN_SPEED==1)
	{
		if(UPDOWN_SPEED>0)x++;else x--;
		
	}
	if(FN==0)
	{
		if(block[x-1][y]!=0)
		{
			Health-=(-UPDOWN_SPEED-2>0)?pow(2,-UPDOWN_SPEED-2):0;
			UPDOWN_SPEED=0;
		}
		else UPDOWN_SPEED--;
	}
	else {
	if(DOWN('S'))x--;else if(DOWN('W'))x++;}
	//DIE=0;
}
void BodyClac()
{
	if(Health<=0)DIE=1;
	if(DIE==0)
	{
		if(block[x+1][y]!=0)Health-=(rand()%10==0);
		if(block[x][y]==0)block[x][y]=-3;
		if(block[x+1][y]==0)block[x+1][y]=-1;
	}
	else
	{
		if(block[x][y]==0)block[x][y]=-3;
		if(block[x+1][y]==0)block[x+1][y]=-2;
		DEAD();
	}
}
void Start()
{
	cout<<"  "<<endl;
	while(1)
	{
		BodyClac();
		Output();
		Input();
		Clac();
		Sleep(100);
	}
}
int main()
{
	srand(time(0));
	CreateWorld(2);
	Start();
}
