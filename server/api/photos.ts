export default defineEventHandler(async (event) => {
  const photos = await $fetch(
    `https://api.unsplash.com/users/bedirdemir/photos?page=1&per_page=50&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  ).catch((error) => error.data);

  const stats = await $fetch(
    `https://api.unsplash.com/users/bedirdemir/statistics?quantity=1&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  ).catch((error) => error.data);

  return {
    photos,
    stats,
  };
});
