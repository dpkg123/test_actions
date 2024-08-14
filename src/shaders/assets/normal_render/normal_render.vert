attribute mediump vec4 a_position;
attribute mediump vec4 a_texCoord;
varying mediump vec2 v_textureCoord;
uniform mat4 u_worldViewProjectionMatrix;

void main() {
    gl_Position = u_worldViewProjectionMatrix * a_position;
    v_textureCoord = a_texCoord.xy;
}