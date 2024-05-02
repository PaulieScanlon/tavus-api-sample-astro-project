import type { APIRoute } from 'astro';

interface FormData {
  replica_id: string;
  video_name: string;
  script: string;
  background_url: string;
}

export const POST: APIRoute = async ({ request }) => {
  const formData = Array.from((await request.formData()).entries()).reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {}) as FormData;

  try {
    const response = await fetch('https://tavusapi.com/v2/videos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': import.meta.env.TAVUS_API_KEY,
      },
      body: `{
        "replica_id":"${formData.replica_id}",
        "video_name":"${formData.video_name}",
        "script":"${formData.script}",
        "background_url":"${formData.background_url || ''}"
       }`,
    });

    return new Response(
      JSON.stringify({
        message: await response.json(),
      }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({
        message: error,
      }),
      { status: 500 }
    );
  }
};
