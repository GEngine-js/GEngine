#if HAS_SKIN
    modelMatrix = getSkinMatrix(input.joint0, input.weight0);
    vNormalView = normalize((materialUniform.normalMatrix * modelMatrix * vec4 <f32> (input.normal, 0.0)).xyz);
#endif
