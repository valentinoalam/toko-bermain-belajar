"use client"

import type React from "react"

import { useEffect, useRef, useState, useCallback } from "react"
import { Card, Button } from "@/components/ui"

const materials = [
  { key: "sand", name: "Sand", color: "#F4E4BC" },
  { key: "earth", name: "Earth", color: "#8B4513" },
  { key: "clay", name: "Clay", color: "#8B7355" },
  { key: "mud", name: "Mud", color: "#654321" },
  { key: "green", name: "Green", color: "#32CD32" },
  { key: "red", name: "Red", color: "#FF4500" },
  { key: "blue", name: "Blue", color: "#1E90FF" },
  { key: "yellow", name: "Yellow", color: "#FFD700" },
  { key: "purple", name: "Purple", color: "#9932CC" },
  { key: "pink", name: "Pink", color: "#FF69B4" },
  { key: "orange", name: "Orange", color: "#FF8C00" },
  { key: "slime", name: "Slime", color: "#00CED1" },
]

const objects = [
  { key: "stone", name: "Stone", color: "#696969" },
  { key: "tree", name: "Tree", color: "#228B22" },
  { key: "animal", name: "Animal", color: "#FF6347" },
]

export default function IslandBuilder() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [currentMaterial, setCurrentMaterial] = useState("sand")
  const [currentObject, setCurrentObject] = useState("none")
  const [isDrawing, setIsDrawing] = useState(false)
  const [cameraX, setCameraX] = useState(0)
  const [cameraY, setCameraY] = useState(0)
  const [savedIslands, setSavedIslands] = useState<{
    [key: string]: { materials: string[][]; objects: string[][]; timestamp: number }
  }>({})
  const [showSaveDialog, setShowSaveDialog] = useState(false)
  const [showLoadDialog, setShowLoadDialog] = useState(false)
  const [islandName, setIslandName] = useState("")
  const [islandStats, setIslandStats] = useState({
    totalTiles: 0,
    landTiles: 0,
    waterTiles: 0,
    materialCounts: {} as { [key: string]: number },
    objectCounts: {} as { [key: string]: number },
    islandCoverage: 0,
  })

  const [showGeneratorDialog, setShowGeneratorDialog] = useState(false)
  const [generatorSettings, setGeneratorSettings] = useState({
    type: "circular",
    size: "medium",
    density: 0.7,
    materials: ["sand", "earth", "green"],
    addObjects: true,
    objectDensity: 0.1,
  })

  const gridSize = 16
  const mapWidth = 50
  const mapHeight = 40
  const canvasWidth = 800
  const canvasHeight = 600

  // Initialize maps
  const materialMapRef = useRef<string[][]>([])
  const objectMapRef = useRef<string[][]>([])

  const calculateIslandStats = useCallback(() => {
    const materialCounts: { [key: string]: number } = {}
    const objectCounts: { [key: string]: number } = {}
    let landTiles = 0
    let waterTiles = 0

    // Initialize material counts
    materials.forEach((mat) => {
      materialCounts[mat.key] = 0
    })
    materialCounts["water"] = 0

    // Initialize object counts
    objects.forEach((obj) => {
      objectCounts[obj.key] = 0
    })

    // Count materials and objects
    for (let y = 0; y < mapHeight; y++) {
      for (let x = 0; x < mapWidth; x++) {
        const material = materialMapRef.current[y][x]
        const object = objectMapRef.current[y][x]

        // Count materials
        materialCounts[material] = (materialCounts[material] || 0) + 1

        if (material === "water") {
          waterTiles++
        } else {
          landTiles++
        }

        // Count objects
        if (object !== "none") {
          objectCounts[object] = (objectCounts[object] || 0) + 1
        }
      }
    }

    const totalTiles = mapWidth * mapHeight
    const islandCoverage = Math.round((landTiles / totalTiles) * 100)

    setIslandStats({
      totalTiles,
      landTiles,
      waterTiles,
      materialCounts,
      objectCounts,
      islandCoverage,
    })
  }, [mapHeight, mapWidth])

  // Load saved islands from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("islandBuilder_saves")
    if (saved) {
      try {
        setSavedIslands(JSON.parse(saved))
      } catch (error) {
        console.error("Failed to load saved islands:", error)
      }
    }
  }, [])

  // Initialize the maps
  useEffect(() => {
    for (let y = 0; y < mapHeight; y++) {
      materialMapRef.current[y] = []
      objectMapRef.current[y] = []
      for (let x = 0; x < mapWidth; x++) {
        materialMapRef.current[y][x] = "water"
        objectMapRef.current[y][x] = "none"
      }
    }
    // Calculate initial stats
    calculateIslandStats()
  }, [calculateIslandStats])

  const getMaterialColor = (material: string): string => {
    const mat = materials.find((m) => m.key === material)
    return mat ? mat.color : "#4169E1" // Default water color
  }

  const getObjectColor = (object: string): string => {
    const obj = objects.find((o) => o.key === object)
    return obj ? obj.color : "#000000"
  }

  const generateNoise = (x: number, y: number, scale = 0.1): number => {
    // Simple pseudo-random noise function
    const seed = Math.sin(x * scale) * Math.cos(y * scale) * 1000
    return seed - Math.floor(seed)
  }

  const generateCircularIsland = () => {
    const centerX = mapWidth / 2
    const centerY = mapHeight / 2
    const maxRadius = generatorSettings.size === "small" ? 8 : generatorSettings.size === "medium" ? 15 : 22

    for (let y = 0; y < mapHeight; y++) {
      for (let x = 0; x < mapWidth; x++) {
        const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2)
        const noise = generateNoise(x, y, 0.2) * 3
        const threshold = maxRadius + noise

        if (distance < threshold) {
          // Create layered terrain from center outward
          if (distance < threshold * 0.3) {
            materialMapRef.current[y][x] =
              generatorSettings.materials[Math.floor(Math.random() * generatorSettings.materials.length)]
          } else if (distance < threshold * 0.7) {
            materialMapRef.current[y][x] = Math.random() < 0.7 ? "earth" : "green"
          } else {
            materialMapRef.current[y][x] = "sand"
          }
        } else if (distance < threshold + 2) {
          // Shallow water/slime around edges
          materialMapRef.current[y][x] = Math.random() < 0.3 ? "slime" : "water"
        } else {
          materialMapRef.current[y][x] = "water"
        }
      }
    }
  }

  const generateArchipelago = () => {
    // Clear to water first
    for (let y = 0; y < mapHeight; y++) {
      for (let x = 0; x < mapWidth; x++) {
        materialMapRef.current[y][x] = "water"
      }
    }

    const numIslands = generatorSettings.size === "small" ? 3 : generatorSettings.size === "medium" ? 5 : 8

    for (let i = 0; i < numIslands; i++) {
      const centerX = Math.random() * (mapWidth - 10) + 5
      const centerY = Math.random() * (mapHeight - 10) + 5
      const radius = Math.random() * 6 + 3

      for (let y = 0; y < mapHeight; y++) {
        for (let x = 0; x < mapWidth; x++) {
          const distance = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2)
          const noise = generateNoise(x, y, 0.3) * 2

          if (distance < radius + noise) {
            if (distance < radius * 0.5) {
              materialMapRef.current[y][x] =
                generatorSettings.materials[Math.floor(Math.random() * generatorSettings.materials.length)]
            } else {
              materialMapRef.current[y][x] = Math.random() < 0.6 ? "sand" : "earth"
            }
          }
        }
      }
    }
  }

  const generateContinent = () => {
    const startX = Math.floor(mapWidth * 0.2)
    const endX = Math.floor(mapWidth * 0.8)
    const startY = Math.floor(mapHeight * 0.2)
    const endY = Math.floor(mapHeight * 0.8)

    for (let y = 0; y < mapHeight; y++) {
      for (let x = 0; x < mapWidth; x++) {
        const noise1 = generateNoise(x, y, 0.1)
        const noise2 = generateNoise(x, y, 0.05)
        const combinedNoise = (noise1 + noise2) / 2

        if (x >= startX && x <= endX && y >= startY && y <= endY) {
          if (combinedNoise > 0.3) {
            // Interior land
            if (combinedNoise > 0.7) {
              materialMapRef.current[y][x] =
                generatorSettings.materials[Math.floor(Math.random() * generatorSettings.materials.length)]
            } else if (combinedNoise > 0.5) {
              materialMapRef.current[y][x] = "earth"
            } else {
              materialMapRef.current[y][x] = "sand"
            }
          } else {
            materialMapRef.current[y][x] = "water"
          }
        } else {
          // Ocean around continent
          materialMapRef.current[y][x] = Math.random() < 0.1 ? "slime" : "water"
        }
      }
    }
  }

  const generateRandomIsland = () => {
    for (let y = 0; y < mapHeight; y++) {
      for (let x = 0; x < mapWidth; x++) {
        const noise = generateNoise(x, y, 0.15)
        const density = generatorSettings.density

        if (noise > 1 - density) {
          materialMapRef.current[y][x] =
            generatorSettings.materials[Math.floor(Math.random() * generatorSettings.materials.length)]
        } else if (noise > 1 - density - 0.1) {
          materialMapRef.current[y][x] = "sand"
        } else {
          materialMapRef.current[y][x] = Math.random() < 0.1 ? "slime" : "water"
        }
      }
    }
  }

  const generateObjects = () => {
    if (!generatorSettings.addObjects) return

    const objectTypes = ["stone", "tree", "animal"]

    for (let y = 0; y < mapHeight; y++) {
      for (let x = 0; x < mapWidth; x++) {
        // Only place objects on land
        if (materialMapRef.current[y][x] !== "water" && materialMapRef.current[y][x] !== "slime") {
          if (Math.random() < generatorSettings.objectDensity) {
            const objectType = objectTypes[Math.floor(Math.random() * objectTypes.length)]

            // Place trees more likely on green areas, stones on earth/clay, animals anywhere
            if (materialMapRef.current[y][x] === "green" && Math.random() < 0.7) {
              objectMapRef.current[y][x] = "tree"
            } else if (
              (materialMapRef.current[y][x] === "earth" || materialMapRef.current[y][x] === "clay") &&
              Math.random() < 0.5
            ) {
              objectMapRef.current[y][x] = "stone"
            } else {
              objectMapRef.current[y][x] = objectType
            }
          }
        }
      }
    }
  }

  const generateTerrain = () => {
    // Clear objects first
    for (let y = 0; y < mapHeight; y++) {
      for (let x = 0; x < mapWidth; x++) {
        objectMapRef.current[y][x] = "none"
      }
    }

    // Generate terrain based on selected type
    switch (generatorSettings.type) {
      case "circular":
        generateCircularIsland()
        break
      case "archipelago":
        generateArchipelago()
        break
      case "continent":
        generateContinent()
        break
      case "random":
        generateRandomIsland()
        break
    }

    // Add objects if enabled
    generateObjects()

    // Update display
    renderCanvas()
    calculateIslandStats()
    setShowGeneratorDialog(false)
  }

  const renderCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.fillStyle = "#87CEEB" // Sky blue background
    ctx.fillRect(0, 0, canvasWidth, canvasHeight)

    // Calculate visible area
    const startX = Math.floor(cameraX / gridSize)
    const endX = Math.min(startX + Math.ceil(canvasWidth / gridSize) + 1, mapWidth)
    const startY = Math.floor(cameraY / gridSize)
    const endY = Math.min(startY + Math.ceil(canvasHeight / gridSize) + 1, mapHeight)

    // Render materials
    for (let y = startY; y < endY; y++) {
      for (let x = startX; x < endX; x++) {
        if (y >= 0 && y < mapHeight && x >= 0 && x < mapWidth) {
          const material = materialMapRef.current[y][x]
          const screenX = x * gridSize - cameraX
          const screenY = y * gridSize - cameraY

          // Skip if outside visible area
          if (screenX < -gridSize || screenX > canvasWidth || screenY < -gridSize || screenY > canvasHeight) {
            continue
          }

          // Draw material
          ctx.fillStyle = getMaterialColor(material)
          if (material === "slime") {
            ctx.globalAlpha = 0.8
          } else {
            ctx.globalAlpha = 1.0
          }
          ctx.fillRect(screenX, screenY, gridSize, gridSize)

          // Add texture variation for playdough materials
          if (material !== "water" && material !== "slime") {
            ctx.globalAlpha = 0.3
            ctx.fillStyle = getMaterialColor(material)
            ctx.beginPath()
            ctx.arc(
              screenX + Math.sin(x * y) * gridSize * 0.3 + gridSize * 0.5,
              screenY + Math.cos(x * y) * gridSize * 0.3 + gridSize * 0.5,
              2,
              0,
              Math.PI * 2,
            )
            ctx.fill()
          }

          ctx.globalAlpha = 1.0

          // Draw grid lines
          ctx.strokeStyle = "rgba(0,0,0,0.1)"
          ctx.lineWidth = 1
          ctx.strokeRect(screenX, screenY, gridSize, gridSize)

          // Draw objects
          const object = objectMapRef.current[y][x]
          if (object !== "none") {
            ctx.fillStyle = getObjectColor(object)

            if (object === "stone") {
              ctx.beginPath()
              ctx.arc(screenX + gridSize / 2, screenY + gridSize / 2, gridSize / 3, 0, Math.PI * 2)
              ctx.fill()
            } else if (object === "tree") {
              // Draw trunk
              ctx.fillStyle = "#8B4513"
              ctx.fillRect(screenX + gridSize / 2 - 2, screenY + gridSize / 2, 4, gridSize / 2)
              // Draw leaves
              ctx.fillStyle = "#228B22"
              ctx.beginPath()
              ctx.arc(screenX + gridSize / 2, screenY + gridSize / 3, gridSize / 3, 0, Math.PI * 2)
              ctx.fill()
            } else if (object === "animal") {
              ctx.beginPath()
              ctx.arc(screenX + gridSize / 2, screenY + gridSize / 2, gridSize / 4, 0, Math.PI * 2)
              ctx.fill()
            }
          }
        }
      }
    }
  }, [cameraX, cameraY])

  const getGridPosition = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current
    if (!canvas) return null

    const rect = canvas.getBoundingClientRect()
    const x = clientX - rect.left
    const y = clientY - rect.top

    const worldX = x + cameraX
    const worldY = y + cameraY

    const gridX = Math.floor(worldX / gridSize)
    const gridY = Math.floor(worldY / gridSize)

    return { gridX, gridY }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDrawing(true)
    handleDraw(e)
  }

  const handleMouseUp = () => {
    setIsDrawing(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDrawing) {
      handleDraw(e)
    }
  }

  const handleDraw = (e: React.MouseEvent) => {
    const pos = getGridPosition(e.clientX, e.clientY)
    if (!pos) return

    const { gridX, gridY } = pos

    if (gridX >= 0 && gridX < mapWidth && gridY >= 0 && gridY < mapHeight) {
      if (currentObject !== "none") {
        // Place or remove object
        objectMapRef.current[gridY][gridX] = currentObject
      } else {
        // Paint material
        materialMapRef.current[gridY][gridX] = currentMaterial
      }
      renderCanvas()
      calculateIslandStats()
    }
  }

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    const speed = 20
    switch (e.key) {
      case "ArrowLeft":
        setCameraX((prev) => Math.max(0, prev - speed))
        break
      case "ArrowRight":
        setCameraX((prev) => Math.min(mapWidth * gridSize - canvasWidth, prev + speed))
        break
      case "ArrowUp":
        setCameraY((prev) => Math.max(0, prev - speed))
        break
      case "ArrowDown":
        setCameraY((prev) => Math.min(mapHeight * gridSize - canvasHeight, prev + speed))
        break
    }
  }, [])

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  useEffect(() => {
    renderCanvas()
  }, [renderCanvas])

  const selectMaterial = (material: string) => {
    setCurrentMaterial(material)
    setCurrentObject("none")
  }

  const selectObject = (object: string) => {
    setCurrentObject(object)
  }

  const saveIsland = (name: string) => {
    if (!name.trim()) return

    const islandData = {
      materials: materialMapRef.current.map((row) => [...row]),
      objects: objectMapRef.current.map((row) => [...row]),
      timestamp: Date.now(),
    }

    const saved = { ...savedIslands, [name]: islandData }
    setSavedIslands(saved)
    localStorage.setItem("islandBuilder_saves", JSON.stringify(saved))
    setShowSaveDialog(false)
    setIslandName("")
  }

  const loadIsland = (name: string) => {
    const islandData = savedIslands[name]
    if (!islandData) return

    // Deep copy the loaded data
    materialMapRef.current = islandData.materials.map((row) => [...row])
    objectMapRef.current = islandData.objects.map((row) => [...row])

    renderCanvas()
    calculateIslandStats()
    setShowLoadDialog(false)
  }

  const deleteIsland = (name: string) => {
    const updated = { ...savedIslands }
    delete updated[name]
    setSavedIslands(updated)
    localStorage.setItem("islandBuilder_saves", JSON.stringify(updated))
  }

  const exportIsland = () => {
    const islandData = {
      materials: materialMapRef.current,
      objects: objectMapRef.current,
      timestamp: Date.now(),
      version: "1.0",
    }

    const dataStr = JSON.stringify(islandData, null, 2)
    const dataBlob = new Blob([dataStr], { type: "application/json" })
    const url = URL.createObjectURL(dataBlob)

    const link = document.createElement("a")
    link.href = url
    link.download = `island_${new Date().toISOString().slice(0, 10)}.json`
    link.click()

    URL.revokeObjectURL(url)
  }

  return (
    <div className="w-full h-screen bg-gradient-to-b from-sky-200 to-sky-400 flex">
      <div className="flex-1 relative">
        <canvas
          ref={canvasRef}
          width={canvasWidth}
          height={canvasHeight}
          className="border border-gray-300 cursor-crosshair"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
        />
        <div className="absolute top-4 left-4 text-white">
          <h1 className="text-2xl font-bold mb-2">🏝️ Island Builder</h1>
          <p className="text-sm opacity-90">Create your dream island with playdough and slime!</p>
        </div>
      </div>

      <div className="w-64 p-4 max-h-screen overflow-y-auto">
        <Card className="p-4">
          <div className="flex flex-col gap-4">
            {/* Save/Load Section */}
            <div>
              <h3 className="font-bold mb-2">💾 Save & Load</h3>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <Button onClick={() => setShowSaveDialog(true)} variant="outline" className="text-xs">
                  Save Island
                </Button>
                <Button onClick={() => setShowLoadDialog(true)} variant="outline" className="text-xs">
                  Load Island
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <Button
                  onClick={() => setShowGeneratorDialog(true)}
                  variant="outline"
                  className="text-xs bg-green-50 hover:bg-green-100"
                >
                  🎲 Generate
                </Button>
                <Button onClick={exportIsland} variant="outline" className="text-xs bg-transparent">
                  Export JSON
                </Button>
              </div>
            </div>

            {/* Statistics Section */}
            <div>
              <h3 className="font-bold mb-2">📊 Island Statistics</h3>
              <div className="text-xs space-y-2">
                <div className="bg-blue-50 p-2 rounded">
                  <div className="font-medium text-blue-800">Island Size</div>
                  <div className="text-blue-600">
                    Land: {islandStats.landTiles} tiles ({islandStats.islandCoverage}%)
                  </div>
                  <div className="text-blue-600">Water: {islandStats.waterTiles} tiles</div>
                  <div className="text-blue-600">Total: {islandStats.totalTiles} tiles</div>
                </div>

                <div className="bg-green-50 p-2 rounded">
                  <div className="font-medium text-green-800 mb-1">Materials Used</div>
                  <div className="grid grid-cols-2 gap-1">
                    {Object.entries(islandStats.materialCounts)
                      .filter(([_, count]) => count > 0)
                      .sort(([, a], [, b]) => b - a)
                      .map(([material, count]) => {
                        const mat = materials.find((m) => m.key === material)
                        const displayName = mat ? mat.name : material === "water" ? "Water" : material
                        return (
                          <div key={material} className="text-green-700 flex justify-between">
                            <span className="truncate">{displayName}:</span>
                            <span className="font-medium">{count}</span>
                          </div>
                        )
                      })}
                  </div>
                </div>

                <div className="bg-orange-50 p-2 rounded">
                  <div className="font-medium text-orange-800 mb-1">Objects Placed</div>
                  {Object.entries(islandStats.objectCounts).some(([_, count]) => count > 0) ? (
                    <div className="space-y-1">
                      {Object.entries(islandStats.objectCounts)
                        .filter(([_, count]) => count > 0)
                        .sort(([, a], [, b]) => b - a)
                        .map(([object, count]) => {
                          const obj = objects.find((o) => o.key === object)
                          const displayName = obj ? obj.name : object
                          return (
                            <div key={object} className="text-orange-700 flex justify-between">
                              <span>{displayName}:</span>
                              <span className="font-medium">{count}</span>
                            </div>
                          )
                        })}
                    </div>
                  ) : (
                    <div className="text-orange-600">No objects placed</div>
                  )}
                </div>

                <div className="bg-purple-50 p-2 rounded">
                  <div className="font-medium text-purple-800">Quick Facts</div>
                  <div className="text-purple-600">
                    Most used:{" "}
                    {Object.entries(islandStats.materialCounts)
                      .filter(([material]) => material !== "water")
                      .sort(([, a], [, b]) => b - a)[0]?.[0]
                      ? materials.find(
                          (m) =>
                            m.key ===
                            Object.entries(islandStats.materialCounts)
                              .filter(([material]) => material !== "water")
                              .sort(([, a], [, b]) => b - a)[0][0],
                        )?.name || "None"
                      : "None"}
                  </div>
                  <div className="text-purple-600">
                    Diversity:{" "}
                    {
                      Object.entries(islandStats.materialCounts).filter(
                        ([material, count]) => material !== "water" && count > 0,
                      ).length
                    }{" "}
                    materials
                  </div>
                </div>
              </div>
            </div>

            {/* Materials Section */}
            <div>
              <h3 className="font-bold mb-2">🎨 Materials</h3>
              <div className="grid grid-cols-2 gap-2">
                {materials.map((mat) => (
                  <Button
                    key={mat.key}
                    onClick={() => selectMaterial(mat.key)}
                    className={`text-xs p-2 h-auto ${
                      currentMaterial === mat.key && currentObject === "none" ? "ring-2 ring-black" : ""
                    }`}
                    style={{
                      backgroundColor: mat.color,
                      color: ["green", "slime", "blue", "purple"].includes(mat.key) ? "white" : "black",
                    }}
                  >
                    {mat.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Objects Section */}
            <div>
              <h3 className="font-bold mb-2">🏗️ Objects</h3>
              <div className="grid grid-cols-1 gap-2">
                {objects.map((obj) => (
                  <Button
                    key={obj.key}
                    onClick={() => selectObject(obj.key)}
                    variant={currentObject === obj.key ? "default" : "outline"}
                    className="text-sm"
                  >
                    {obj.name}
                  </Button>
                ))}
                <Button
                  onClick={() => selectObject("none")}
                  variant={currentObject === "none" ? "destructive" : "outline"}
                  className="text-sm"
                >
                  Erase Objects
                </Button>
              </div>
            </div>

            {/* Controls Section */}
            <div>
              <h3 className="font-bold mb-2">🎮 Controls</h3>
              <p className="text-xs text-gray-600">
                Click and drag to paint
                <br />
                Arrow keys to move camera
                <br />
                Current: {currentObject !== "none" ? `Object (${currentObject})` : `Material (${currentMaterial})`}
              </p>
            </div>
          </div>
        </Card>

        {/* Save Dialog */}
        {showSaveDialog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <Card className="p-6 w-80">
              <h3 className="font-bold mb-4">💾 Save Island</h3>
              <input
                type="text"
                placeholder="Enter island name..."
                value={islandName}
                onChange={(e) => setIslandName(e.target.value)}
                className="w-full p-2 border rounded mb-4"
                onKeyPress={(e) => e.key === "Enter" && saveIsland(islandName)}
              />
              <div className="flex gap-2">
                <Button onClick={() => saveIsland(islandName)} disabled={!islandName.trim()} className="flex-1">
                  Save
                </Button>
                <Button
                  onClick={() => {
                    setShowSaveDialog(false)
                    setIslandName("")
                  }}
                  variant="outline"
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </Card>
          </div>
        )}

        {/* Load Dialog */}
        {showLoadDialog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <Card className="p-6 w-80 max-h-96 overflow-y-auto">
              <h3 className="font-bold mb-4">📂 Load Island</h3>
              {Object.keys(savedIslands).length === 0 ? (
                <p className="text-gray-500 text-center py-4">No saved islands found</p>
              ) : (
                <div className="space-y-2 mb-4">
                  {Object.entries(savedIslands).map(([name, data]) => (
                    <div key={name} className="flex items-center justify-between p-2 border rounded">
                      <div className="flex-1">
                        <div className="font-medium">{name}</div>
                        <div className="text-xs text-gray-500">{new Date(data.timestamp).toLocaleDateString()}</div>
                      </div>
                      <div className="flex gap-1">
                        <Button onClick={() => loadIsland(name)} className="text-xs px-2 py-1">
                          Load
                        </Button>
                        <Button onClick={() => deleteIsland(name)} variant="destructive" className="text-xs px-2 py-1">
                          ×
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <Button onClick={() => setShowLoadDialog(false)} variant="outline" className="w-full">
                Close
              </Button>
            </Card>
          </div>
        )}

        {/* Generator Dialog */}
        {showGeneratorDialog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <Card className="p-6 w-96 max-h-96 overflow-y-auto">
              <h3 className="font-bold mb-4">🎲 Terrain Generator</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Island Type</label>
                  <select
                    value={generatorSettings.type}
                    onChange={(e) => setGeneratorSettings({ ...generatorSettings, type: e.target.value })}
                    className="w-full p-2 border rounded text-sm"
                  >
                    <option value="circular">🏝️ Circular Island</option>
                    <option value="archipelago">🏖️ Archipelago</option>
                    <option value="continent">🗺️ Continent</option>
                    <option value="random">🎲 Random Terrain</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Size</label>
                  <select
                    value={generatorSettings.size}
                    onChange={(e) => setGeneratorSettings({ ...generatorSettings, size: e.target.value })}
                    className="w-full p-2 border rounded text-sm"
                  >
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Land Density: {Math.round(generatorSettings.density * 100)}%
                  </label>
                  <input
                    type="range"
                    min="0.3"
                    max="0.9"
                    step="0.1"
                    value={generatorSettings.density}
                    onChange={(e) =>
                      setGeneratorSettings({ ...generatorSettings, density: Number.parseFloat(e.target.value) })
                    }
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Primary Materials</label>
                  <div className="grid grid-cols-3 gap-1">
                    {materials.slice(0, 6).map((mat) => (
                      <label key={mat.key} className="flex items-center text-xs">
                        <input
                          type="checkbox"
                          checked={generatorSettings.materials.includes(mat.key)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setGeneratorSettings({
                                ...generatorSettings,
                                materials: [...generatorSettings.materials, mat.key],
                              })
                            } else {
                              setGeneratorSettings({
                                ...generatorSettings,
                                materials: generatorSettings.materials.filter((m) => m !== mat.key),
                              })
                            }
                          }}
                          className="mr-1"
                        />
                        {mat.name}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      checked={generatorSettings.addObjects}
                      onChange={(e) => setGeneratorSettings({ ...generatorSettings, addObjects: e.target.checked })}
                      className="mr-2"
                    />
                    Add Objects (Trees, Stones, Animals)
                  </label>
                </div>

                {generatorSettings.addObjects && (
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Object Density: {Math.round(generatorSettings.objectDensity * 100)}%
                    </label>
                    <input
                      type="range"
                      min="0.05"
                      max="0.3"
                      step="0.05"
                      value={generatorSettings.objectDensity}
                      onChange={(e) =>
                        setGeneratorSettings({ ...generatorSettings, objectDensity: Number.parseFloat(e.target.value) })
                      }
                      className="w-full"
                    />
                  </div>
                )}
              </div>

              <div className="flex gap-2 mt-6">
                <Button onClick={generateTerrain} className="flex-1 bg-green-500 hover:bg-green-600">
                  🎲 Generate Island
                </Button>
                <Button onClick={() => setShowGeneratorDialog(false)} variant="outline" className="flex-1">
                  Cancel
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
