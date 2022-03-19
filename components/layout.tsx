interface LayoutPros {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutPros) {
  return (
    <div className="mx-2">
      <div
        style={{
          background:
            "linear-gradient(90deg, #ceaa33 5%, #e0ab41 5% 10%, #eebcb5 10% 15%, #f89a88 15% 20%, #f4a1b5 20% 25%, #7ca7dd 25% 30%, #bcbfaa 30% 35%, #c2a7c6 35% 40%, #f4e7db 40% 45%, #ceaa33 45% 50%, #e0ab41 50% 55%, #eebcb5 55% 60%, #f89a88 60% 65%, #f4a1b5 65% 70%, #7ca7dd 70% 75%, #bcbfaa 75% 80%, #c2a7c6 80% 85%, #f4e7db 85% 90%, #ceaa33 90% 95%, #e0ab41 95% 100%)",
        }}
        className="mb-4 rounded-t-full py-4 text-center text-4xl font-extrabold text-slate-700 shadow-md"
      >
        <span>PLAY LAB</span>
      </div>
      <div className="space-y-2">{children}</div>
    </div>
  );
}
