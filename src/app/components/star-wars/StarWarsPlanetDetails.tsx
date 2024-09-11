import { useParams } from 'react-router-dom';

export const StarWarsPlanetDetails = () => {
  const { id: planetId } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Planet Details</h1>
      <p>Planet ID: {planetId}</p>
    </div>
  );
};
