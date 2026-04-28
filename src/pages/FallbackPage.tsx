export default function FallbackPage({ title }: { title: string }) {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center min-h-[60vh] flex flex-col justify-center">
      <h1 className="text-5xl font-serif font-bold text-white mb-6">{title}</h1>
      <p className="text-xl text-white/60">This page is currently under construction. Please check back later or contact us directly.</p>
    </div>
  );
}
