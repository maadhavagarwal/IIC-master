import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

const IdeaPage = () => {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    fetchIdeas();
  }, []);

  const fetchIdeas = async () => {
    try {
      const response = await axios.get('http://localhost:8000/idea');
      setIdeas(response.data);
    } catch (error) {
      console.error('Error fetching ideas', error);
    }
  };

  return (
    <div>
      <h1>Submitted Ideas</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Idea Name</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Branch</th>
            <th>Year</th>
            <th>Idea Description</th>
            <th>Prototype Link</th>
            <th>PPT Uploaded</th>
            <th>Submitted On</th>
          </tr>
        </thead>
        <tbody>
          {ideas.map((idea, index) => (
            <tr key={idea._id}>
              <td>{index + 1}</td>
              <td>{idea.ideaname}</td>
              <td>{idea.name}</td>
              <td>{idea.email}</td>
              <td>{idea.phone}</td>
              <td>{idea.branch}</td>
              <td>{idea.year}</td>
              <td>{idea.idea}</td>
              <td>{idea.proto}</td>
              <td>{idea.pptUpload ? <a href={`http://localhost:8000/file/${idea.pptUpload}`} download>Download PPT</a> : 'No PPT'}</td>
              <td>{new Date(idea.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default IdeaPage;
