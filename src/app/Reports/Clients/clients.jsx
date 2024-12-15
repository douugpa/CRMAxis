
async function pdfClients(clients) {
  const pdfMake = (await import('pdfmake/build/pdfmake')).default;
  const pdfFonts = (await import('pdfmake/build/vfs_fonts')).default;
  pdfMake.vfs = pdfFonts.pdfMake ? pdfFonts.pdfMake.vfs : pdfFonts.vfs;

  const reportTitle = [{
    text: 'Listagem de Clientes',
    alignment: 'center',
    fontSize: 15,
    bold: true,
    margin: [15, 20, 0, 45]
  }];

  const data = clients.map((client) => {
    return [
      {text: client.id, fontSize: 9, margin: [0, 2, 0, 2]},
      {text: client.name, fontSize: 9, margin: [0, 2, 0, 2]},
      {text: client.email, fontSize: 9, margin: [0, 2, 0, 2]},
      {text: client.phone, fontSize: 9, margin: [0, 2, 0, 2]}
    ]
  });

  const details = [{
    table: {
      headerRows: 1,
      widths: ['*','*','*','*'],
      body: [
        [
          {text: 'Código', style: 'tableHeader', bold: true, fontSize: 10},
          {text: 'Nome', style: 'tableHeader', bold: true, fontSize: 10},
          {text: 'E-mail', style: 'tableHeader', bold: true, fontSize: 10},
          {text: 'Telefone', style: 'tableHeader', bold: true, fontSize: 10},
        ],
        ...data
      ]
    },
    layout: {
      fillColor: function (rowIndex, node, columnIndex) {
        return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
      }
    }
  }];

  function Footer(currentPage, pageCount){
    return [{
      text: currentPage + ' / ' + pageCount,
      alignment: 'right',
      fontSize: 9,
      margin: [0, 10, 20, 0]
    }]
  }

  const docSettings = {
    pageSize: 'A4',
    pageMargins: [15, 50, 15, 40],
    header: [reportTitle],
    content: [details],
    footer: Footer
  };

  pdfMake.createPdf(docSettings).open();
  
}
export default pdfClients;