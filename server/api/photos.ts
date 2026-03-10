export default defineEventHandler(async () => {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY;

  if (!accessKey) {
    throw createError({
      statusCode: 500,
      statusMessage: "UNSPLASH_ACCESS_KEY is missing",
      data: {
        message: "Sunucu fotoğraf servisine bağlanacak anahtarı bulamadı.",
      },
    });
  }

  try {
    const [photos, stats] = await Promise.all([
      $fetch(
        `https://api.unsplash.com/users/bedirdemir/photos?page=1&per_page=50&client_id=${accessKey}`
      ),
      $fetch(
        `https://api.unsplash.com/users/bedirdemir/statistics?quantity=1&client_id=${accessKey}`
      ),
    ]);

    return {
      photos,
      stats,
    };
  } catch (error) {
    const fetchError = error as {
      data?: {
        errors?: string[];
        message?: string;
      };
    };

    const unsplashMessage =
      fetchError?.data?.errors?.[0] ||
      fetchError?.data?.message ||
      "Fotoğraflar şu anda yüklenemiyor.";

    throw createError({
      statusCode: 502,
      statusMessage: "Unsplash request failed",
      data: {
        message: unsplashMessage,
      },
    });
  }
});
