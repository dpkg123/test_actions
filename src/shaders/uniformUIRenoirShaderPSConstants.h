#ifndef _UNIFORM_UI_RENOIR_SHADER_PS_CONSTANTS_H
#define _UNIFORM_UI_RENOIR_SHADER_PS_CONSTANTS_H

#ifndef _UNIFORM_MACRO_H
#define _UNIFORM_MACRO_H

#ifdef MCPE_PLATFORM_NX
// Unfortunately this macro does not work on old Amazon platforms #define BEGIN_UNIFORM_BLOCK(x) uniform x {
#define END_UNIFORM_BLOCK };
#define UNIFORM 
#else
// Unfortunately this macro does not work on old Amazon platforms #define BEGIN_UNIFORM_BLOCK(x) 
#define END_UNIFORM_BLOCK
#define UNIFORM uniform 
#endif

#if __VERSION__ >= 420
#define LAYOUT_BINDING(x) layout(binding = x)
#else
#define LAYOUT_BINDING(x) 
#endif

#endif


#ifdef MCPE_PLATFORM_NX
#extension GL_ARB_enhanced_layouts : enable
layout(binding = 3) uniform UIRenoirShaderPSConstants {
#endif
// BEGIN_UNIFORM_BLOCK(UIRenoirShaderPSConstants) - unfortunately this macro does not work on old Amazon platforms so using above 3 lines instead
UNIFORM vec4 RENOIR_SHADER_PS_PROPS_0; // GradientStartColor
UNIFORM vec4 RENOIR_SHADER_PS_PROPS_1; // GradientMidColor
UNIFORM vec4 RENOIR_SHADER_PS_PROPS_2; // GradientEndColor
UNIFORM vec4 RENOIR_SHADER_PS_PROPS_3; // GradientYCoord
END_UNIFORM_BLOCK

#endif
