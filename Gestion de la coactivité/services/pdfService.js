import jsPDF
from "jspdf";

export function generateReport(

  kpis,
  alerts

) {

  const pdf =
    new jsPDF();

  pdf.setFontSize(18);

  pdf.text(

    "Rapport Coactivité HF",

    20,

    20

  );

  pdf.setFontSize(12);

  pdf.text(

    `Travaux : ${kpis.travaux}`,

    20,

    40

  );

  pdf.text(

    `Entreprises : ${kpis.entreprises}`,

    20,

    50

  );

  pdf.text(

    `Alertes : ${alerts.length}`,

    20,

    60

  );

  pdf.save(

    "rapport_hf.pdf"

  );

}