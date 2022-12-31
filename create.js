class Create {
    constructor(title, describle, codes, lang, time, inputId, titleId, describleId) {
        this.title = title;
        this.describle = describle;
        this.codes = codes;
        this.lang = lang;

        this.inputId = inputId;
        this.titleId = titleId;
        this.describleId = describleId;

        this.writeCode = new WriteCode(time, inputId, codes);
    }

    start() {
        // Config text/className
        document.getElementById(this.titleId).innerHTML = this.title
        document.getElementById(this.inputId).className = this.lang;
        document.getElementById(this.describleId).innerHTML = ""
        
        for (let htmlEl of this.describle) {
            console.log(htmlEl)
            document.getElementById(this.describleId).innerHTML += htmlEl
        }

        // create code write animation
        this.writeCode.updateCodeText();

    }
}