# Web3 Gaming Demo

Built on a secure and scalable blockchain platform, Socifi ensures transparency, true ownership of digital assets through NFTs, and seamless peer-to-peer interactions. 

### Install dependencies

```bash
npm install
```

### Run project (development)

```bash
npm start
### Build and run (production)

1. Build client:

```bash
npm run build
```

2. Set environment and start server:

```bash
export NODE_ENV=production
export PORT=7777
export JWT_SECRET=your_strong_secret
# optional
export MONGO_URI="mongodb://user:pass@host:27017/dbname"
export JWT_TOKEN_EXPIRES_IN=7d

npm run start:prod
```

Server will serve static files from `build/` and APIs under `/api/*`.
```
