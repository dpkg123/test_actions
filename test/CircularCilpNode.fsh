#ifdef GL_ES
precision mediump float;
#endif
 
varying vec4 v_fragmentColor;
varying vec2 v_texCoord;
 
uniform vec2 resolution;
uniform vec2 circleCenter;
uniform float radius;
 
bool check(vec2 texCoord)
{
	vec2 pos = vec2(texCoord.x*resolution.x, (1 - texCoord.y)*resolution.y);
	if(pow(pos.x - circleCenter.x, 2) + pow(pos.y - circleCenter.y, 2) <= pow(radius, 2))
	{
		return true;
	}else{
		return false;
	}
}
 
void main(void)
{
	gl_FragColor = v_fragmentColor * texture2D(CC_Texture0, v_texCoord);
	if(!check(v_texCoord))
	{
		gl_FragColor = vec4(0.f, 0.f, 0.f, 0.0f);
	}
}
