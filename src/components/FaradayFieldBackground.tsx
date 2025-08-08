/* eslint-disable prefer-const */

import React, { useRef, useEffect } from "react";
import p5 from "p5";

const FaradayFieldBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sketch = (p: p5) => {
      let particles: Particle[] = [];
      let cols: number, rows: number;
      let scale = 20;
      let zoff = 0;
      let flowfield: p5.Vector[] = [];

      class Particle {
        pos: p5.Vector;
        vel: p5.Vector;
        acc: p5.Vector;
        prevPos: p5.Vector;
        constructor() {
          this.pos = p.createVector(p.random(p.width), p.random(p.height));
          this.vel = p.createVector(0, 0);
          this.acc = p.createVector(0, 0);
          this.prevPos = this.pos.copy();
        }
        update() {
          this.vel.add(this.acc);
          this.vel.limit(2);
          this.pos.add(this.vel);
          this.acc.mult(0);
        }
        follow(vectors: p5.Vector[]) {
          const x = Math.floor(this.pos.x / scale);
          const y = Math.floor(this.pos.y / scale);
          const index = x + y * cols;
          const force = vectors[index];
          this.applyForce(force);
        }
        applyForce(force: p5.Vector) {
          this.acc.add(force);
        }
        show() {
          p.stroke(0, 255, 200, 50);
          p.strokeWeight(1);
          p.line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
          this.updatePrev();
        }
        updatePrev() {
          this.prevPos.set(this.pos);
        }
        edges() {
          if (this.pos.x > p.width) {
            this.pos.x = 0;
            this.updatePrev();
          }
          if (this.pos.x < 0) {
            this.pos.x = p.width;
            this.updatePrev();
          }
          if (this.pos.y > p.height) {
            this.pos.y = 0;
            this.updatePrev();
          }
          if (this.pos.y < 0) {
            this.pos.y = p.height;
            this.updatePrev();
          }
        }
      }

      p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight);
        cols = Math.floor(p.width / scale);
        rows = Math.floor(p.height / scale);
        flowfield = new Array(cols * rows);
        for (let i = 0; i < 300; i++) {
          particles[i] = new Particle();
        }
        p.background(10, 10, 30);
      };

      p.draw = () => {
        let yoff = 0;
        for (let y = 0; y < rows; y++) {
          let xoff = 0;
          for (let x = 0; x < cols; x++) {
            const index = x + y * cols;
            const angle = p.noise(xoff, yoff, zoff) * p.TWO_PI * 2;
            const v = p5.Vector.fromAngle(angle);
            v.setMag(0.1);
            flowfield[index] = v;
            xoff += 0.1;
          }
          yoff += 0.1;
        }
        zoff += 0.003;

        for (let i = 0; i < particles.length; i++) {
          particles[i].follow(flowfield);
          particles[i].update();
          particles[i].edges();
          particles[i].show();
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(window.innerWidth, window.innerHeight);
        cols = Math.floor(p.width / scale);
        rows = Math.floor(p.height / scale);
        flowfield = new Array(cols * rows);
      };
    };

    const p5Instance = new p5(sketch, containerRef.current!);
    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-10"></div>;
};

export default FaradayFieldBackground;
