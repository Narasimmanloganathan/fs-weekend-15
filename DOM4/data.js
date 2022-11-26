let employees = [{ "id": 1, "name": "Sibeal", "email": "sbarber0@google.it", "gender": "Female" },
{ "id": 2, "name": "Osbourn", "email": "okinchlea1@springer.com", "gender": "Male" },
{ "id": 3, "name": "Rafaello", "email": "rsealey2@ehow.com", "gender": "Male" },
{ "id": 4, "name": "Jody", "email": "jbezley3@nps.gov", "gender": "Male" },
{ "id": 5, "name": "Shawn", "email": "serickson4@so-net.ne.jp", "gender": "Female" },
{ "id": 6, "name": "Gibb", "email": "gpointing5@bandcamp.com", "gender": "Male" },
{ "id": 7, "name": "Lenka", "email": "lodonovan6@godaddy.com", "gender": "Female" },
{ "id": 8, "name": "Tracy", "email": "tfarnworth7@amazon.com", "gender": "Male" },
{ "id": 9, "name": "Linnet", "email": "lgiacubo8@cam.ac.uk", "gender": "Female" },
{ "id": 10, "name": "Crysta", "email": "cbeswell9@clickbank.net", "gender": "Female" },
{ "id": 11, "name": "Lynea", "email": "lcastelloa@dot.gov", "gender": "Female" },
{ "id": 12, "name": "Ulric", "email": "uescalab@odnoklassniki.ru", "gender": "Male" },
{ "id": 13, "name": "Mace", "email": "mstodartc@dedecms.com", "gender": "Male" },
{ "id": 14, "name": "Kial", "email": "kbattingd@wisc.edu", "gender": "Female" },
{ "id": 15, "name": "Keenan", "email": "kbosse@skyrock.com", "gender": "Male" },
{ "id": 16, "name": "Donnell", "email": "dpetrussif@storify.com", "gender": "Male" },
{ "id": 17, "name": "Christos", "email": "cclawg@hatena.ne.jp", "gender": "Male" },
{ "id": 18, "name": "Jehanna", "email": "jkenzieh@yellowbook.com", "gender": "Female" },
{ "id": 19, "name": "Annice", "email": "aserginsoni@guardian.co.uk", "gender": "Female" },
{ "id": 20, "name": "Sayres", "email": "swesthoffj@sfgate.com", "gender": "Male" }]

function display_Data() {
    let rows = ""
    for (emp of employees) {
        rows = rows + `<tr>
                <td>${emp.id}</td>
                <td>${emp.name}</td>
                <td>${emp.email}</td>
                <td>${emp.gender}</td>
            </tr>`
    }
    document.getElementById('abc').innerHTML = rows
}