import { auth } from '@/auth';
import { redirect, notFound } from 'next/navigation';
import AppShell from '@/components/AppShell/AppShell';
import { personaData } from '@/lib/demo/persona-data';
import PersonaDetailView from '@/components/Demo/Explorer/PersonaDetailView';

interface PersonaPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PersonaPage({ params }: PersonaPageProps) {
  const session = await auth();

  if (!session) {
    redirect('/');
  }

  const { id } = await params;
  const personaId = parseInt(id, 10);

  // Check if persona ID is valid (0-10)
  if (isNaN(personaId) || personaId < 0 || personaId > 10) {
    notFound();
  }

  const persona = personaData.personas.find(p => p.persona_id === personaId);

  if (!persona) {
    notFound();
  }

  return (
    <AppShell>
      <main className="min-h-screen bg-gray-900 text-gray-300">
        <PersonaDetailView persona={persona} />
      </main>
    </AppShell>
  );
}

// Generate static params for all personas
export async function generateStaticParams() {
  return personaData.personas.map((persona) => ({
    id: persona.persona_id.toString(),
  }));
}
