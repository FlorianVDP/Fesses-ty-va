export default function AddToCalendar(item){
    function sanitizeWhiteSpace(str){
        str = str.replace("  ", " ")
        str = str.replace(" ", "+")
        str = str.toLowerCase();
        str = str.charAt(0).toUpperCase() + str.slice(1)
        return str
    }
    //TODO Bad Date
    const name = sanitizeWhiteSpace(item.nom_de_la_manifestation);
    const dateStart = Date.parse(new Date(item.date_debut_ancien));
    const dateEnd = Date.parse(new Date(item.date_de_fin_ancien));
    const location = sanitizeWhiteSpace(item.commune_principale);
    const description = item.commentaires ? item.commentaires : "" + " " + item.site_web ? item.site_web : "";
    const url = "https://calendar.google.com/calendar/u/0/r/eventedit?dates="+dateStart+"/"+dateEnd+"&location="+location+"&text="+name+"&details="+description;
    window.open(url, "_blank", "", "")
}