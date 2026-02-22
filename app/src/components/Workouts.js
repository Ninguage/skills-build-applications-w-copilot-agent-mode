import React, { useEffect, useState } from 'react';
import { Table, Spinner, Alert } from 'react-bootstrap';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const codespaceName = process.env.REACT_APP_CODESPACE_NAME;
  const endpoint = `https://${codespaceName}-8000.app.github.dev/api/workouts/`;

  useEffect(() => {
    console.log('Workouts API endpoint:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = Array.isArray(data) ? data : data.results || [];
        console.log('Fetched workouts:', results);
        setWorkouts(results);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching workouts:', err);
        setError('Failed to fetch workouts');
        setLoading(false);
      });
  }, [endpoint]);

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <div>
      <h2>Workouts</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((workout, idx) => (
            <tr key={idx}>
              <td>{workout.id || idx}</td>
              <td>{workout.name}</td>
              <td>{workout.duration || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Workouts;
