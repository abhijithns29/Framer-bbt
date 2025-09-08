import { useDraggable } from "@dnd-kit/core";

function DraggableItem({ id, label }: { id: string; label: string }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className="cursor-grab rounded-md bg-white p-2 shadow hover:bg-gray-50"
    >
      {label}
    </div>
  );
}

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-100 h-screen p-4 border-r">
      <h2 className="text-lg font-semibold mb-4">Components</h2>
      <div className="flex flex-col gap-2">
        <DraggableItem id="button" label="Button" />
        <DraggableItem id="heading" label="Heading" />
        <DraggableItem id="card" label="Card" />
        <DraggableItem id="image" label="Image" />
      </div>
    </div>
  );
}
