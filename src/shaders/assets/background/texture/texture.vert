attribute mediump vec4 a_position;
uniform mediump mat4 u_uvMatrix;
attribute mediump vec4 a_texCoord;
varying mediump vec2 v_textureCoord;

 void main() {
    gl_Position = a_position;
    v_textureCoord = (u_uvMatrix * a_texCoord).xy;
}