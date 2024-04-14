import Sidebar from "@/components/Sidebar";
import SnapshotConfig from "@/components/SnapshotConfig";

export default function Home() {
  return (
    <main>
      <div className="flex">
        <div className="w-1/6">
          <Sidebar />
        </div>
        <div className="w-5/6">
          <SnapshotConfig />
        </div>
      </div>
    </main>
  );
}
