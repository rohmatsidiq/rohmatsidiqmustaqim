export default function ItemWork({ text = "" }) {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/10 text-white/80 text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wider">
      {text}
    </div>
  );
}
