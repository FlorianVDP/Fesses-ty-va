export default function AddToCalendar(item){
    function sanitizeWhiteSpace(str){
        str = str.replaceAll("  ", " ")
        str = str.replaceAll(" ", "+")
        str = str.toLowerCase();
        str = str.charAt(0).toUpperCase() + str.slice(1)
        return str
    }

    if (item.date_debut_ancien && item.date_de_fin_ancien){
        const name = sanitizeWhiteSpace(item.nom_de_la_manifestation);
        const dateStart = item.date_debut_ancien.replaceAll("-", "")
        const dateEnd = item.date_de_fin_ancien.replaceAll("-", "")
        const location = sanitizeWhiteSpace(item.commune_principale);
        const description = item.commentaires ? item.commentaires : +" " + item.site_web ? item.site_web : "";
        const url = "https://calendar.google.com/calendar/u/0/r/eventedit?dates="+dateStart+"/"+dateEnd+"&location="+location+"&text="+name+"&details="+description;
        window.open(url, "_blank", "", "")
    }
}