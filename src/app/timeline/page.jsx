import { getInteractions } from '@/lib/mock-data';
import TimelineClient from '../../components/ui/TimelineClient';

export const dynamic = 'force-dynamic';

export default async function Timeline() {
  const interactions = await getInteractions();

  return <TimelineClient initialInteractions={interactions} />;
}
