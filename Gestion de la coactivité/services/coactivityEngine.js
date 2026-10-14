import {
  calculateRisk
} from "./riskEngine";

export function buildDailyMatrix(
  interventions
) {

  const matrix = {};

  interventions.forEach(
    (inter) => {

      let current =
        new Date(
          inter.dateDebut
        );

      while (
        current <=
        inter.dateFin
      ) {

        const dateKey =
          current
            .toISOString()
            .split("T")[0];

        if (!matrix[dateKey]) {

          matrix[dateKey] = [];

        }

        matrix[dateKey]
          .push(inter);

        current.setDate(
          current.getDate() + 1
        );

      }

    }
  );

  return matrix;

}