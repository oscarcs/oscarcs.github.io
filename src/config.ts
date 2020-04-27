export default class Config {
    public static baseUrl = process.env.NODE_ENV === 'production' ? 
        'https://us-central1-oscarcs-github-pages.cloudfunctions.net/api' :
        'http://localhost:8080';
}