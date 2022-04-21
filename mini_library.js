class Table {
  constructor(init) {
    this.init = init;
  }

  createHeader(data) {
    let open = "<thead><tr>";
    let close = "</tr></thead>";
    data.forEach((d) => {
      open += `<th class='table-warning text-center'>${d}</th>`;
    });

    return open + close;
  }

  createBody(data) {
    let open = "<tbody>";
    let close = "</tbody>";

    data.forEach((d) => {
      open += `
        <tr class='table-dark' >
          <td class='table-warning'>${d[0]}</td>
          <td class='table-info'>${d[1]}</td>
          <td class='table-danger'>${d[2]}</td>
        </tr>
      `;
    });

    return open + close;
  }

  render(element) {
    let table = "<table class='table table-bordered border-warning table-light table-striped table-hover' style=''>" + this.createHeader(this.init.columns) + this.createBody(this.init.data) + "</table>";
    element.innerHTML = table;
  }
}

const table = new Table({
  columns: ["Judul", "Tahun Rilis", "IMDb Rating"],
  data: [
    ["Transformers", "28 Juni 2007", "7.0/10"],
    ["Transformers : Revenge of the Fallen", "24 Juni 2009", "5.9/10"],
    ["Transformers : Dark of the Moon", "05 Agustus 2011", "6.2/10"],
    ["Transformers : Age of Extinction", "25 Juni 2014", "5.6/10"],
    ["Transformers : The Last Knight", "21 Juni 2017", "5.2/10"],
    ["Bumblebee", "19 Desember 2018", "6.7/10"],
    ["Snowden", "16 September 2016", "7.3/10"],
    ["Fantastic Beasts and Where to Find Them", "16 November 2016", "7.2/10"],
    ["Fantastic Beasts: The Crimes of Grindelwald", "14 November 2018", "6.2/10"],
    ["Fantastic Beasts: The Secrets of Dumbledore", "13 April 2022", "6.6/10"],
  ],
});
const basecamp = document.getElementById("basecamp");
table.render(basecamp);
