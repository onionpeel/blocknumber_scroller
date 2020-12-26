This project generates a running ticker for new blocks being produced on Ethereum. This differs from Etherscan in that it is not necessary to refresh the browser to display new blocks.  Network requests are made every 5 seconds, and the results are appended to an in-memory array of block numbers.  Only the most recent 10 block numbers are displayed.

To run the project:
1.  Clone the repository
2.  npm install
3.  Create a project in Infura
4.  Infura creates an https endpoint for the main network.  Copy this URL and paste it in as a string as the argument for new Web3() in initializeStateSagas.js.  According to the Infura documentation, there is no security risk for exposing this endpoint because it only contains the project ID and does not reveal the project secret.
5.  npm start
