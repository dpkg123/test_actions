varying mediump vec2 v_textureCoord;
uniform sampler2D u_diffuseTexture;
void main() {
    if (v_textureCoord.x > 1.0 || v_textureCoord.y > 1.0 || v_textureCoord.x < 0.0 || v_textureCoord.y < 0.0){
        discard;
    }
    gl_FragColor = texture2D(u_diffuseTexture, v_textureCoord);
}