/* eslint-disable prefer-const */
import React, { useRef, useEffect } from "react";
import p5 from "p5";

const UlamSpiralBackground: React.FC = () => {
  const sketchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sketch = (p: p5) => {
      let step = 20; // tamanho do "pixel"
      let x = 0;
      let y = 0;
      let num = 1;
    //   let layer = 1;
      let dir = 0;
      let stepsInDir = 1;
      let stepCount = 0;
      let toggle = false;
      let points: { x: number; y: number; prime: boolean }[] = [];

      let zoom = 1;
      let angle = 0;

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight).parent(sketchRef.current!);
        p.background(10);
        p.noStroke();
      };

      const isPrime = (n: number) => {
        if (n < 2) return false;
        for (let i = 2; i * i <= n; i++) {
          if (n % i === 0) return false;
        }
        return true;
      };

      p.draw = () => {
        p.background(10, 10, 30); // azul escuro

        p.push();
        p.translate(p.width / 2, p.height / 2);
        p.scale(zoom);
        // p.rotate(angle);

        // Desenha todos os pontos
        for (let pt of points) {
          if (pt.prime) {
            p.fill(0, 255, 180); // verde água para primos
            p.ellipse(pt.x * step, pt.y * step, step * 0.6);
          } else {
            p.fill(50, 50, 80, 80); // cor fraca para não-primos
            p.ellipse(pt.x * step, pt.y * step, step * 0.4);
          }
        }

        p.pop();

        // Atualiza posição da espiral
        if (points.length < 2000) { // controla até quantos pontos serão desenhados
          points.push({ x, y, prime: isPrime(num) });
          num++;
          moveSpiral();
        }

        // Anima rotação lenta
        angle += 0.001;
      };

      const moveSpiral = () => {
        if (dir === 0) x += 1; // direita
        else if (dir === 1) y -= 1; // cima
        else if (dir === 2) x -= 1; // esquerda
        else if (dir === 3) y += 1; // baixo

        stepCount++;
        if (stepCount === stepsInDir) {
          dir = (dir + 1) % 4;
          stepCount = 0;
          if (toggle) {
            stepsInDir++;
          }
          toggle = !toggle;
        }
      };

      // Zoom com scroll
      p.mouseWheel = (event: { delta: number}) => {
        zoom += event.delta * -0.001;
        zoom = p.constrain(zoom, 0.3, 3);
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    const p5Instance = new p5(sketch);
    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div ref={sketchRef} className="fixed inset-0 -z-10" />;
};

export default UlamSpiralBackground;
