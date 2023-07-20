## Internal constants are mixed in lowercase and uppercase, remember not to use all uppercase

e.g. :

```
struct VertexInput {
@location(positionLocation) position: vec3<f32>,
 @location(colorLocation) color: vec4<f32>,
}
// Both positionLocation and colorLocation are filled with constants, then the defines are defined as
const defines={
positionLocation:0,
colorLocation:1
}
```

## Non-internal constants, all uppercase/all uppercase+underscore+number

e.g.:

```
#if USE_IBL
  var reflectedLightDiffuse=indirectDiffuse_Physical(geometry,material);
  var reflectedLightSpecular=indirectSpecular_Physical(geometry,material);
  color+=reflectedLightDiffuse.indirectDiffuse;
  color+=reflectedLightSpecular.indirectSpecular;
#endif
```

USE_IBL is defined for shader override macros

```
const defines={
USE_IBL:true
}
```

## Note

Macro definitions do not support expressions, and do not support cross operators ((USE_IBL &&HAS_UV)||(USE_INSTANCE||USENORMAL) is an error)
Only identical operators are supported, e.g.:

```
#if USE_IBL||HAS_UV||USE_INSTANCE
  var reflectedLightDiffuse=indirectDiffuse_Physical(geometry,material);
  var reflectedLightSpecular=indirectSpecular_Physical(geometry,material);
  color+=reflectedLightDiffuse.indirectDiffuse;
  color+=reflectedLightSpecular.indirectSpecular;
#endif
#if USE_IBL&&HAS_UV&&USE_INSTANCE
  var reflectedLightDiffuse=indirectDiffuse_Physical(geometry,material);
  var reflectedLightSpecular=indirectSpecular_Physical(geometry,material);
  color+=reflectedLightDiffuse.indirectDiffuse;
  color+=reflectedLightSpecular.indirectSpecular;
#endif
```
