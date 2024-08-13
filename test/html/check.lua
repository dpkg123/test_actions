import("core.base.task")
import("core.base.option")

local params = {}

if option.get("quiet") then table.insert(params, "-q") end
if option.get("yes") then table.insert(params, "-y") end
if option.get("verbose") then table.insert(params, "-v") end
if option.get("diagnosis") then table.insert(params, "-D") end

