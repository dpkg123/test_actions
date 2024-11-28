#if CPU == 386
#include "config_386.h"
#elif CPU == 486
#include "config_486.h"
#elif CPU == 586
#include "config_586.h"
#elif CPU == 686
#include <config_686.h>
#elif CPU == 68664
#include "config_686X64.h"
#else
#error "no cpu defined"
#endif

