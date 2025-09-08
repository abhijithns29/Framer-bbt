"use client";
import React,{useState} from "react";
import { DndContext, useDroppable } from "@dnd-kit/core";
import Sidebar from "./SideBar";

export default function Builder() {

  const [components, setComponents] = useState<any[]>([]);
function handleDragEnd(event: any) {
  const { over, active } = event;
  
  // If dropped inside the canvas
  if (over && over.id === "canvas") {
    setComponents((prev) => [
      ...prev,
      { id: Date.now(), type: active.id }, // e.g. {id: 123, type: "button"}
    ]);
  }
}


  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex h-screen">
        <Sidebar />
     <Canvas components={components} />

      </div>
    </DndContext>
  );
}

function Canvas({ components }: { components: any[] }) {
  const { setNodeRef, isOver } = useDroppable({ id: "canvas" });

  // Helper to render components
  function renderComponent(type: string) {
    switch (type) {
      case "button":
        return (
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            Click Me
          </button>
        );
      case "heading":
        return <h1 className="text-2xl font-bold">Heading Text</h1>;
      case "card":
        return (
          <div className="p-4 border rounded shadow bg-white">
            <h3 className="font-semibold">Card Title</h3>
            <p className="text-sm text-gray-500">Card content here...</p>
          </div>
        );
      case "image":
        return (
          <img
            src="https://via.placeholder.com/150"
            alt="placeholder"
            className="rounded"
          />
        );
      default:
        return null;
    }
  }

  return (
    <div
      ref={setNodeRef}
      className={`flex-1 h-screen p-4 transition-all ${
        isOver ? "border-2 border-blue-500 bg-blue-50" : "border bg-white"
      }`}
    >
      <h2 className="text-gray-500 mb-2">Canvas Area</h2>

      <div className="flex flex-col gap-4">
        {components.map((comp) => (
          <div key={comp.id}>{renderComponent(comp.type)}</div>
        ))}
      </div>
    </div>
  );
}


