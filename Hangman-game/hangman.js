document.getElementById("btn-start").addEventListener("click", function() {
    Hangman.reset();
});

let Hangman = (function () {
    'use strict';

    class Hangman {
        constructor(elId) {
            this.elId = elId;
            //  words
            this.words = mots;
        }
        reset() {
            this.STOPPED = false;
            this.MISTAKES = 0;
            this.GUESSES = [];
            this.WORD = this.words[Math.floor(Math.random() * this.words.length)];
            this.hideElementByClass('h');
            this.showElementByIdWithContent(this.elId + "_guessbox", null);
            this.showElementByIdWithContent(this.elId + "_word", this.getGuessedfWord());
        }
        guess(letter) {
            letter = letter.charAt(0).toUpperCase();
            if (this.STOPPED || this.GUESSES.indexOf(letter) > -1) {
                return;
            }
            this.GUESSES.push(letter);
            this.showElementByIdWithContent(this.elId + "_word", this.getGuessedfWord());
            this.showElementByIdWithContent(this.elId + "_guesses", this.GUESSES.join(''));
            if (this.WORD.indexOf(letter) === -1) {
                this.MISTAKES++;
                this.showElementByIdWithContent(this.elId + "_" + this.MISTAKES, null);
                if (this.MISTAKES === 6) {
                    this.showElementByIdWithContent(this.elId + "_end", "<span class='game-over'>GAME OVER!</span><br/>The word was: <span class='correct-word'> <br/>" + this.WORD);
                    this.STOPPED = true;
                }
            } else if (this.WORD.indexOf(this.getGuessedfWord()) !== -1) {
                this.showElementByIdWithContent(this.elId + "_end", "<span class='you-made-it'>You made it!</span><br/>The word was: <span class='correct-word'> <br/> " + this.WORD);

            }
        }
        showElementByIdWithContent(elId, content) {
            if (content !== null) {
                document.getElementById(elId).innerHTML = content;
            }
            document.getElementById(elId).style.opacity = 1;
        }
        hideElementByClass(elClass) {
            let elements = document.getElementsByClassName(elClass), i;
            for (i = 0; i < elements.length; i++) {
                elements[i].style.opacity = 0;
            }
        }
        getGuessedfWord() {
            let result = "", i;
            for (i = 0; i < this.WORD.length; i++) {
                result += (this.GUESSES.indexOf(this.WORD[i]) > -1) ?
                    this.WORD[i] : "_";
            }
            return result;
        }
    }






    return new Hangman('hangm');
}());
