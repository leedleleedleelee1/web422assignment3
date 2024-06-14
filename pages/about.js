import Link from 'next/link';
import { Card } from 'react-bootstrap';
import ListingDetails from '@/components/ListingDetails';
import PageHeader from '@/components/PageHeader';

export const getStaticProps = async () => {
  const res = await fetch('YOUR_API_URL_HERE/ID_OF_LISTING');
  const data = await res.json();
  return { props: { listing: data } };
};

const About = ({ listing }) => (
  <>
    <PageHeader text="About the Developer" />
    <Card>
      <Card.Body>
        <p>Short description about the developer.</p>
        <Link href={`/listing/${listing._id}`} passHref>
          <a>View Listing</a>
        </Link>
      </Card.Body>
      <ListingDetails listing={listing} />
    </Card>
  </>
);

export default About;
