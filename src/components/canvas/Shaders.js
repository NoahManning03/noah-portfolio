export const particleVertex = /* glsl */ `
  attribute float aScale;
  uniform float uSize;
  uniform float uTime;
  uniform float uSpread;
  varying float vAlpha;

  void main() {
    vec3 pos = position * uSpread;
    pos.y += sin(uTime * 0.35 + position.x * 0.45) * 0.12;
    pos.x += cos(uTime * 0.28 + position.z * 0.4) * 0.08;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = aScale * uSize * (220.0 / -mvPosition.z);
    vAlpha = clamp(1.4 + mvPosition.z * 0.08, 0.15, 1.0);
  }
`;

export const particleFragment = /* glsl */ `
  uniform vec3 uColor;
  uniform vec3 uColorAlt;
  varying float vAlpha;

  void main() {
    vec2 uv = gl_PointCoord - vec2(0.5);
    float dist = length(uv);
    if (dist > 0.5) discard;

    float glow = smoothstep(0.5, 0.08, dist);
    vec3 color = mix(uColorAlt, uColor, glow);
    gl_FragColor = vec4(color, glow * vAlpha);
  }
`;

export const hologramVertex = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vPosition;

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const hologramFragment = /* glsl */ `
  uniform float uTime;
  uniform float uHover;
  uniform vec3 uColor;
  uniform vec3 uColorHover;
  varying vec3 vNormal;
  varying vec3 vPosition;

  void main() {
    float fresnel = pow(1.0 - abs(dot(normalize(vNormal), vec3(0.0, 0.0, 1.0))), 2.2);
    float scan = sin(vPosition.y * 18.0 + uTime * 2.4) * 0.5 + 0.5;
    vec3 color = mix(uColor, uColorHover, uHover);
    float alpha = 0.18 + fresnel * 0.65 + scan * 0.08;
    gl_FragColor = vec4(color * (0.45 + fresnel + scan * 0.2), alpha);
  }
`;
