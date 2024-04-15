import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="bg-cluster-sidebar text-cluster-text p-4 h-screen">
      <div className="font-bold text-lg mb-4 text-center">Cluster A</div>
      <hr className="border-gray-300 mb-4" />
      
      <Link href="/metrics" className="inline-block px-3 py-2 mt-4 text-sm text-white hover:bg-[#13181E]">
        ‧ Performance Metrics
      </Link>
      <Link href="/policy" className="inline-block px-3 py-2 mt-4 text-sm text-white hover:bg-[#13181E]">
        ‧ Edit Snapshot Policy
      </Link>
    </div>
  );
}
