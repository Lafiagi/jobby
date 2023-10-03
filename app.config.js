import 'dotenv/config';

const apiKey = process.env.API_KEY;

module.exports = {
    expo: {
      scheme: 'acme',
      web: {
        bundler: 'metro',
      },
      plugins: ['expo-router'],
      name: 'gamer',
      slug: 'gamer',
      extra: {
        router: {
          origin: false,
        },
        eas: {
          projectId: 'b4e60d1c-1677-4254-a25b-3886f9ea3909',
        },
        apiKey: apiKey,
      },
    }
  };
  