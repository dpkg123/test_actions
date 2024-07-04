#!/bin/python3

# 导入随机模块
import random

# 定义手机型号的字典
phones = {'P': 20, # 小米14 Pro
          'M': 10, # 小米14
          'Q': 5,  # 小米13 Pro
          'U': 5}  # 小米13 Ultra

# 定义展示区域的二维数组
area = [['' for _ in range(10)] for _ in range(4)]

# 定义检查条件的函数
def check(area):
    # 检查小米13 Ultra是否挨在一起
    for i in range(4):
        for j in range(9):
            if area[i][j] == 'U' and area[i][j+1] == 'U':
                return False
    # 检查小米14 Pro的两侧是否挨着小米123和小米14
    for i in range(4):
        for j in range(1, 9):
            if area[i][j] == 'P' and (area[i][j-1] in 'MQ' or area[i][j+1] in 'MQ'):
                return False
    # 检查小米14是否放在最两侧
    for i in range(4):
        if area[i][0] == 'M' or area[i][9] == 'M':
            return False
    # 如果都通过，返回True
    return True

# 定义存储结果的集合
result = set()

# 定义循环次数，越大越准确，但也越慢
loop = 2147483648

# 开始循环
for _ in range(loop):
    # 复制一份手机字典，用来记录剩余的手机数量
    remain = phones.copy()
    # 复制一份展示区域，用来记录当前的填充方案
    current = [row[:] for row in area]
    # 遍历展示区域的每个位置
    for i in range(4):
        for j in range(10):
            # 从剩余的手机中随机选择一个型号
            choice = random.choice(list(remain.keys()))
            # 如果该型号的手机还有剩余，就放入当前位置
            if remain[choice] > 0:
                current[i][j] = choice
                # 更新剩余的手机数量
                remain[choice] -= 1
            # 否则，跳出循环，结束当前的填充方案
            else:
                break
    # 检查当前的填充方案是否满足条件
    if check(current):
        # 如果满足，就把当前的方案转换成字符串，并加入到结果集合中
        result.add(''.join([''.join(row) for row in current]))

# 输出结果集合的大小，即满足条件的陈列模式的数量
print(len(result))
