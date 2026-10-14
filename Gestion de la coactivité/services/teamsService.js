export async function sendTeamsAlert(

  webhook,
  message

) {

  await fetch(
    webhook,
    {
      method: "POST",

      headers: {
        "Content-Type":
        "application/json"
      },

      body: JSON.stringify({

        text: message

      })

    }
  );

}