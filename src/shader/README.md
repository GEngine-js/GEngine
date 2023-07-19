## 内部常量采用小写+大写混合，切记不可全大写

例如 :
struct VertexInput {
@location(positionLocation) position: vec3<f32>,  
 @location(colorLocation) color: vec4<f32>,
}
positionLocation 与 colorLocation 均为常量填充则 defines 定义为
const defines={
positionLocation:0,
colorLocation:1
}

## 非内部常量，全大写/全大写+下划线+数字

例如:
#if USE_IBL
var reflectedLightDiffuse=indirectDiffuse_Physical(geometry,material);
var reflectedLightSpecular=indirectSpecular_Physical(geometry,material);
color+=reflectedLightDiffuse.indirectDiffuse;
color+=reflectedLightSpecular.indirectSpecular;
#endif
USE_IBL 为着色器取舍宏定义
const defines={
USE_IBL:true
}

## Note

宏定义不支持表达式，不支持交叉运算符（(USE_IBL &&HAS_UV)||(USE_INSTANCE||USENORMAL) 这种方式为错误），仅支持相同运算符
