class WriteCode {
    constructor(time_ms, inputId, codes) {
        this.time_ms = time_ms;
        this.inputId = inputId;
        this.codes = codes;
        this.finish = true;
    }

    // stop script EX:(py: time.sleep()) (private function)
    #sleep() {
        return new Promise(resolve => setTimeout(resolve, this.time_ms));
    }

    // write each char with a intermediate time (add highlight.js) (async)
    async updateCodeText() {
        this.finish = false;
        const input = document.getElementById(this.inputId);
        input.innerHTML = ""

        for (let line of this.codes) {

            let idx_1 = 0;
            for (let char of line.split("")) {

                let idx_2 = 0;
                input.innerHTML = input.innerHTML + char;
                hljs.highlightBlock(input);
                idx_2++;
                await this.#sleep();
            }
            input.innerHTML = input.innerHTML + "\n";
            idx_1++;
        }
        input.innerHTML = input.innerHTML + "\n\n";
        this.finish = true;
    }
}