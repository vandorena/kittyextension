// cat.js
export class Cat {
    constructor(cat_type) {
        this.cat_type = cat_type;
        this.typeindex = ["orange","white"];
        this.holder_array = [["orange-cat.gif", "orange-cat-nap.gif", "sad.gif","cat-burger.gif"],["cat-pixel-cat.gif", "cute-cat.gif"]];
        this.current_gif = "none";
        this.changeExpressionToNormal();
    }

    // Method to display the cat's current state
    display() {
        console.log(`Cat Type: ${this.cat_type}, Current Expression: ${this.current_expression}, Current GIF: ${this.current_gif}`);
    }

    // Method to change the current expression to "normal"
    changeExpressionToNormal() {
        this.current_gif  = this.holder_array[this.typeindex.indexOf(this.cat_type)][0];
    
    }
    changeExpressionToNap() {
        if (this.cat_type === "orange") {
            this.current_gif = this.holder_array[this.typeindex.indexOf(this.cat_type)][1];
        }
    }
    changeExpressionToSad() {
        if (this.cat_type === "orange") {
            this.current_gif = this.holder_array[this.typeindex.indexOf(this.cat_type)][2];
        }
    }
    changeExpressionToEat() {
        if (this.cat_type === "orange") {
            this.current_gif = this.holder_array[this.typeindex.indexOf(this.cat_type)][3];
        }
    }
    changeCatType() {
        if (this.cat_type === "orange") {
            this.cat_type = "white";
        } else {
            this.cat_type = "orange";
        }
        this.changeExpressionToNormal();
    }
}

// Example usage; // Output: Cat Type: orange, Current Expression: normal, Current GIF: orange-cat-nap.gif