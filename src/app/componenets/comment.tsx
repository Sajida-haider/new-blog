// commentsection.tsx
"use client";

import { useState, useEffect } from 'react';

const CommentSection = () => {
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<{ username: string; comment: string }[]>([]);

  // Load comments from localStorage on component mount
  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem('comments') || '[]');
    setComments(savedComments);
  }, []);

  // Save new comment to localStorage
  const handleSaveComment = () => {
    if (!username || !comment) {
      alert('Please enter both name and comment!');
      return;
    }

    const newComment = { username, comment };
    const updatedComments = [...comments, newComment];

    setComments(updatedComments);
    localStorage.setItem('comments', JSON.stringify(updatedComments));

    // Clear input fields
    setUsername('');
    setComment('');
  };

  // Delete a comment
  const handleDeleteComment = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
    localStorage.setItem('comments', JSON.stringify(updatedComments));
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Comments</h2>

      {/* Input Fields */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Enter your comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-3 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        <button
          onClick={handleSaveComment}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Save Comment
        </button>
      </div>

      {/* Display Comments */}
      <div className="space-y-4">
        {comments.map((item, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center">
            <div>
              <h4 className="text-lg font-semibold text-gray-800">{item.username}</h4>
              <p className="text-gray-700">{item.comment}</p>
            </div>
            <button
              onClick={() => handleDeleteComment(index)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
