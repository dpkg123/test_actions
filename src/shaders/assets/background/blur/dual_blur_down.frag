precision mediump float;

uniform sampler2D inputImageTexture;
uniform vec2 textureSize;
uniform float blurStrength;

varying vec2 textureCoordinate;

void main()
{
    vec2 uv = textureCoordinate * 2.0 ;
    vec2 halfpixel = 0.5 / (textureSize.xy / 2.0);
    float offset = 10.0 * blurStrength;

    vec4 sum = texture2D(inputImageTexture, uv) * 4.0;
    sum += texture2D(inputImageTexture, uv - halfpixel.xy * offset);
    sum += texture2D(inputImageTexture, uv + halfpixel.xy * offset);
    sum += texture2D(inputImageTexture, uv + vec2(halfpixel.x, -halfpixel.y) * offset);
    sum += texture2D(inputImageTexture, uv - vec2(halfpixel.x, -halfpixel.y) * offset);

    gl_FragColor = sum / 8.0;
}
