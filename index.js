const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');

const { MongoURI } = require('./config/default.json');
const UserRouter = require('./routers/UserRouter');
const DefaultRouter = require('./routers/DefaultRouter');
const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use(compression());
app.use(helmet());

app.use('/user', UserRouter);
app.use('/', DefaultRouter);

mongoose.connect(MongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.listen(process.env.PORT || 8000);
