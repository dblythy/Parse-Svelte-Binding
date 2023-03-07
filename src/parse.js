import Parse from 'parse/dist/parse.min.js';
Parse.initialize('test', 'test', 'test');
Parse.serverURL = 'http://localhost:8378/1'
export default Parse;