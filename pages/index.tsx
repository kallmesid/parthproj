import { GetServerSideProps } from 'next';
import { Dashboard } from '../components/Dashboard';
import { getSheetData, processSheetData } from '../lib/sheets';

interface HomeProps {
  dashboardData: ReturnType<typeof processSheetData>;
}

export default function Home({ dashboardData }: HomeProps) {
  return <Dashboard data={dashboardData} />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const rawData = await getSheetData();
  const dashboardData = processSheetData(rawData);

  return {
    props: {
      dashboardData,
    },
  };
}
