import { useEffect, useRef } from "react"
import { Delaunay } from "d3-delaunay"

const NUM_POINTS = 100
const POINT_SPEED = 0.3

interface Point {
  x: number
  y: number
  dx: number
  dy: number
}

export default function VoronoiBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const mouseRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  const pointsRef = useRef<Point[]>(
    Array.from({ length: NUM_POINTS }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      dx: (Math.random() - 0.5) * POINT_SPEED,
      dy: (Math.random() - 0.5) * POINT_SPEED,
    }))
  )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    let animationId: number

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const update = () => {
      const width = canvas.width
      const height = canvas.height
      const points = pointsRef.current

      // Update positions
      // eslint-disable-next-line prefer-const
      for (let p of points) {
        p.x += p.dx
        p.y += p.dy

        // Hit the borders/edges
        if (p.x < 0 || p.x > width) p.dx *= -1
        if (p.y < 0 || p.y > height) p.dy *= -1
      }

      // Replace the first point by the mouse (for interactivity)
      points[0] = {
        ...points[0],
        x: mouseRef.current.x,
        y: mouseRef.current.y,
      }

      // Create Voronoi's diagram
      const delaunay = Delaunay.from(points.map(p => [p.x, p.y]))
      const voronoi = delaunay.voronoi([0, 0, width, height])

      // Draw
      ctx.fillStyle = "#0f0f1a"
      ctx.fillRect(0, 0, width, height)

      ctx.strokeStyle = "#00ffcc" // color "tech"
      ctx.lineWidth = 0.6

      for (let i = 0; i < points.length; i++) {
        const cell = voronoi.cellPolygon(i)
        if (!cell) continue
        ctx.beginPath()
        ctx.moveTo(cell[0][0], cell[0][1])
        for (let j = 1; j < cell.length; j++) {
          ctx.lineTo(cell[j][0], cell[j][1])
        }
        ctx.closePath()
        ctx.stroke()
      }

      animationId = requestAnimationFrame(update)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }

    window.addEventListener("resize", resize)
    window.addEventListener("mousemove", handleMouseMove)
    resize()
    update()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 w-full h-full"
    />
  )
}
