import app from './server';

// Start the server
const port = Number(process.env.PORT || 3000);
const host = '0.0.0.0';
app.listen(port, host, () => {
    console.log('Express server started on port: ' + port);
});
