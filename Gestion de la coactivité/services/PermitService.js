export const permitTypes = [

  "Point Chaud",
  "Gaz",
  "Levage",
  "Électrique",
  "Consignation",
  "Travail Hauteur"

];

export function createPermit(
  data
) {

  return {

    id:
      crypto.randomUUID(),

    numero:
      data.numero,

    type:
      data.type,

    zone:
      data.zone,

    entreprise:
      data.entreprise,

    statut:
      "ACTIF",

    dateCreation:
      new Date()

  };

}