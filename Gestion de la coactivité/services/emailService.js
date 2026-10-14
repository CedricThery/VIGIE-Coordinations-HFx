export async function sendEmailAlert(

  apiUrl,
  payload

) {

  return fetch(
    apiUrl,
    {
      method: "POST",

      body:
      JSON.stringify(payload)

    }
  );

}