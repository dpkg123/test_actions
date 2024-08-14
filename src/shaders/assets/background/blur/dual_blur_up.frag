precision mediump float;

uniform sampler2D inputImageTexture;
uniform vec2 textureSize;
uniform float blurStrength;

varying vec2 textureCoordinate;

void main()
{
    vec2 uv = textureCoordinate / 2.0;
    vec2 halfpixel = 0.5 / (textureSize.xy * 2.0);
    float offset = 10.0 * blurStrength;

    vec4 sum = texture2D(inputImageTexture, uv +vec2(-halfpixel.x * 2.0, 0.0) * offset);
    sum += texture2D(inputImageTexture, uv + vec2(-halfpixel.x, halfpixel.y) * offset) * 2.0;
    sum += texture2D(inputImageTexture, uv + vec2(0.0, halfpixel.y * 2.0) * offset);
    sum += texture2D(inputImageTexture, uv + vec2(halfpixel.x, halfpixel.y) * offset) * 2.0;
    sum += texture2D(inputImageTexture, uv + vec2(halfpixel.x * 2.0, 0.0) * offset);
    sum += texture2D(inputImageTexture, uv + vec2(halfpixel.x, -halfpixel.y) * offset) * 2.0;
    sum += texture2D(inputImageTexture, uv + vec2(0.0, -halfpixel.y * 2.0) * offset);
    sum += texture2D(inputImageTexture, uv + vec2(-halfpixel.x, -halfpixel.y) * offset) * 2.0;

    gl_FragColor = sum / 12.0;

}
