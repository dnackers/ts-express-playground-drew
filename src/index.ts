import * as Express from 'express';
import * as path from 'path';
import { helloWorld } from './hello-world';

// The app instance
const app = Express();

// Serve static files from /public if they exist.
app.use(Express.static(path.join(__dirname, '..', 'public')));

// GET /api/v1/hello-world/ - serve JSON API methood imported from `hello-world.ts`.
app.get('/api/v1/hello-world/', helloWorld);

// POST /api/v1/mirror/ - send back what you send it
app.post('/api/v1/mirror/', (req, res) => res.send(req.body));

// GET /src/hello-world.ts - serve the content of `hello-world.ts` at this specific route
app.get('/src/hello-world.ts', (req, res) => res.sendFile(path.join(__dirname, 'hello-world.ts')));

// List on port 3333.  Log to console when started.
app.listen(3333, () => console.log('Listening on port 3333'));
