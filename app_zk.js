const min_year = 2015;
const max_year = new Date().getFullYear() -1; //-1 because current year data will not be available in input file

const display_year = max_year; //if you edit here, have a look at the default value of the dropdown list id='year-selector'
const file_path = './data/miv.csv';

// define column index 'information order' of input file
const index_jahr = 0;
const index_monat = index_jahr + 1;
const index_messort_id = index_monat + 1;
const index_richtung_id = index_messort_id + 1;
const index_traffic_type = index_richtung_id + 1;
const index_total = index_traffic_type + 1;
const index_total_wochentag = index_total + 1;
const index_total_sa = index_total_wochentag + 1;
const index_total_so = index_total_sa + 1;

var chart_data = [], year_data = [], f_data = [];

const variables = {
richtung_id: {
    "1":"Richtung I",
    "2":"Richtung II"},
traffic_type: {
    "1": "MIV",
    "2": "Velo",
    "3": "Fussgänger"},
}