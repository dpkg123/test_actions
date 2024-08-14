attribute mediump vec4 a_position;
attribute mediump vec4 a_texCoord;
varying mediump vec2 v_textureCoord;
uniform mat4 u_uvMatrix;

void main() {
    gl_Position =  a_position;
    v_textureCoord = (u_uvMatrix * a_texCoord).xy;
}