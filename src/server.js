const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const mediaHandler = require('./mediaResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  switch (request.url) {
    case '/' :
      htmlHandler.getIndex(request, response);
      break;
    case 'client':
      mediaHandler.getParty(request, response);
      break;
    case 'client2':
      mediaHandler.getBling(request, response);
      break;
    case 'client3':
      mediaHandler.getBird(request, response);
      break;
    case '/party.mp4':
      mediaHandler.getParty(request, response);
      break;
    case '/bling.mp3':
      mediaHandler.getBling(request, response);
      break;
    case '/bird.mp4':
      mediaHandler.getBird(request, response);
      break;
    default:
      htmlHandler.getIndex(request, response);
      break;
  }
};

http.createServer(onRequest).listen(port);
