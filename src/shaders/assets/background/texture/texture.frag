precision mediump float;
varying vec2 v_textureCoord;
uniform sampler2D u_diffuseTexture;

void main() {
   gl_FragColor = texture2D(u_diffuseTexture, v_textureCoord);
}
