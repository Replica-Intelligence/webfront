import AppShell from '@/components/AppShell/AppShell';
import ExplorerClientWrapper from './ExplorerClientWrapper';

export default function ExplorerPage() {
  return (
    <AppShell>
      <main className="min-h-screen bg-gray-900 text-gray-300">
        <ExplorerClientWrapper />
      </main>
    </AppShell>
  );
}
