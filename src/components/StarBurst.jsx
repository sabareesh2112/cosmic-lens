import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uResolution;
  uniform float uSpeed;
  uniform float uDensity;
  uniform float uStarCount;
  uniform vec3 uColor;
  uniform float uCenterX;
  uniform float uCenterY;
  uniform float uStarSize;
  uniform float uBrightness;
  uniform float uOpacity;
  uniform float uFlowerIntensity;
  uniform float uTwinkleSpeed;
  uniform float uWobbleAmount;
  uniform float uInnerLayerIntensity;
  uniform float uOuterLayerIntensity;
  uniform float uFadeHeight;
  varying vec2 vUv;

  const float PI = 3.14159265359;

  vec2 hash22(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973));
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.xx + p3.yz) * p3.zy);
  }

  float stars(vec2 uv, float radialOffset, float amount, float intensity) {
    float t = uTime * uSpeed;
    float rad = atan(uv.y, uv.x);
    float r = log(length(uv) + radialOffset) * amount - t;
    vec2 g = vec2(rad / PI * 0.5 + 0.5, r);
    g *= vec2(uStarCount, 1.0);
    vec2 s = vec2(1.0, 1.0);
    vec2 id = floor(g / s + 0.5);
    vec2 o = sign(g - s * id);
    float min_d = 100.0;
    for (int i = 0; i < 2; ++i) {
        for (int j = 0; j < 2; ++j) {
            vec2 nid = id + o * vec2(float(i), float(j));
            vec2 nh = hash22(nid) * 100.0;
            vec2 n = g - s * nid;
            float t2 = t * uTwinkleSpeed;
            vec2 np = vec2(cos(nh.x + t2), sin(nh.y + t2)) * uWobbleAmount;
            vec2 diff = n - np;
            diff.x *= (200.0 / uStarCount);
            float dt = dot(diff, diff);
            if (dt < min_d) {
                min_d = dt;
            }
        }
    }
    float d = sqrt(min_d);
    return (uStarSize * 0.05) / d * intensity;
  }

  float curve_mask(vec2 uv) {
    float x = uv.x;
    float y = 0.05 * x * x + 0.05;
    return smoothstep(-0.1, 0.1, abs(uv.y) - y);
  }

  float flower(vec2 uv) {
    float fade_out = smoothstep(1.5, 0.0, length(uv));
    float flower = smoothstep(1.2, 0.0, abs(sin(atan(uv.y * 4.0, uv.x) * 3.0)) * 0.7);
    return flower * fade_out * uFlowerIntensity;
  }

  void main() {
    vec2 uv = (vUv * uResolution - 0.5 * uResolution) / uResolution.y;
    vec2 centeredUv = vUv * 2.0 - 1.0;
    centeredUv.x *= uResolution.x / uResolution.y;
    vec2 centerOffset = vec2((uCenterX - 0.5) * 2.0, (uCenterY - 0.5) * 2.0);
    centerOffset.x *= uResolution.x / uResolution.y;
    vec2 pos = centeredUv - centerOffset;
    pos.y += 1.0;

    float s = stars(pos, 1.0, 20.0 * uDensity, uInnerLayerIntensity) * 0.5;
    float l = stars(pos, 5.0, 30.0 * uDensity, uOuterLayerIntensity) * 0.5;
    float f = flower(pos);
    float m = curve_mask(pos);

    float brightness = s + l + f;
    brightness *= m;
    float gradient = smoothstep(uFadeHeight, 0.0, abs(pos.y));
    brightness *= gradient;
    brightness *= uBrightness;

    float alpha = clamp(brightness, 0.0, 1.0) * uOpacity;
    gl_FragColor = vec4(uColor, alpha);
  }
`;

export const StarBurst = ({
  speed = 2.1,
  density = 1.2,
  starCount = 190,
  color = '#ea9162',
  centerX = 0.5,
  centerY = 0.45,
  starSize = 0.3,
  brightness = 2,
  opacity = 1,
  flowerIntensity = 0.4,
  twinkleSpeed = 0.5,
  wobbleAmount = 1,
  innerLayerIntensity = 2.5,
  outerLayerIntensity = 1.5,
  fadeHeight = 2.8,
  className = ''
}) => {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const materialRef = useRef(null);
  const animFrameRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });

    renderer.setClearColor(0x000000, 0);
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';

    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(width, height) },
        uSpeed: { value: speed },
        uDensity: { value: density },
        uStarCount: { value: starCount },
        uColor: { value: new THREE.Color(color) },
        uCenterX: { value: centerX },
        uCenterY: { value: centerY },
        uStarSize: { value: starSize },
        uBrightness: { value: brightness },
        uOpacity: { value: opacity },
        uFlowerIntensity: { value: flowerIntensity },
        uTwinkleSpeed: { value: twinkleSpeed },
        uWobbleAmount: { value: wobbleAmount },
        uInnerLayerIntensity: { value: innerLayerIntensity },
        uOuterLayerIntensity: { value: outerLayerIntensity },
        uFadeHeight: { value: fadeHeight }
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      blending: THREE.NormalBlending,
      depthWrite: false
    });
    materialRef.current = material;

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const clock = new THREE.Clock();

    const render = () => {
      const elapsedTime = clock.getElapsedTime();
      material.uniforms.uTime.value = elapsedTime;
      renderer.render(scene, camera);
      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    const resizeObserver = new ResizeObserver(() => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      if (newWidth > 0 && newHeight > 0) {
        renderer.setSize(newWidth, newHeight);
        material.uniforms.uResolution.value.set(newWidth, newHeight);
      }
    });

    resizeObserver.observe(container);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      resizeObserver.disconnect();
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Update uniforms dynamically on prop changes
  useEffect(() => {
    if (!materialRef.current) return;
    const u = materialRef.current.uniforms;
    u.uSpeed.value = speed;
    u.uDensity.value = density;
    u.uStarCount.value = starCount;
    u.uColor.value.set(color);
    u.uCenterX.value = centerX;
    u.uCenterY.value = centerY;
    u.uStarSize.value = starSize;
    u.uBrightness.value = brightness;
    u.uOpacity.value = opacity;
    u.uFlowerIntensity.value = flowerIntensity;
    u.uTwinkleSpeed.value = twinkleSpeed;
    u.uWobbleAmount.value = wobbleAmount;
    u.uInnerLayerIntensity.value = innerLayerIntensity;
    u.uOuterLayerIntensity.value = outerLayerIntensity;
    u.uFadeHeight.value = fadeHeight;
  }, [
    speed,
    density,
    starCount,
    color,
    centerX,
    centerY,
    starSize,
    brightness,
    opacity,
    flowerIntensity,
    twinkleSpeed,
    wobbleAmount,
    innerLayerIntensity,
    outerLayerIntensity,
    fadeHeight
  ]);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full pointer-events-none select-none overflow-hidden ${className}`}
      style={{ position: 'absolute', inset: 0 }}
    />
  );
};

// Aliases matching user brief: <m ... /> or <StarBurst ... />
export const m = StarBurst;
export default StarBurst;
