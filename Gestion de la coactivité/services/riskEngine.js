export function calculateRisk(
  nbTravaux,
  nbEntreprises,
  nbChevauchements
) {

  const score =

    nbTravaux +
    nbEntreprises +
    (nbChevauchements * 2);

  if (score >= 25)
    return "ROUGE";

  if (score >= 15)
    return "ORANGE";

  return "VERT";

}