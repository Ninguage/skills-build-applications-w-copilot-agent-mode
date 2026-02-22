import React, { useEffect, useState } from 'react';
import { Table, Spinner, Alert } from 'react-bootstrap';

function Activities() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const codespaceName = process.env.REACT_APP_CODESPACE_NAME;
  const endpoint = `https://${codespaceName}-8000.app.github.dev/api/activities/`;

  useEffect(() => {
    console.log('Activities API endpoint:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = Array.isArray(data) ? data : data.results || [];
        console.log('Fetched activities:', results);
        setActivities(results);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching activities:', err);
        setError('Failed to fetch activities');
        setLoading(false);
      });
  }, [endpoint]);

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <div>
      <h2>Activities</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, idx) => (
            <tr key={idx}>
              <td>{activity.id || idx}</td>
              <td>{activity.name}</td>
              <td>{activity.description || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Activities;
