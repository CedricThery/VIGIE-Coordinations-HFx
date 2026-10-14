export function detectCriticalConflicts(
  interventions
) {

  const conflits = [];

  interventions.forEach(a => {

    interventions.forEach(b => {

      if (a.id === b.id)
        return;

      const overlap =

        a.dateDebut <= b.dateFin &&
        a.dateFin >= b.dateDebut;

      if (!overlap)
        return;

      if (
        a.zone === b.zone
      ) {

        conflits.push({

          criticite:
            "HAUTE",

          zone:
            a.zone,

          entrepriseA:
            a.entreprise,

          entrepriseB:
            b.entreprise,

          raison:
            "Zone identique"

        });

      }

      if (
        a.permitType ===
        "Point Chaud"

        &&

        b.permitType ===
        "Gaz"
      ) {

        conflits.push({

          criticite:
            "CRITIQUE",

          zone:
            a.zone,

          raison:
            "Gaz + Point Chaud"

        });

      }

    });

  });

  return conflits;

}
