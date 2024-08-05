#version 400

in vec2 TexCoord;

uniform sampler2D SpriteTex;

layout( location = 0 ) out vec4 FragColor;

struct light {
        vec4 color;
        vec3 pos;
    };
const light lgt = light(vec4(1.0), vec3(0.0)); 

vec4 getPosition(){ 
    vec4 v4 = vec4(0.,0.,0.,1.);
    return v4;
}

void doubleSize(inout float size){
    size= size*2.0  ;
}

void main()
{
	FragColor = texture(SpriteTex, TexCoord);
	vec4 v=vec4(1.0,2.0,3.0,1.0);
	float x = v.x; //1.0
	float x1 = v.r; //1.0
	float x2 = v[0]; //1.0

	vec3 xyz = v.xyz; //vec3(1.0,2.0,3.0)
	vec3 xyz1 = vec(v[0],v[1],v[2]); //vec3(1.0,2.0,3.0)
	vec3 rgb = v.rgb; //vec3(1.0,2.0,3.0)

	vec2 xyzw = v.xyzw; //vec4(1.0,2.0,3.0,1.0);
	vec2 rgba = v.rgba; //vec4(1.0,2.0,3.0,1.0);

	float psize= 10.0;
	doubleSize(psize);
	gl_Position = getPosition();
	gl_PointSize = psize;
}


vec4 texture2D(sampler2D sampler, vec2 coord);
vec4 texture2DProj(sampler2D sampler, vec3 coord);
vec4 texture2DProj(sampler2D sampler, vec4 coord);
vec4 textureCube(samplerCube sampler, vec3 coord);
