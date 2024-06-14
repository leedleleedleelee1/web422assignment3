import { useRouter } from 'next/router';
import useSWR from 'swr';
import ListingDetails from '@/components/ListingDetails';
import Error from 'next/error';
import PageHeader from '@/components/PageHeader';

const Listing = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading } = useSWR(id ? `YOUR_API_URL_HERE/${id}` : null);

  if (isLoading) return null;
  if (error || !data) return <Error statusCode={404} />;

  return (
    <>
      <PageHeader text={data.name} />
      <ListingDetails listing={data} />
    </>
  );
};

export default Listing;