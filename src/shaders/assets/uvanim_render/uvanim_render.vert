attribute mediump vec4 a_position;
attribute mediump vec4 a_texCoord;
varying mediump vec2 v_textureCoord;
uniform vec3 u_stickerInfo; //行数，列数，总的帧数
uniform float u_frameIndex;//时间index

void main() {
    gl_Position = a_position;
    float col = u_stickerInfo.x;
    float row = u_stickerInfo.y;
    if (col >= 1.0 && row >= 1.0){
        float index = mod(u_frameIndex, u_stickerInfo.z);
        float colIndex = mod(index, col);
        index = mod(u_frameIndex, u_stickerInfo.z);
        float rowIndex = floor(index / col);
        v_textureCoord.x = (a_texCoord.x + colIndex) / col;
        v_textureCoord.y = (a_texCoord.y + row - rowIndex - 1.0) / row;
    }
    //v_textureCoord = a_texCoord.xy;
}