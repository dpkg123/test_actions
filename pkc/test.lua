function mySecondLuaFunction()
    return "string from my second function"
end

-- Call function returning a value.
a=mySecondLuaFunction("string")
print(a)

for key,value in pairs({1,2,3,4}) do print(key, value) end

b=0
while true do
    b=a+1
    if b==10 then
        break
    end
end

print(b)

function mySecondLuaFunction()
    return "string from my second function"
end

-- Call function returning a value.
c=mySecondLuaFunction("string")
print(c)

function myFirstLuaFunctionWithMultipleReturnValues(a,b,c)
    return ab,bb,cb,"My first lua function with multiple return values", 1, true
end

aa,ba,ca,da,ea,fa = myFirstLuaFunctionWithMultipleReturnValues(1,2,"three")
print(aa,ba,ca,da,ea,fa)

function printf(fmt, ...)
    io.write(string.format(fmt, ...))
end

printf("Hello %s from %s on %s\n",
       os.getenv"USER" or "there", _VERSION, os.date())


print(math.sqrt(9), math.pi)

print(string.upper("lower"),string.rep("a",5),string.find("abcde", "cd"))

b="global"

-- To make local variables you must put the keyword 'local' in front.
function myfunc()
    local bd=" local variable"
    ad="global variable"
    print(ad,bd)
end

myfunc()
print(ad,bd)
