export function calculateIAScore(

  entreprises,
  travaux,
  permis,
  conflits

) {

  return (

    entreprises * 2 +

    travaux +

    permis * 1.5 +

    conflits * 5

  );

}