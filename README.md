# Backend Setup
echo "MONGO_URL=your_mongodb_connection_string" > backend/.env
echo "TOKEN_KEY=your_secret_key_for_encryption" >> backend/.env
cd backend && npm install && cd ..                                     backend branch

# Frontend Setup
cd frontend && npm install && cd ..       fronted branch

# Dashboard Setup
cd dashboard && npm install && cd ..      dashboard branch

# Start Servers
(cd backend && npm start) & (cd frontend && npm start) & (cd dashboard && npm start)
