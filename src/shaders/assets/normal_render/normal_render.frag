precision mediump float;
varying vec2 v_textureCoord;
uniform sampler2D u_diffuseTexture;
uniform float alpha;
void main() {
    if (v_textureCoord.x > 1.0 || v_textureCoord.y > 1.0 || v_textureCoord.x < 0.0 || v_textureCoord.y < 0.0){
        discard;
    }
    vec4 color = texture2D(u_diffuseTexture, v_textureCoord);
    color.a = color.a * alpha;
    gl_FragColor = color;
}
