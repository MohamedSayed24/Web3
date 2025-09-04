const express = require('express');
const path = require('path');

const configureRoutes = (app) => {
  // 1. API routes first
  app.use('/api/auth', require('./api/auth'));
  app.use('/api/users', require('./api/users'));
  app.use('/api/chips', require('./api/chips'));

  // 2. Serve static files from the React build directory at root-level 'build'
  app.use(express.static(path.join(__dirname, '..', '..', 'build')));

  // 3. Catch-all route for the React app
  // This route sends the main index.html file for any request not handled by the above routes
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'build', 'index.html'));
  });
};

module.exports = configureRoutes;