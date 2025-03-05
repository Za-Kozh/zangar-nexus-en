# Nexus Farm

Nexus Farm is a desktop application that allows you to connect to the Nexus project and automatically farm tokens via WebSocket RPC. The application interface is intuitive and minimalistic, and the functionality includes authorization via Google and real-time monitoring of earned tokens.
The project is not finalized yet and I don't know what to do next, that's the reason it's here. To get possible help in solving problems that I have not been able to solve yet.

## Functionality
- Authorization via Google OAuth (doesn't pass security clearance)
- Connection to WebSocket RPC Nexus
- Automatic balance check every 30 minutes
- Visual interface
- Dynamic connection status (not implemented)

## Installation
1. Install [Node.js].
2. Download the project files:
3. Install dependencies in the application folder:
```sh
   npm install electron
```
```sh
   npm install ethers
```
```sh
   npm install ws
```
```sh
   npm install googleapis
```
   To build the .exe
```sh
   npm install --save-dev electron-builder
```

## Start the application
To run the application, use the command in the application folder:
```sh
npm start
```
or
```sh
npx electron .
```
## Build `.exe`
To create `.exe`, execute:
```sh
npm run dist
```

## Configuration
Before use, configure Google OAuth in Google Cloud Console. Make sure the application is registered as “Desktop” and specify CLIENT-ID & CLIENT-SECRET in main.js.
You also need to be a member of the Nexus project (https://app.nexus.xyz/) and specify your wallet in main.js.

## Problems
### 1. Application asks for security code during authorization
### 2. Because of the first problem it is impossible to check connection to the project correctly
