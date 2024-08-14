precision mediump float;

uniform sampler2D inputImageTexture;
uniform vec2 textureSize;
uniform float blurStrength;

varying vec2 textureCoordinate;

void main()
{
    const int  radius = 8;
    float half_gaussian_weight[9];
    half_gaussian_weight[0]= 0.2;
    half_gaussian_weight[1]= 0.19;
    half_gaussian_weight[2]= 0.17;
    half_gaussian_weight[3]= 0.15;
    half_gaussian_weight[4]= 0.13;
    half_gaussian_weight[5]= 0.11;
    half_gaussian_weight[6]= 0.08;
    half_gaussian_weight[7]= 0.05;
    half_gaussian_weight[8]= 0.02;

    vec4 sum            = vec4(0.0);
    vec4 result         = vec4(0.0);
    vec2 unit_uv        = vec2(blurStrength, blurStrength * textureSize.x / textureSize.y) * 0.0055;
    vec4 centerPixel    = texture2D(inputImageTexture, textureCoordinate)*half_gaussian_weight[0];
    float  sum_weight   = half_gaussian_weight[0];
    for (int i=1;i<=radius;i++)
    {
        vec2 curBottomCoordinate    = textureCoordinate+vec2(0.0, float(i))*unit_uv;
        vec2 curTopCoordinate       = textureCoordinate+vec2(0.0, float(-i))*unit_uv;
        sum+=texture2D(inputImageTexture, curBottomCoordinate)*half_gaussian_weight[i];
        sum+=texture2D(inputImageTexture, curTopCoordinate)*half_gaussian_weight[i];
        sum_weight+=half_gaussian_weight[i]*2.0;
    }
    result = (sum+centerPixel)/sum_weight;
    result.a = texture2D(inputImageTexture, textureCoordinate).a;
    gl_FragColor = result;

}
