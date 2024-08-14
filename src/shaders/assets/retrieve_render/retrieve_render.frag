#if defined(USE_OES_TEXTURE)
#extension GL_OES_EGL_image_external : require
precision highp float;
uniform samplerExternalOES u_diffuseTexture;
#else
precision highp float;
uniform sampler2D u_diffuseTexture;
#endif

varying mediump vec2 v_textureCoord;

void main() {
#if defined(USE_TRANSPARENT)
    vec2 colorCoordinate = vec2(v_textureCoord.x / 2.0, v_textureCoord.y);
    vec4 textureColor = texture2D(u_diffuseTexture, colorCoordinate);
    vec2 textureAlphaCoordinate = vec2(v_textureCoord.x / 2.0 + 0.5, v_textureCoord.y);
    vec4 textureAlpha = texture2D(u_diffuseTexture, textureAlphaCoordinate);
    gl_FragColor = vec4(textureColor.rgb, textureAlpha.r);
    //gl_FragColor = vec4(textureColor.rgb, sqrt(textureAlpha.r));
#else
    gl_FragColor = texture2D(u_diffuseTexture, v_textureCoord);
#endif

}