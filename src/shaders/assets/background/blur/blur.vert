precision mediump float;

attribute vec4 a_position;
attribute mediump vec4 a_texCoord;
uniform mediump mat4 u_uvMatrix;

varying vec2 textureCoordinate;

void main() {
    gl_Position = a_position;
    textureCoordinate = (u_uvMatrix * a_texCoord).xy;
}
