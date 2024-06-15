import Link from 'next/link';
import { Card } from 'react-bootstrap';
import ListingDetails from '@/components/ListingDetails';
import PageHeader from '@/components/PageHeader';

export const getStaticProps = async () => {
  const res = await fetch('https://web422assignment1-ehad.onrender.com/api/listings/4069429');
  const data = await res.json();
  return { props: { listing: data } };
};

const About = ({ listing }) => (
  <>
    <PageHeader text="About the Developer" />
    <Card>
      <Card.Body>
        <p>My name is Frank, and I am a passionate web developer. I have been working on various projects involving frontend and backend technologies, including React, Next.js, Express.js, and MongoDB. This project demonstrates my ability to create dynamic and responsive web applications.</p>
        <Link href={`/listings/${listing._id}`}>
          View Listing
        </Link>
      </Card.Body>
      <ListingDetails listing={listing} />
    </Card>
  </>
);

export default About;
