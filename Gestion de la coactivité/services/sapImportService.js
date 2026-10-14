export function normalizeSAPOrder(order) {

  return {

    numeroOT:
      order["Ordre"],

    description:
      order["Description"],

    revision:
      order["Révision"],

    zone:
      order["Zone"],

    entreprise:
      order["Entreprise"],

    dateDebut:
      new Date(order["Début"]),

    dateFin:
      new Date(order["Fin"]),

    statut:
      order["Statut"]

  };

}

export function importSAPData(
  rows
) {

  return rows.map(
    normalizeSAPOrder
  );

}