import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export const BuildResume = resume => {
  html2canvas(resume, { scale: 2 })
    .then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
      pdf.save('resume.pdf');
    })
    .catch(e => {
      console.log(e + 'some error occured');
    });
};
